import './App.css';
import { Header } from './components/Header';
import {HeaderSlider} from './components/HeaderSlider';
import CollegeList from './components/CollegeList';
import CountryList from './components/CountryList';


function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderSlider />
        <CollegeList/>
        <CountryList/>
    </div>
  );
}

export default App;
