import React from 'react'


function Planets({climate, diameter, gravity, name, orbital_period, population, rotation_period, surface_water, terrain}) {

    return (
        <div className='planets'>
            <div> <h1>Climat :</h1> <span>{climate}</span> </div>
            <div> <h1>Diamètre :</h1> <span>{diameter}</span> </div>
            <div> <h1>Gravité :</h1> <span>{gravity}</span> </div>
            <div> <h1>Nom :</h1> <span>{name}</span> </div>
            <div> <h1>Période d'orbite :</h1> <span>{orbital_period}</span> </div>
            <div> <h1>Population :</h1> <span>{population}</span> </div>
            <div> <h1>Période d'orientation :</h1> <span>{rotation_period}</span> </div>
            <div> <h1>Surface aqueuse :</h1> <span>{surface_water}</span> </div>
            <div> <h1>Terrain :</h1> <span>{terrain}</span> </div>
        </div>
    )
}

export default Planets
