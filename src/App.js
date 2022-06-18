import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from "./View/HomePage";
import Header from "./Common/Layout/Header";


function App() {

    return (
        <div className="App">
            <Router>
                <Header/>

                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/sd"} element={<HomePage/>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
