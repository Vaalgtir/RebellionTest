import React from 'react'


function Species({name, average_height, average_lifespan, classification, designation, eye_colors, hair_colors, language, skin_colors}) {

    return (
        <div className='species'>
            <div> <h1>Nom :</h1> <span>{name}</span> </div>
            <div> <h1>Taille moyenne :</h1> <span>{average_height}</span> </div>
            <div> <h1>Durée de vie moyenne :</h1> <span>{average_lifespan}</span> </div>
            <div> <h1>Classification :</h1> <span>{classification}</span> </div>
            <div> <h1>Designation :</h1> <span>{designation}</span> </div>
            <div> <h1>Couleur des yeux :</h1> <span>{eye_colors}</span> </div>
            <div> <h1>Couleur des cheveux :</h1> <span>{hair_colors}</span> </div>
            <div> <h1>Langue :</h1> <span>{language}</span> </div>
            <div> <h1>Couleur de peau :</h1> <span>{skin_colors}</span> </div>
        </div>
    )
}

export default Species
