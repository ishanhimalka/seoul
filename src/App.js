import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./Common/Layout/Header";
import Footer from "./Common/Layout/Footer";
import Home from "./View";
import CoursePage from "./View/Course Page";
import AboutPage from "./View/AboutPage";


function App() {

    return (
        <div className="App">
            <Router>
                <Header/>

                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/courses"} element={<CoursePage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
