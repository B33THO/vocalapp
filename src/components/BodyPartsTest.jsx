import lisent from '../assets/icons/lisent.png'
import bodyParts from '../assets/BodyParts/bodyParts.js'
import { useEffect, useState } from 'react'
import speaker from '../helpers/speaker.js'
import { Link } from 'react-router-dom'

export default function BodyPartsTest() {

    const [score, setScore] = useState(0)
    const [currentPart, setCurrentPart] = useState(0)
    const [partsRandom, setPartsRandom] = useState([])
    const [lives, setLives] = useState(5)
    const maxLives = 5

    useEffect(() => {
        createTest()
    }, [])

    useEffect(() => {
        if (partsRandom.length > 0 && currentPart < partsRandom.length) {
            speaker(partsRandom[currentPart].name)
        }

    }, [currentPart])

    useEffect(() => {
        if (partsRandom.length > 0) {
            speaker(partsRandom[0].name)
        }
    }, [partsRandom])


    const createTest = () => {
        const shuffled = [...bodyParts].sort(() => Math.random() - 0.5)
        setPartsRandom(shuffled)
    }

    const repeatSound = () => {
        if (partsRandom.length > 0)
            speaker(partsRandom[currentPart].name)
    }

    const createOptions = () => {
        if (partsRandom.length === 0) return []

        let options = [partsRandom[currentPart]]
        while (options.length < 5) {
            let randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]
            if (!options.includes(randomPart)) {
                options.push(randomPart)
            }
        }
        return options.sort(() => Math.random() - 0.5)

    }

    const handleAnswer = (choise) => {
        if (currentPart <= partsRandom.length - 1) {

            if (partsRandom[currentPart].name == choise) {

                setScore(score + 1)

                if (currentPart < partsRandom.length - 1) {
                    setCurrentPart(currentPart + 1)
                } else {
                    console.log("Test terminado")
                    // aquí puedes mostrar un mensaje final o reiniciar
                }

            } else {
                if (lives > 0) {
                    setLives(lives - 1)
                }
            }
        }
    }

    const reset = () => {
        setScore(0)
        setLives(maxLives)
        setCurrentPart(0)
        setPartsRandom([])
        createTest()
    }

    return (
        <div className="max-h-screen flex flex-col justify-center items-center gap-16">
            <h2 className="text-6xl">Body Parts Test </h2>
            <div className='flex items-center'>
                <Link to={'/'} className='bg-slate-300 rounded-4xl p-4 mr-4 hover:bg-slate-400'>
                    &#8592; Back to menu
                </Link>
                <div className='bg-slate-300 p-4 rounded-4xl w-2xl text-center flex justify-around'>
                    <h3 className="text-4xl">Score: {score} / {partsRandom.length}</h3>
                    {
                        <div className="flex gap-2 text-4xl">
                            {
                                [...Array(maxLives)].map((_, i) => (
                                    <span key={i} className='text-red-600'>
                                        {i < lives ? '♥' : '♡'}
                                    </span>
                                ))
                            }
                        </div>

                    }
                </div>
            </div>

            <button className='bg-slate-300 hover:bg-blue-200 rounded-full m-auto'
                onClick={repeatSound}
            >
                <img src={lisent} alt="Body Parts Test"
                    className='w-60 h-60  ' />
            </button>

            <div>
                <h3 className="text-3xl">What is this body part?</h3>
                <div className="flex gap-4 mt-4">
                    {
                        lives > 0 ?
                            score < partsRandom.length ?

                                createOptions().map(option => {
                                    return (
                                        <div key={option.name} onClick={e => handleAnswer(e.target.name)}>
                                            <img name={option.name} src={option.image} className='rounded-3xl w-48 h-48 transition 
                                        duration-300 ease-in-out hover:brightness-75 hover:scale-105 cursor-pointer' />
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    <p className='bg-green-300 p-4 w-100 text-center rounded-4xl text-6xl'>Correct!!!</p>
                                </div>
                            :
                            <div className='flex align-middle items-center gap-4'>
                                <p className='bg-red-300 text-red-800 p-4 w-100 text-center rounded-4xl text-6xl'>Try Again</p>
                                <button className='bg-slate-300 rounded-full w-20 h-20 hover:bg-slate-400 text-6xl text-slate-600 flex justify-center'
                                    onClick={reset}
                                >
                                    &#10226;
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}