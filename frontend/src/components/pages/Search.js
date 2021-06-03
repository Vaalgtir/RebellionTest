import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import jwt from 'jsonwebtoken';

import './Search.scss';

import SearchForm from './modules/Search/SearchForm';


var debounce

function Search() {
    const [content, setContent] = useState([])
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)


    const history = useHistory();

    useEffect(() => {
        function testToken() {
            if (localStorage.getItem('TOKEN') !== null) {
                try {
                    jwt.verify(localStorage.getItem('TOKEN'), 'MCFCGNRJBCNTAGQQSTLBMMSFX')
                } catch {
                    history.push('')
                }
            } else {
                history.push('')
            }
        }
        testToken()
    })
    useEffect(() => {
        if(category !== '') {
            setLoading(true)
            var param = category+'/'
            // here usage of a post method to send a body with the request, because of an axios limitation
            axios.post('http://localhost:5000/api/data/', {param})
                .then(res => {
                    setContent(res.data.results)
                    setNext(res.data.next)
                    setPrevious(null)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            setContent([])
        }
    }, [category])


    // FUNCTIONS --------------------------------------------------------
    function gotoSiblings(url) {
        // here usage of a post method to send a body with the request, because of an axios limitation
        axios.post('http://localhost:5000/api/data/nextPrev/', {url})
            .then(res => {
                setContent(res.data.results)
                setNext(res.data.next)
                setPrevious(res.data.previous)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSearch(search) {
        setLoading(true)
        setSearch(search)
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            var reqSearch = search.split(' ').join('+')
            var param = category+'/?search='+reqSearch
            // here usage of a post method to send a body with the request, because of an axios limitation
            axios.post('http://localhost:5000/api/data/', {param})
                .then(res => {
                    setContent(res.data.results)
                    setNext(res.data.next)
                    setPrevious(null)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err);
                })
        }, 350)

    }

    function handleLink(url) {
        var urlTab = url.split('/')
        var id = urlTab[urlTab.length-2]
        history.push({
            pathname: "/detail/"+category+'-'+id
        })
    }
    
    return (
        <>
            <div className="wrapper__Search">
                <SearchForm
                    category = {category}
                    setCategory = {setCategory}
                    search = {search}
                    handleSearch = {handleSearch}
                    content = {content}
                />
                {loading ? (
                    <div>
                        loading...
                    </div>
                ) : (
                    // DISPLAY OF THE CONTENT
                    content.length > 0 ? (
                        <>
                            <div className="wrapper__Search__results">
                                {category === 'films' ? (
                                    content.map((item) => (
                                        <div className="item" onClick={() => {handleLink(item.url)}}>{item.title} <span><i class="fas fa-chevron-right"></i></span> </div>
                                    ))
                                ) : (
                                    content.map((item) => (
                                        <div className="item" onClick={() => {handleLink(item.url)}}>{item.name} <span><i class="fas fa-chevron-right"></i></span> </div>
                                    ))
                                )}
                                {next !== null ? (
                                    previous !== null ? (
                                        <div className="wrapper__Search__button">
                                            <button
                                                onClick={() => gotoSiblings(previous)}
                                            >Previous</button>
                                            <button
                                                onClick={() => gotoSiblings(next)}
                                            >Next</button>
                                        </div>
                                    ) : (
                                        <div className="wrapper__Search__button">
                                            <button
                                                onClick={() => gotoSiblings(next)}
                                            >Next</button>
                                        </div>
                                    )
                                ) : (
                                    previous !== null ? (
                                        <div className="wrapper__Search__button">
                                            <button
                                                onClick={() => gotoSiblings(previous)}
                                            >Previous</button>
                                        </div>
                                    ) : (
                                        null
                                    )
                                )}
                            </div>
                        </>
                    ) : (null)
                )}
            </div>
        </>
    )
}

export default Search
