import Header from "../components/header.tsx";
import Hero from "../components/hero.tsx";
import Gallery from "../components/gallery.tsx";
import About from "../components/about.tsx";
import Footer from "../components/footer.tsx";
import vector from "../assets/Subtract.png";

const Home = () => {
    return (
        <>
            <div className="w-full">
                <div className="relative z-50">
                    <Header/>
                    <Hero/>
                </div>
                <div className="absolute w-56 right-0 top-12 lg:w-80">
                    <img src={vector} alt="cars background"/>
                </div>
            </div>
            <main className="w-full">
                <Gallery/>
                <About/>
            </main>
            <div className="w-full">
                <Footer/>
            </div>
        </>
    );
};

export default Home;
