import lisent from '../assets/icons/lisent.png'
import bodyParts from '../assets/BodyParts/bodyParts.js'
import { useEffect, useState } from 'react'
import speaker from '../helpers/speaker.js'
import { Link } from 'react-router-dom'
import sounds from '../helpers/Sounds.js'

export default function BodyPartsTest() {

    const [score, setScore] = useState(0)
    const [currentPart, setCurrentPart] = useState(0)
    const [partsRandom, setPartsRandom] = useState([])
    const [options, setOptions] = useState([])
    const [lives, setLives] = useState(5)
    const [disableImg, setDisableImg] = useState([])
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
            createOptions()
        }
    }, [partsRandom])

    useEffect(() => {
        if (partsRandom.length > 0 && currentPart < partsRandom.length) {
            createOptions()
        }
    }, [currentPart])



    const createTest = () => {
        const shuffled = [...bodyParts].sort(() => Math.random() - 0.5)
        setPartsRandom(shuffled)
    }

    const repeatSound = () => {
        if (partsRandom.length > 0)
            speaker(partsRandom[currentPart].name)
    }

    const createOptions = () => {
        console.log('creating options')
        let opts = [partsRandom[currentPart]]
        while (opts.length < 5) {
            let randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]
            if (!opts.includes(randomPart)) {
                opts.push(randomPart)
            }
        }
        setOptions(opts.sort(() => Math.random() - 0.5))
        console.log(options)

    }

    const handleAnswer = (choise) => {
        if (currentPart <= partsRandom.length - 1) {

            if (partsRandom[currentPart].name == choise) {

                sounds.playCorrectSound()
                setScore(score + 1)

                if (currentPart < partsRandom.length - 1) {
                    setCurrentPart(currentPart + 1)
                } else {
                    console.log("Test terminado")
                    // aquí puedes mostrar un mensaje final o reiniciar
                }

            } else {
                if (lives > 0) {
                    sounds.playErrorSound()
                    setDisableImg([...disableImg, choise])
                    setLives(lives - 1)
                }
            }
        }
    }
    console.log()

    const reset = () => {
        setScore(0)
        setLives(maxLives)
        setCurrentPart(0)
        setPartsRandom([])
        setDisableImg([])
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

                                options.map(option => {
                                    const isDisabled = disableImg.includes(option.name)
                                    return (
                                        <div key={option.name} onClick={!isDisabled ? e => handleAnswer(e.target.name) : null}>
                                            <div className={`rounded-3xl w-48 h-48 overflow-hidden 
                                                ${isDisabled ? 'bg-red-500 opacity-30' : ''}`}
                                            >
                                                <img name={option.name} src={option.image}
                                                    className={`rounded-3xl w-48 h-48 transition duration-300 ease-in-out 
                                                    hover:brightness-75 hover:scale-105 cursor-pointer object-cover`} />

                                            </div>
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