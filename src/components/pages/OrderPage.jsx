import { useState } from "react";
import NavbarOrder from '../layout/NavbarOrder';
import imageRestaurant1 from "../../assets/restaurante1.jpg";
import CardGallery from '../CardGallery';

export default function OrderPage() {
    const sushiDish = {
        name: "Sushi Especial",
        description: "Deléitate con nuestra especialidad de sushi, hecha con los ingredientes más frescos y una fusión perfecta de sabores.",
        ingredients: "Salmón, atún, aguacate, arroz, alga nori, wasabi, salsa de soja.",
        price: 4200,
        discount: 20,
        amount: "8 piezas",
        imageUrl: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/06/17/17186166965831.jpg",
    };

    const [quantity, setQuantity] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");

    const allItems = [
        { name: "Sushi Especial", type: "japonés", price: 4200, discount: 20, image: sushiDish.imageUrl },
        { name: "Pizza Napolitana", type: "italiano", price: 3500, discount: 0, image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" },
        { name: "Empanadas Salteñas", type: "argentino", price: 1500, discount: 10, image: "https://resizer.glanacion.com/resizer/v2/empanadas-de-7IXBPJ5JHBDCBHSUDK3CFZ5XHU.jpg?auth=9455e6ab67367ad88ef7cc1b4e5246742b66a926f59d0a7dabaf15bc22919c10&width=1280&height=854&quality=70&smart=true" },
        { name: "Sushi Especial", type: "japonés", price: 4200, discount: 20, image: sushiDish.imageUrl },
    ];

    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterType ? item.type === filterType : true)
    );

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const totalPrice = sushiDish.price * quantity;

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Imagen de fondo con opacidad */}
            <div className="absolute inset-0">
                <img
                    src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80"} // ejemplo de fondo
                    alt="Fondo"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Contenido principal */}
            <div className="relative min-h-screen flex flex-col items-center w-full">
                <NavbarOrder />

                <div className="flex flex-wrap max-w-5xl w-full p-4 mt-[200px] bg-black/50 rounded-md text-white">
                    <div className="w-full md:w-1/2 p-2">
                        <div className="h-full border border-gray-300 rounded-md overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18..." // reemplaza con tu URL real
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación"
                            ></iframe>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-2 flex justify-center">
                        <div className="max-w-md w-full bg-white text-black rounded-xl shadow-md overflow-hidden">
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
                                    <div className="flex items-center mt-2">
                                        <span className="text-xl font-semibold text-gray-800">${totalPrice}</span>
                                        <span className="ml-3 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md">
                                            -{sushiDish.discount}% ¡Descuento!
                                        </span>
                                    </div>
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

                {/* Título de la sección */}
                <h1 className="my-[50px] text-5xl font-bold text-white ml-4">En otros restaurantes ⇓</h1>

                {/* Filtros visuales actualizados */}
                <div className="bg-black/50 p-4 px-6 rounded-xl mb-4 w-full max-w-5xl mx-auto text-white">
                    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-[20%] p-2 rounded-md text-black"
                        />

                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="w-full md:w-[15%] p-2 rounded-md text-black"
                        >
                            <option value="">Todos los tipos</option>
                            <option value="japonés">Japonés</option>
                            <option value="italiano">Italiano</option>
                            <option value="argentino">Argentino</option>
                            <option value="mexicano">Mexicano</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Precio mínimo"
                            className="w-full md:w-[15%] p-2 rounded-md text-black"
                        />

                        <input
                            type="number"
                            placeholder="Precio máximo"
                            className="w-full md:w-[15%] p-2 rounded-md text-black"
                        />

                        <select className="w-full md:w-[15%] p-2 rounded-md text-black">
                            <option value="">Ordenar por...</option>
                            <option value="precioAsc">Precio ↑</option>
                            <option value="precioDesc">Precio ↓</option>
                            <option value="alfabetico">A-Z</option>
                        </select>

                        <label className="flex items-center space-x-2 w-full md:w-auto">
                            <input type="checkbox" className="accent-green-600" />
                            <span>Solo con descuento</span>
                        </label>
                    </div>
                </div>

                {/* Galería con cards en grid */}
                <div className="relative w-full max-w-5xl mx-auto px-6">
                    {/* Flecha izquierda */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black"
                        aria-label="Scroll Left"
                    >
                        &#8592;
                    </button>

                    {/* Contenedor scroll horizontal */}
                    <div
                        className="flex overflow-x-auto scrollbar-hide gap-4 py-6 bg-black/70 rounded-xl px-6"
                    >
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[250px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4 text-black">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600 capitalize">{item.type}</p>
                                    <div className="flex items-center justify-between text-sm font-semibold">
                                        <span className="text-gray-500 line-through">$10000</span>
                                        <span className="text-green-600 text-lg">$8000</span>
                                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                                            -25%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Flecha derecha */}
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black"
                        aria-label="Scroll Right"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
}
