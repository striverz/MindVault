import Button from "./Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import { useState } from "react";
const NavBar = () => {
  const [contentAdd, setContentAdd] = useState(false);

  const handleContentAdd = () => {
    console.log("button clicked");
    setContentAdd(!contentAdd);
  };

  return (
    <div className=" flex justify-between items-center p-2 ">
      <h1 className=" text-blue-600 text-xl cursor-pointer">MindVault</h1>
      <div className="flex justify-end">
        <Button
          text="Share Brain"
          variant="primary"
          icon={<ShareIcon />}
          onClick={handleContentAdd}
        />
        <Button text="Add Content" variant="secondary" icon={<PlusIcon />} />
      </div>
      {contentAdd && <h1>Add content</h1>}
    </div>
  );
};

export default NavBar;
