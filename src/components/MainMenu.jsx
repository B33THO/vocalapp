import { Link } from "react-router-dom";
import bodyPartsIcon from '../assets/icons/bodypartsicon.png';
import bodyPartsTestIcon from '../assets/icons/bodypartstesticon.png';
import abc from '../assets/icons/abc.png';
import playErrorSound from "../helpers/Sounds";

export default function MainMenu() {
    return (
        <>
            <div className="h-screen">
                <div className="flex bg-slate-300 rounded-3xl p-4 gap-4">
                    <Link to={'/bodyparts'} className="w-44 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={bodyPartsIcon} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Study Body Parts</p>
                    </Link>
                    <Link to={'/body'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={bodyPartsIcon} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Body</p>
                    </Link>
                    <Link to={'/bodypartstest'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={bodyPartsTestIcon} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Body Parts Test</p>
                    </Link>
                    <Link to={'/alphabet'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={abc} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Alphabet</p>
                    </Link>
                    <Link to={'/alphabetpractice'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={abc} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Alphabet Practice</p>
                    </Link> 
                    <Link to={'/spelling'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={abc} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Spelling</p>
                    </Link> 
                </div>

                <div className="flex bg-slate-300 rounded-3xl p-4 gap-4 mt-4">
                    <Link to={'/read'} className="w-40 p-6 bg-slate-300 rounded-2xl shadow-md shadow-gray-900 text-center text-2xl font-semibold hover:brightness-85">
                        <img src={bodyPartsTestIcon} alt="Body Parts Icon" className="mx-auto mb-4" />
                        <p>Lectura</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
