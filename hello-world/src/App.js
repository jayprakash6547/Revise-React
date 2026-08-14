import './App.css';
import Greet from './component/Greet';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
  <Greet name="Alice" designation="Engineer"/>
  <Greet name="Bob" designation="Designer"/>
  <Greet name="Charlie" designation="Manager"/>
  {/* <Welcome/> */}
  {/* <Hello/> */}
    </div>
  );
}

export default App;
