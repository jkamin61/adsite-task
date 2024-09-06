import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-2">
            <div className="flex flex-row">
                <img src={logo} alt="logo"/>
            </div>
            <button
                className="bg-deepBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-roboto hover:animate-pulse focus:animate-pulse">
                Zadzwoń do nas
            </button>
        </header>
    );
};

export default Header;
