import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import TodoPage from "./pages/TodoPage/TodoPage";
import Home from "./pages/HomePage/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className='header'>
                    <Header />
                </header>
                <main className='content'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/todo" element={<TodoPage/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;
