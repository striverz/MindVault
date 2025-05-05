import Body from "./components/Body";
import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div>
      <div className=" flex justify-between items-center p-2 ">
        <h1 className=" text-blue-600 text-xl cursor-pointer">MindVault</h1>
        <div className="flex justify-end">
          <Button text="Share Brain" variant="primary" icon={<ShareIcon />} />
          <Button text="Add Content" variant="secondary" icon={<PlusIcon />} />
        </div>
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default App;
