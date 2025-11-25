import { Link } from 'react-router-dom';
import bodyParts from '../assets/BodyParts/bodyParts.js';
import Card from '../components/Card.jsx';
import { useState } from 'react';

export default function BodyParts() {
    const [rate, setRate] = useState(1);
    const [showWords, setShowWords] = useState(true);
    return (
        <>
            <div className='flex mb-4'>
                <Link to={'/'} className='bg-slate-300 rounded-4xl p-4 mr-4 hover:bg-slate-400'>
                    &#8592; Back to menu
                </Link>
                <div className='flex bg-slate-300 p-4 rounded-3xl justify-center max-w-1/3 mx-auto'>
                    <label className="flex items-center gap-2 mr-4">
                        <span className="text-sm">Show Words</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                aria-label="Ver Palabras"
                                checked={showWords}
                                onChange={(e) => setShowWords(e.target.checked)}
                            />
                            <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors" />
                            <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full transform peer-checked:translate-x-4 transition-transform shadow" />
                        </div>
                    </label>

                    <div className="flex items-center gap-2">
                        <p>Velocity</p>
                        <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.1"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="h-2 w-40"
                            aria-label="Velocidad de reproducción"
                        />
                        <span className="text-sm w-8 text-right">{rate.toFixed(1)}</span>
                    </div>
                </div>

            </div>

            <div className="max-w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bodyParts.map((bodyPart) => (
                    <Card key={bodyPart.name} image={bodyPart.image} word={bodyPart.name} rate={rate} showWords={showWords} />
                ))}
            </div>
        </>
    )
}