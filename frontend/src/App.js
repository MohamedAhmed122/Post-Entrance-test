import CustomButton from "./App/common/CustomButton";
import CustomInput from "./App/common/CustomInput";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CustomInput placeholder="Search" />
      <CustomButton disabled title="button" />
    </div>
  );
}

export default App;
