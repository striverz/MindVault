import { Button } from "./components/Button";

const App = () => {
  const clickHere = () => {
    console.log("Button is clicked!");
  };
  return (
    <div className="bg-red-100">
      <Button text="Click Here" variant="primary" onClick={clickHere} />
      <Button text="Click Here2" variant="secondary" onClick={clickHere} />
    </div>
  );
};

export default App;
