import './App.css';
import Greet from './component/Greet';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
  {/* <Greet name="Alice" designation="Engineer"/>
  <Greet name="Bob" designation="Designer"/>
  <Greet name="Charlie" designation="Manager"/> */}
  <Welcome name="David" designation="Engineer"/>
  <Welcome name="Eve" designation="Designer"/>
  <Welcome name="Frank" designation="Manager"/>
  {/* <Hello/> */}
    </div>
  );
}

export default App;
