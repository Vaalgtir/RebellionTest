import React from 'react'


function People({name, birth_year, eye_color, gender, hair_color, height, mass, skin_color}) {

    return (
        <div className='people'>
            <div> <h1>Nom :</h1> <span>{name}</span> </div>
            <div> <h1>Année de naissance :</h1> <span>{birth_year}</span> </div>
            <div> <h1>Couleur des yeux :</h1> <span>{eye_color}</span> </div>
            <div> <h1>Genre :</h1> <span>{gender}</span> </div>
            <div> <h1>Couleur de cheveux :</h1> <span>{hair_color}</span> </div>
            <div> <h1>Taille :</h1> <span>{height}</span> </div>
            <div> <h1>Masse :</h1> <span>{mass}</span> </div>
            <div> <h1>Couleur de peau :</h1> <span>{skin_color}</span> </div>
        </div>
    )
}

export default People
