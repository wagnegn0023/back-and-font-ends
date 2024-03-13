import './App.scss';
import MainSection from './components/MainSection';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="container main">
        <MainSection/>
      </div>
    </div>
  );
}

export default App;
