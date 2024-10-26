import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import imageRestaurant1 from "../../assets/restaurante1.jpg";

// Mock de categorías de comida
const mockCategorias = [
    { id: '1', name: 'Ensaladas' },
    { id: '2', name: 'Sopas' },
    { id: '3', name: 'Postres' },
    { id: '4', name: 'Bebidas' },
    { id: '5', name: 'Platos Fuertes' },
];

export default function HomeRestaurant() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const onSubmit = async (data) => {
        try {
            const confirmResult = await Swal.fire({
                title: "¿Confirmar envío?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#1b325f",
                cancelButtonColor: "#d33",
                confirmButtonText: "SÍ",
                cancelButtonText: "NO",
                reverseButtons: true,
                showLoaderOnConfirm: true,
            });

            if (confirmResult.isConfirmed) {
                console.log("Registrado correctamente:", data);

                // Muestra la alerta de éxito
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Plato subido exitosamente",
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Resetea los campos del formulario
                reset();
                setSelectedImage(null);
            }
        } catch (error) {
            console.error("Error al procesar la carga", error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
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
            <div className="relative max-w-sm w-full p-6 bg-white rounded-lg shadow-lg"> {/* Contenedor del formulario con estilo */}
                <h1 className="text-2xl font-bold text-center mt-4">RESTAURANTE</h1>
                <h2 className="text-xl font-semibold text-center mt-1">CARGA DE PLATO</h2>
                <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* Campo para seleccionar categoría */}
                    <div className="mt-5">
                        <label htmlFor="foodcategory" className="block mb-2 text-sm font-medium text-gray-900">
                            Categoría comida<span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                            id="foodcategory"
                            {...register("foodcategory", { required: 'El campo Categoría es requerido' })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="">Seleccione una Categoría</option>
                            {mockCategorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.name}
                                </option>
                            ))}
                        </select>
                        {errors.foodcategory && <p className="text-red-500 text-sm">{errors.foodcategory.message}</p>}
                    </div>

                    {/* Campo para seleccionar precio */}
                    <div className="mt-5">
                        <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900">
                            Precio<span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id="precio"
                            {...register("precio", { required: 'El campo Precio es requerido' })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="$ Precio"
                            type="number"
                            min="0"
                        />
                        {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
                    </div>

                    {/* Campo de descripción */}
                    <div className="mt-5">
                        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            {...register("descripcion")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none" // Cambia h-32 por la altura deseada
                            placeholder="Descripción del plato"
                        />
                    </div>

                    {/* Campo para seleccionar imagen */}
                    <div className="mt-5">
                        <label className="flex flex-col items-center justify-center w-full h-40 mb-4 border-2 border-gray-300 border-dashed rounded-2xl bg-gray-50 hover:bg-gray-100">
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Image Preview"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Haz click debajo</span> para seleccionar una foto
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">SVG, PNG, JPG, JPEG</p>
                                </div>
                            )}
                        </label>
                        <input
                            id="dropzone-file"
                            type="file"
                            name="file"
                            className="bg-gray-100 font-medium text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 w-full border-2 border-gray-300 border-dashed hover:border-gray-400 focus:border-blue-300 hover:bg-gray-200 mb-2"
                            {...register('file')}
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Botón de enviar */}
                    <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            {isSubmitting ? 'Cargando...' : 'Subir plato'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
