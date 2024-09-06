import Header from "../components/header.tsx";
import Hero from "../components/hero.tsx";
import Gallery from "../components/gallery.tsx";
import About from "../components/about.tsx";
import Footer from "../components/footer.tsx";
import vector from "../assets/Subtract.png";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="relative z-50">
                    <Header/>
                    <Hero/>
                </div>
                <div className="absolute w-56 right-0 top-12">
                    <img src={vector} alt="cars background"/>
                </div>
            </div>
            <main className="container mt-24">
                <Gallery/>
                <About/>
            </main>
            <div className="container">
                <Footer/>
            </div>
        </>
    );
};

export default Home;
