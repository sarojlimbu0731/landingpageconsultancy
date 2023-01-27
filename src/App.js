import './App.css';

import { Header } from './components/Header';
import {HeaderSlider} from './components/HeaderSlider';
import CollegeList from './components/CollegeList';
import CountryList from './components/CountryList';
import TestPrepList from './components/TestPrepList';


function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderSlider />
        <CollegeList/>
        <CountryList/>
        <TestPrepList/>
    </div>
  );
}

export default App;
