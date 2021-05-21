import './App.css';
import BootstrapButton from "./BootstrapButton";
import AlertDismissible from "./AlertDismissible";
import AlertDismissibleTwo from "./AlertTwo"
import GridLayout from "./GridLayout";

function App() {
  return (
    <div className="App">
      <BootstrapButton  />
      <AlertDismissible />
        <GridLayout />
        <AlertDismissibleTwo />
        
    </div>
  );
}

export default App;