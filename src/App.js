import './App.css';
import Dashboard from "./components/Dashboard";
import TopAppBar from "./components/commons/TopAppBar";
import Footer from "./components/commons/Footer";

function App() {
    return (
        <div className="App">
            <TopAppBar/>
            <Dashboard/>

            <Footer />
        </div>
    );
}

export default App;
