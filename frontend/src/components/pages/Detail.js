import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import './Detail.scss';

import Vehicles from './modules/Detail/Vehicles';
import Starships from './modules/Detail/Starships';
import Species from './modules/Detail/Species';
import People from './modules/Detail/People';
import Films from './modules/Detail/Films';
import Planets from './modules/Detail/Planets';

function Detail(props) {
    const [category] = useState(props.match.params.id.split('-')[0])
    const [id] = useState(props.match.params.id.split('-')[1])
    const [content, setContent] = useState([])

    const history = useHistory();

    useEffect(() => {
        var param = category+'/'+id+'/'
        axios.post('http://localhost:5000/api/data/', {param})
            .then(res => {
                console.log(res.data);
                setContent(res.data)
                for (var i = 0; i < res.data.films.length; i++) {

                }
            })
            .catch(err => {
                console.log(err);
            })
    })
    
    function goHome() {
        history.push({
            pathname: "/search"
        })
    }

    return (
        <div className="wrapper__Detail">
            {category === 'planets' ? (
                <Planets
                    climate = {content.climate}
                    diameter = {content.diameter}
                    gravity = {content.gravity}
                    name = {content.name}
                    orbital_period = {content.orbital_period}
                    population = {content.population}
                    rotation_period = {content.rotation_period}
                    surface_water = {content.surface_water}
                    terrain = {content.terrain}
                />
            ) : (
                category === 'films' ? (
                    <Films
                        title = {content.title}
                        director = {content.director}
                        opening_crawl = {content.opening_crawl}
                        producer = {content.producer}
                        release_date = {content.release_date}
                    />
                ) :(
                    category === 'people' ? (
                        <People
                            name =  {content.name}
                            birth_year =  {content.birth_year}
                            eye_color =  {content.eye_color}
                            gender =  {content.gender}
                            hair_color =  {content.hair_color}
                            height =  {content.height}
                            mass =  {content.mass}
                            skin_color =  {content.skin_color}
                        />
                    ) : (
                        category === 'species' ? (
                            <Species
                                name = {content.name}
                                average_height = {content.average_height}
                                average_lifespan = {content.average_lifespan}
                                classification = {content.classification}
                                designation = {content.designation}
                                eye_colors = {content.eye_colors}
                                hair_colors = {content.hair_colors}
                                language = {content.language}
                                skin_colors = {content.skin_colors}
                            />
                        ) : (
                            category === 'starships' ? (
                                <Starships
                                    name = {content.name}
                                    MGLT = {content.MGLT}
                                    cargo_capacity = {content.cargo_capacity}
                                    consumables = {content.consumables}
                                    cost_in_credits = {content.cost_in_credits}
                                    crew = {content.crew}
                                    hyperdrive_rating = {content.hyperdrive_rating}
                                    length = {content.length}
                                    manufacturer = {content.manufacturer}
                                    max_atmosphering_speed = {content.max_atmosphering_speed}
                                    model = {content.model}
                                    passengers = {content.passengers}
                                    starship_class = {content.starship_class}
                                />
                            ) : (
                                category === 'vehicles' ? (
                                    <Vehicles
                                        name = {content.name}
                                        cargo_capacity = {content.cargo_capacity}
                                        consumables = {content.consumables}
                                        cost_in_credits = {content.cost_in_credits}
                                        crew = {content.crew}
                                        length = {content.length}
                                        manufacturer = {content.manufacturer}
                                        max_atmosphering_speed = {content.max_atmosphering_speed}
                                        model = {content.model}
                                        passengers = {content.passengers}
                                        vehicle_class = {content.vehicle_class}
                                    />
                                ) : (
                                    null
                                )
                            )
                        )
                    )
                )
            )}
            <button
                onClick={goHome}
            >Retour à l'accueil</button>
        </div>
    )
}

export default Detail
