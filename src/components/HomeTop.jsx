import { CarouselHomeTop } from "./CarouselHomeTop";
import imageRestaurant1 from "../assets/restaurante1.jpg";
import imageRestaurant2 from "../assets/restaurante2.jpg";


export function HomeTop() {

    const images = [
        imageRestaurant1,
        imageRestaurant2,
    ];

    return (
        <div className="hero-conatiner h-[490px] relative  top-0 left-0 w-full mx-auto">
            <div className="hero-img relative w-full h-[500px] overflow-hidden">

                <CarouselHomeTop images={images} />

                <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center flex-col gap-2 text-center">
                    <h2
                        className="text-3xl lg:text-4xl font-bold italic cursor-pointer text-white"
                        style={{ textShadow: "2px 2px 2px black" }}
                    >
                        Refood: Comida de calidad, al mejor precio y sin desperdicio
                    </h2>
                    <p
                        className="text-white text-2xl lg:text-1xl italic cursor-pointer"
                        style={{ textShadow: "2px 2px 2px black" }}
                    >
                        Recupera el sabor, reduce el desperdicio
                    </p>
                </div>

            </div>
        </div>
    );
};
