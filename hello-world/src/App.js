import "./App.css";
import Greet from "./component/Greet";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Welcome from "./component/Welcome";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import NameList from "./component/NameList";
import Form from "./component/Form";
import LifecycleA from "./component/LifecycleA";
import FragmentDemo from "./component/FragmentDemo";
import RefsDemo from "./component/RefsDemo";
import Input from "./component/Input";
import FocusInput from "./component/FocusInput";

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <Input /> */}
      {/* <RefsDemo /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <ParentComponent /> */}

      {/* <EventBind/> */}

      {/* <FunctionClick/>
      <ClassClick /> */}

      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Alice" designation="Developer"/> */}
      {/* <Greet name="Bob" designation="Designer"/>
  <Greet name="Charlie" designation="Manager"/>  */}
      {/* <Welcome name="David" designation="Engineer"/>
  <Welcome name="Eve" designation="Designer"/>
  <Welcome name="Frank" designation="Manager"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
