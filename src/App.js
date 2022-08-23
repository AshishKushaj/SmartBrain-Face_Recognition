import './App.css';
import Logo from './component/Logo';
import Navigation from './component/Navigation';
import Rank from './component/Rank';
import Search from './component/Search';
import Space from './component/Space';
import Particle from './component/Particle';

function App() {
  return (
    <div>
      <Navigation/>

      <Particle/>
      
      <Logo/>

      <Rank/>

      <Search/>


    </div>
  );
}

export default App;
