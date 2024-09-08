import './App.css';
import Introduction from './Introduction';
import Navigation from './Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div>
      <Navigation />
      <Introduction />
    </div>
  );
}

export default App;
