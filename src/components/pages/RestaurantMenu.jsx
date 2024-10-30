import NavbarOrder from '../layout/NavbarOrder';
import imageRestaurant1 from "../../assets/restaurante1.jpg";
import burguer from "../../assets/deliciosa-hamburguesa-ingredientes-frescos_23-2150857908.avif";
import { useNavigate } from "react-router-dom";

// Mock de platos
const mockFoods = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Clásica pizza italiana con salsa de tomate, mozzarella y albahaca fresca.",
        ingredients: "Salsa de tomate, mozzarella, albahaca",
        price: 4800,
        discount: 10,
        amount: "1 porción",
        imageUrl: "https://www.clarin.com/img/2023/08/01/SL3EslnOA_360x240__1.jpg"
    },
    {
        id: 2,
        name: "Sushi Variado",
        description: "Selección de sushi fresco, incluyendo nigiri, sashimi y rolls.",
        ingredients: "Pescado fresco, arroz, nori, wasabi, salsa de soja",
        price: 5500,
        discount: 15,
        amount: "10 piezas",
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/83/12/ba/combo-red30.jpg"
    },
    {
        id: 3,
        name: "Tacos de Carne Asada",
        description: "Deliciosos tacos de carne asada con cebolla, cilantro y salsa fresca.",
        ingredients: "Carne asada, cebolla, cilantro, tortillas, salsa fresca",
        price: 3700,
        discount: 20,
        amount: "3 piezas",
        imageUrl: "https://cookingformysoul.com/wp-content/uploads/2024/04/feat-carne-asada-tacos-min.jpg"
    },
    {
        id: 4,
        name: "Ravioles",
        description: "Ravioles de verdura con salsa de tomate y albóndigas de carne.",
        ingredients: "Verduras, pasta, salsa de tomate, albóndigas de carne",
        price: 4200,
        discount: 8,
        amount: "1 porción",
        imageUrl: "https://images.getrecipekit.com/20220120120502-ravioles-con-salsa-de-tomte.png?width=650&quality=90&"
    },
    {
        id: 5,
        name: "Pastel de Chocolate",
        description: "Delicioso pastel de chocolate con cobertura de ganache y fresas.",
        ingredients: "Chocolate, fresas, ganache",
        price: 1800,
        discount: 15,
        amount: "1 porción",
        imageUrl: "https://peopleenespanol.com/thmb/r0tzymajOXtWpFuQMCFn4xGjM4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1170f6d4-65a5-440c-a66b-01c6e5b06dca-7137a5706bee4ce7aabc4df13d713d2e.jpg"
    },
    {
        id: 6,
        name: "Hamburguesa Clásica",
        description: "Jugosa hamburguesa de res con queso, lechuga, tomate y aderezo especial.",
        ingredients: "Carne de res, queso, lechuga, tomate, aderezo especial, pan",
        price: 4500,
        discount: 20,
        amount: "1 porción",
        imageUrl: burguer
    },
];

export default function RestaurantMenu() {
    const navigate = useNavigate();
    const handleagregar = () => {
        navigate("/home/restaurant");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0">
                <img
                    src={imageRestaurant1}
                    alt="Fondo"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <NavbarOrder />
            <div className="relative min-h-screen flex flex-col items-center mt-20">

                <div className="flex justify-between items-center w-full max-w-5xl p-4">
                    <h1 className="text-5xl font-bold text-black">MENÚ DEL RESTAURANTE</h1>
                    <button onClick={handleagregar} className="flex items-center text-white bg-[#278136] hover:bg-[#1e6430] py-2 px-4 rounded-md shadow-md">
                        <span className="mr-2">+</span> Agregar Plato
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl p-4 mt-10">
                    {mockFoods.map((food) => (
                        <div key={food.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-200 transform hover:scale-105 mb-4">
                            <img className="w-full h-40 object-cover" src={food.imageUrl} alt={food.name} />
                            <div className="p-4">
                                <h2 className="font-bold text-xl mb-2">{food.name}</h2>
                                <p className="text-gray-700 mb-2"><strong>Ingredientes:</strong> {food.ingredients}</p>
                                <p className="text-gray-700 mb-2"><strong>Descripción:</strong> {food.description}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-lg font-semibold">${food.price.toFixed(2)}</span>
                                    <span className="ml-3 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md">
                                        -{food.discount}% ¡Descuento!
                                    </span>
                                </div>
                                <div className="flex justify-between mt-4 border-t pt-4">
                                    <button onClick={() => alert('Modificar Plato')} className="text-blue-600 hover:underline mr-2">Modificar Plato</button>
                                    <button onClick={() => alert('Eliminar Plato')} className="text-red-600 hover:underline">Eliminar Plato</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}