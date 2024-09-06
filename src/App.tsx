import './App.css'
import {lazy} from "react";
import {Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"))

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    );
}

export default App;
