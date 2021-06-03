import React from 'react'


function SearchForm({category, setCategory, search, handleSearch, content}) {

    return (
        <div className="wrapper__Search__form">
            <h1>Search</h1>
            <select
                value={category}
                onChange={event => setCategory(event.target.value)}
            >
                <option value="">Que voulez vous chercher ?</option>
                <option value="films">Films</option>
                <option value="people">Personnage</option>
                <option value="planets">Planètes</option>
                <option value="species">Espèces</option>
                <option value="starships">Vaisseaux</option>
                <option value="vehicles">Vehicules</option>
            </select>
            {content.length > 0 ? (
                <input
                    type='text'
                    placeholder='Tapez votre recherche ici'
                    value={search}
                    onChange={event => handleSearch(event.target.value)}
                ></input>
            ) : (null)}
        </div>
    )
}

export default SearchForm
