import { Link } from "react-router-dom";
import bodyPartsIcon from '../assets/icons/bodypartsicon.png';
import bodyPartsTestIcon from '../assets/icons/bodypartstesticon.png';
import playErrorSound from "../helpers/Sounds";

export default function MainMenu() {
    return (
        <>
            <div className="h-screen">
                <div className="flex">
                    <Link to={'/bodyparts'} className="block w-64 mx-auto mt-40 p-6 bg-slate-300 rounded-2xl shadow-lg text-center text-2xl font-semibold">
                        <img src={bodyPartsIcon} alt="Body Parts Icon" className="mx-auto mb-4"/>
                        <p>Study Body Parts</p>
                    </Link>
                    <Link to={'/bodypartstest'} className="block w-64 mx-auto mt-40 p-6 bg-slate-300 rounded-2xl shadow-lg text-center text-2xl font-semibold">
                        <img src={bodyPartsTestIcon} alt="Body Parts Icon" className="mx-auto mb-4"/>
                        <p>Body Parts Test</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
