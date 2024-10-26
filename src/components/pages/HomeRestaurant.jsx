import { useNavigate } from 'react-router-dom';


export default function HomeRestaurant() {
    const navigate = useNavigate();
    const handleVolver = () => {navigate(-1)}
    
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className="mt-5">
                    <h2 className="text-gray-700 text-2xl font-bold text-center mb-2">
                        RESTAURANTE
                    </h2>
                    <hr className="border-1 border-gray-700" />
                </div>
            </div>
        </>
    )
}