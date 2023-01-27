import './App.css';
import { Header } from './components/Header';
import {HeaderSlider} from './components/HeaderSlider';
import CollegeList from './components/CollegeList';


function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderSlider />
        <CollegeList/>
    </div>
  );
}

export default App;
