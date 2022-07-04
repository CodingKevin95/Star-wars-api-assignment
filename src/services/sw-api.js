import axios from 'axios'
import React, { useState, useEffect} from 'react'

function SWapi (){

    const [spaceShip, setSpaceShip] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/?format=json')
        .then(res => {
            console.log(res)
            setSpaceShip(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
        }, [])

    return (
        <div>
            <h1 className='title'>STAR WARS SPACESHIPS</h1>
            <div className='spaceshipbox'>
                {spaceShip.map((spaceShip, id) => (
                <div className='spaceship' key = {id}>
                    <p className='name'>{spaceShip.name}</p>
                    <div className='des'>
                        <p>km/h: {spaceShip.max_atmosphering_speed}</p>
                        <p>Capacity: {spaceShip.cargo_capacity}</p>
                    </div>
                </div>))
                }
            </div>
        </div>
    )
            }

export default SWapi