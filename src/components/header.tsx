import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-2 lg:px-16 lg:py-4">
            <div className="flex flex-row">
                <img src={logo} alt="logo"/>
            </div>
            <div className="hidden lg:flex text-gravel lg:text-base font-roboto lg:flex-row lg:gap-2">
                <a href="#gallery">Galeria zdjęć</a>
                <a href="/">FaQ</a>
            </div>
            <button
                className="bg-deepBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-roboto hover:animate-pulse focus:animate-pulse">
                Zadzwoń do nas
            </button>
        </header>
    );
};

export default Header;
