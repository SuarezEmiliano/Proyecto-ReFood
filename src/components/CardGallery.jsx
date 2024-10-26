import React from 'react';

const mockFoods = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Clásica pizza italiana con salsa de tomate, mozzarella y albahaca fresca.",
        price: 7800,
        imageUrl: "https://www.clarin.com/img/2023/08/01/SL3EslnOA_360x240__1.jpg"
    },
    {
        id: 2,
        name: "Sushi Variado",
        description: "Selección de sushi fresco, incluyendo nigiri, sashimi y rolls.",
        price: 10500,
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/83/12/ba/combo-red30.jpg"
    },
    {
        id: 3,
        name: "Tacos de Carne Asada",
        description: "Deliciosos tacos de carne asada con cebolla, cilantro y salsa fresca.",
        price: 9700,
        imageUrl: "https://cookingformysoul.com/wp-content/uploads/2024/04/feat-carne-asada-tacos-min.jpg"
    },
    {
        id: 4,
        name: "Ensalada César",
        description: "Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.",
        price: 5200,
        imageUrl: "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web.jpg"
    },
    {
        id: 5,
        name: "Pastel de Chocolate",
        description: "Delicioso pastel de chocolate con cobertura de ganache y fresas.",
        price: 3800,
        imageUrl: "https://peopleenespanol.com/thmb/r0tzymajOXtWpFuQMCFn4xGjM4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1170f6d4-65a5-440c-a66b-01c6e5b06dca-7137a5706bee4ce7aabc4df13d713d2e.jpg"
    },
];

const CardGallery = () => {
    return (
        <div className="flex flex-wrap justify-center space-x-4 p-4">
            {mockFoods.map((food) => (
                <div key={food.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-200 transform hover:scale-105">
                    <img className="w-full h-40 object-cover transition-transform duration-200" src={food.imageUrl} alt={food.name} />
                    <div className="p-4">
                        <h2 className="font-bold text-xl">{food.name}</h2>
                        <p className="text-gray-700">{food.description}</p>
                        <span className="block mt-2 text-lg font-semibold">${food.price.toFixed(2)}</span>
                        <button className="mt-4 w-full border-[#278136] hover:bg-[#278136] text-[#278136] hover:text-white font-semibold py-2 rounded">
                            Ver más
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGallery;
