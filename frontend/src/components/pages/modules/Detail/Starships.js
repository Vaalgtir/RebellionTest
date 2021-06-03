import React from 'react'


function Starships({name, MGLT, cargo_capacity, consumables, cost_in_credits, crew, hyperdrive_rating, length, manufacturer, max_atmosphering_speed, model, passengers, starship_class}) {

    return (
        <div className='starships'>
            <div> <h1>Nom :</h1> <span>{name}</span> </div>
            <div> <h1>MGLT :</h1> <span>{MGLT}</span> </div>
            <div> <h1>Capacité de cargo :</h1> <span>{cargo_capacity}</span> </div>
            <div> <h1>Rations :</h1> <span>{consumables}</span> </div>
            <div> <h1>Prix en Crédits :</h1> <span>{cost_in_credits}</span> </div>
            <div> <h1>Équipage :</h1> <span>{crew}</span> </div>
            <div> <h1>Note Hyperdrive :</h1> <span>{hyperdrive_rating}</span> </div>
            <div> <h1>Longueur :</h1> <span>{length}</span> </div>
            <div> <h1>Créateur :</h1> <span>{manufacturer}</span> </div>
            <div> <h1>Vitesse atmosphérique maximale :</h1> <span>{max_atmosphering_speed}</span> </div>
            <div> <h1>Modèle :</h1> <span>{model}</span> </div>
            <div> <h1>Passagers :</h1> <span>{passengers}</span> </div>
            <div> <h1>Classe de vaisseaux :</h1> <span>{starship_class}</span> </div>
        </div>
    )
}

export default Starships
