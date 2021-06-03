import React from 'react'


function Films({title, director, opening_crawl, producer, release_date}) {

    return (
        <div className='films'>
            <div> <h1>Titre :</h1> <span>{title}</span> </div>
            <div> <h1>Directeur :</h1> <span>{director}</span> </div>
            <div className="opening"> <h1>Générique d'ouverture :</h1> <span>{opening_crawl}</span> </div>
            <div> <h1>Producteur :</h1> <span>{producer}</span> </div>
            <div> <h1>Date de sortie :</h1> <span>{release_date}</span> </div>
        </div>
    )
}

export default Films
