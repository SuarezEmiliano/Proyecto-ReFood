import Navbar from '../layout/Navbar'
import fotobotonenvio from '../../assets/botonenvio.png'
import { useNavigate } from "react-router-dom";
import { HomeTop } from '../HomeTop';
import  CardGallery  from '../CardGallery';

export default function Home() {

    const navigate = useNavigate();
    const handleFormOrder = () => { navigate('/orderpage') }
    return (
        <>
            <div className="min-h-screen bg-[#f8f3df]">
                <Navbar />
                <HomeTop />
                <div className='mt-10'>
                    <CardGallery />
                </div>
                <div className='mt-10'>
                    <CardGallery />
                </div>
            </div>
        </>
    )
}