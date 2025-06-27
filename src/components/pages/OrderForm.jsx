import { useState } from "react";
import NavbarOrder from '../layout/NavbarOrder';
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
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
    const [deliveryType, setDeliveryType] = useState("retiro");
    const [paymentMethod, setPaymentMethod] = useState("efectivo");
    const [pickupTime, setPickupTime] = useState("");
    const navigate = useNavigate();


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

    const navigateOrderCancel = () => {
        navigate(-1)
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Imagen de fondo con opacidad */}
            <div className="absolute inset-0">
                <img
                    src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80"}
                    alt="Fondo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenido principal */}
            <div className="relative min-h-screen flex flex-col items-center w-full">
                <NavbarOrder />

                {/* Contenedor que alinea formulario y tarjeta */}
                <section className="w-full max-w-6xl mx-auto mt-20 px-4 text-white">
                    <div className="flex flex-col md:flex-row gap-6 bg-black/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl mt-20">

                        {/* Formulario de Pedido */}
                        <div className="w-full md:w-1/2 space-y-8 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
                            <h3 className="text-3xl font-bold text-center text-white">Completar pedido</h3>

                            {/* Método de pago */}
                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">Método de pago</label>
                                <select
                                    className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-green-500 transition"
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <option value="efectivo">Efectivo</option>
                                    <option value="tarjeta">Tarjeta</option>
                                    <option value="mercadopago">Mercado Pago</option>
                                </select>
                            </div>

                            {/* Tipo de entrega */}
                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">Tipo de entrega</label>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {["retiro", "domicilio"].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setDeliveryType(type)}
                                            className={`flex-1 py-3 rounded-lg text-sm font-medium transition border ${deliveryType === type
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                                }`}
                                        >
                                            {type === "retiro" ? "Retiro en local" : "Entrega a domicilio"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Horarios de retiro */}
                            {deliveryType === "retiro" && (
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-3">Elegí el horario para retirar</label>
                                    <div className="flex flex-wrap gap-3">
                                        {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"].map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setPickupTime(time)}
                                                className={`px-4 py-2 rounded-md border transition text-sm font-medium ${pickupTime === time
                                                    ? "bg-green-600 text-white border-green-600"
                                                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Botones */}
                            <div className="flex gap-2">
                            <button
                                type="submit"
                                onClick={navigateOrderCancel}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Cancelar pedido
                            </button>
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Confirmar pedido
                            </button>
                            </div>
                        </div>


                        {/* Tarjeta de producto */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <div className="max-w-md w-full bg-white text-black rounded-xl shadow-md overflow-hidden">
                                <img
                                    src={sushiDish.imageUrl}
                                    alt={sushiDish.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 space-y-2">
                                    <h2 className="text-xl font-bold">{sushiDish.name}</h2>
                                    <p className="text-sm text-gray-700">{sushiDish.description}</p>
                                    <p className="text-sm text-gray-600">Ingredientes: {sushiDish.ingredients}</p>
                                    <div className="flex items-center gap-2 mt-4 font-bold">
                                        <span>{quantity} porción</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{sushiDish.amount}</p>
                                    <p className="mt-2 text-right text-green-700 font-bold">Total: ${totalPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}
