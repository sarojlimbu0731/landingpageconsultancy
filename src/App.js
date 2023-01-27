import './App.css';

import { Header } from './components/Header';
import {HeaderSlider} from './components/HeaderSlider';
import CollegeList from './components/CollegeList';
import CountryList from './components/CountryList';
import TestPrepList from './components/TestPrepList';
import CareerAndSubscription from './components/CareerAndSubscription';


function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderSlider />
        <CollegeList/>
        <CountryList/>
        <TestPrepList/>
        <CareerAndSubscription/>
    </div>
  );
}

export default App;
