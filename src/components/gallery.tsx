import {useState} from "react";
import Slider from "react-slick";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("osobowe");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }]
    };

    const cars: { [key: string]: string[] } = {
        osobowe: [car1, car2, car3],
        dostawcze: [car1, car2]
    };

    return (
        <section className="px-2 lg:px-16">
            <div className="flex flex-col lg:px-6">
                <p className="text-deepBlue text-lg lg:text-2xl font-robotoCondensed">Prezentacja firmy</p>
                <h2 className="font-bebas text-2xl lg:text-4xl">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h2>
            </div>
            <div className="flex flex-row gap-2 lg:px-6">
                <button
                    className={`text-sm lg:text-lg font-roboto hover:text-deepBlue hover:underline ${
                        activeCategory === "osobowe" ? "active underline text-deepBlue" : ""
                    }`}
                    onClick={() => setActiveCategory("osobowe")}
                >
                    Samochody osobowe
                </button>
                <button
                    className={`text-sm lg:text-lg font-roboto hover:text-deepBlue hover:underline ${
                        activeCategory === "dostawcze" ? "active underline text-deepBlue" : ""
                    }`}
                    onClick={() => setActiveCategory("dostawcze")}
                >
                    Samochody dostawcze
                </button>
            </div>

            <div className="py-2 px-6 my-4" id="gallery">
                <Slider {...settings}>
                    {cars[activeCategory].map((car, index) => (
                        <div key={index}>
                            <img src={car} alt={`car-${index}`}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Gallery;
