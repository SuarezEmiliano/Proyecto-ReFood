import { useNavigate } from "react-router-dom";

const mockFoods = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Clásica pizza italiana con salsa de tomate, mozzarella y albahaca fresca.",
        price: 7800,
        discount: 20,
        imageUrl: "https://www.clarin.com/img/2023/08/01/SL3EslnOA_360x240__1.jpg",
    },
    {
        id: 2,
        name: "Sushi Variado",
        description: "Selección de sushi fresco, incluyendo nigiri, sashimi y rolls.",
        price: 10500,
        discount: 15,
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/83/12/ba/combo-red30.jpg",
    },
    {
        id: 3,
        name: "Tacos de Carne Asada",
        description: "Deliciosos tacos de carne asada con cebolla, cilantro y salsa fresca.",
        price: 9700,
        discount: 10,
        imageUrl: "https://cookingformysoul.com/wp-content/uploads/2024/04/feat-carne-asada-tacos-min.jpg",
    },
    {
        id: 4,
        name: "Ravioles",
        description: "Ravioles de verdura con salsa de tomate y albóndigas de carne.",
        price: 5200,
        discount: 10,
        imageUrl: "https://images.getrecipekit.com/20220120120502-ravioles-con-salsa-de-tomte.png?width=650&quality=90&",
    },
    {
        id: 5,
        name: "Pastel de Chocolate",
        description: "Delicioso pastel de chocolate con cobertura de ganache y fresas.",
        price: 3800,
        discount: 15,
        imageUrl: "https://peopleenespanol.com/thmb/r0tzymajOXtWpFuQMCFn4xGjM4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1170f6d4-65a5-440c-a66b-01c6e5b06dca-7137a5706bee4ce7aabc4df13d713d2e.jpg",
    },
];

export default function CardGallery() {
    const navigate = useNavigate();

    const handleVerPedido = (id) => {
        navigate(`/OrderPage?id=${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {mockFoods.map((food) => {
                const discountedPrice = food.price * (1 - food.discount / 100);
                return (
                    <div
                        key={food.id}
                        className="max-w-xs w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            className="w-full h-40 object-cover"
                            src={food.imageUrl}
                            alt={food.name}
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-xl mb-1">{food.name}</h3>
                            <p className="text-gray-600 text-sm mb-3">{food.description}</p>
                            <div className="flex items-center justify-between text-sm font-semibold">
                                <span className="text-gray-500 line-through">
                                    ${food.price.toFixed(2)}
                                </span>
                                <span className="text-green-600 text-lg">
                                    ${discountedPrice.toFixed(2)}
                                </span>
                                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                                    -{food.discount}%
                                </span>
                            </div>
                            <button
                                onClick={() => handleVerPedido(food.id)}
                                className="mt-4 w-full bg-[#278136] hover:bg-[#1f6a2a] text-white font-semibold py-2 rounded transition-colors"
                            >
                                Ver más
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
