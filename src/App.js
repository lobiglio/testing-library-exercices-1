import { useState } from "react";
import "./App.css";

const Header = ({ title }) => {
  return <h1 data-testid="title">{title}</h1>;
};
const Component = ({ title, onClick }) => {
  return (
    <div className="component">
      <p>{title}</p>
      <button onClick={() => onClick(title)}>click me !</button>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState("Welcome");
  const handleOnClick = (value) => setTitle(value);
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} />
        <Component title="Learn React" onClick={handleOnClick} />
        <Component title="Learn Angular" onClick={handleOnClick} />
        <Component title="Learn Vue" onClick={handleOnClick} />
      </header>
    </div>
  );
};

export default App;
