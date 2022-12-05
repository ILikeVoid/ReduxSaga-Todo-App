import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Todo from "./pages/TodoPage/Todo";
import Home from "./pages/HomePage/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className='header'>
                    <Header />
                </header>
                <main className='content'>
                    <Home />
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;
