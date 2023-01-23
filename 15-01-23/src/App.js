import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
