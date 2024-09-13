import hero from "../assets/Hero.png";

const Hero = () => {
    return (
        <section className="py-10 px-2">
            <div className="flex flex-col lg:px-16">
                <h1 className="font-bebas text-4xl text-wrap text-left mx-8 lg:mx-0 lg:text-7xl">SPRZEDAJEMY SAMOCHODY<br/> Z EUROPY</h1>
                <p className="font-robotoCondensed text-left mx-8 lg:mx-0">Kup komfortowy pojazd, aby każda podróż była wyjątkowym
                    przeżyciem.</p>
                <div className="flex flex-row gap-6 justify-center pt-8 lg:justify-start">
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
            <div className="lg:pl-40 flex justify-end xl">
                <img src={hero} className="" alt="cars"/>
            </div>
        </section>
    );
};

export default Hero;
