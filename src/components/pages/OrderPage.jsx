import { useState } from "react";
import NavbarOrder from '../layout/NavbarOrder';
import { CarouselHomeTop } from "../CarouselHomeTop";
import { HomeTop } from '../HomeTop';
import imageRestaurant1 from "../../assets/restaurante1.jpg";
import  CardGallery  from '../CardGallery';

const images = [
    imageRestaurant1,
];

export default function OrderPage() {
    const sushiDish = {
        name: "Sushi Especial",
        description: "Deléitate con nuestra especialidad de sushi, hecha con los ingredientes más frescos y una fusión perfecta de sabores. Esta creación única combina la suavidad del salmón y el atún con la cremosidad del aguacate, todo envuelto en arroz perfectamente sazonado y alga nori.",
        ingredients: "Salmón, atún, aguacate, arroz, alga nori, wasabi, salsa de soja.",
        price: 1200,
        amount: "8 piezas",
        imageUrl: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/06/17/17186166965831.jpg",
    };

    const [quantity, setQuantity] = useState(1); // Estado para la cantidad

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Calcular el precio total
    const totalPrice = sushiDish.price * quantity;

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0">
                <img 
                    src={imageRestaurant1} 
                    alt="Fondo"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="relative min-h-screen  flex flex-col items-center">
                <NavbarOrder />

                <div className="flex flex-wrap max-w-5xl w-full p-4 mt-[200px]">
                    <div className="w-full md:w-1/2 p-2">
                        <div className="h-full border border-gray-300 rounded-md overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345081403!2d144.95373531531583!3d-37.816279979751056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7e945b%3A0x5045675218ceed2!2sGoogle!5e0!3m2!1sen!2sus!4v1638353141657!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-2 flex justify-center">
                        <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src={sushiDish.imageUrl}
                                alt={sushiDish.name}
                                className="w-full h-48 object-cover rounded-t-md"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold mb-2">{sushiDish.name}</h2>
                                <p className="text-gray-600 mb-2">
                                    <strong>Ingredientes:</strong> {sushiDish.ingredients}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Descripción:</strong> {sushiDish.description}
                                </p>
                                <h3 className="text-lg font-semibold mb-2">Seleccionar la cantidad de porciones:</h3>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xl font-semibold text-gray-800">${totalPrice}</span>
                                    <div className="flex items-center">
                                        <button onClick={decreaseQuantity} className="px-2 py-1 border border-gray-300 rounded-md">-</button>
                                        <span className="mx-2">{quantity}</span>
                                        <button onClick={increaseQuantity} className="px-2 py-1 border border-gray-300 rounded-md">+</button>
                                    </div>
                                </div>

                                <button className="w-full h-10 flex items-center justify-center border-[#278136] hover:bg-[#278136] text-[#278136] hover:text-white font-semibold rounded-md transition-all duration-200">
                                    Ordenar
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[150px]'>
                    <CardGallery />
                </div>
            </div>
        </div>
    );
}
