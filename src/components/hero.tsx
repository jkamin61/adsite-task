import hero from "../assets/Hero.png";

const Hero = () => {
    return (
        <section className="py-10 px-2">
            <div className="relative z-50">
                <h1 className="font-bebas text-4xl text-wrap text-left">SPRZEDAJEMY SAMOCHODY Z EUROPY</h1>
                <p className="font-robotoCondensed text-left">Kup komfortowy pojazd, aby każda podróż była wyjątkowym
                    przeżyciem.</p>
                <div className="flex flex-row gap-6 justify-center pt-8">
                    <button
                        className="bg-deepBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-roboto hover:animate-pulse focus:animate-pulse">
                        Zobacz zdjęcia
                    </button>
                    <button
                        className="bg-white hover:bg-blue-700 text-deepBlue border-deepBlue border font-bold py-2 px-4 rounded font-roboto hover:animate-pulse focus:animate-pulse">
                        Zadzwoń do nas
                    </button>
                </div>
            </div>
            <div className="absolute top-64 mb-8">
                <img src={hero} alt="cars"/>
            </div>
        </section>
    );
};

export default Hero;
