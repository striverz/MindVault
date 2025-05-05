import Button from "./Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import { useRef, useState } from "react";

const defaultStyles = "border border-600 p-2 m-2 rounded-md";
const NavBar = () => {
  const [contentAdd, setContentAdd] = useState(false);

  const title = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);
  const link = useRef<HTMLInputElement>(null);
  const tags = useRef<HTMLInputElement>(null);

  const handleContentAdd = () => {
    console.log("button clicked");
    setContentAdd(!contentAdd);
  };

  const handleAddContentAPI = () => {
    const titleData = title.current?.value;
    const typeData = type?.current?.value;
    const linkData = link?.current?.value;
    const tagsData = tags?.current?.value;

    console.log(titleData, typeData, linkData, tagsData);
  };

  return (
    <div className=" flex justify-between items-center p-2 ">
      <h1 className=" text-blue-600 text-xl cursor-pointer">MindVault</h1>
      <div className="flex justify-end">
        <Button text="Share Brain" variant="primary" icon={<ShareIcon />} />
        <Button
          text="Add Content"
          variant="secondary"
          icon={<PlusIcon />}
          onClick={handleContentAdd}
        />
      </div>
      {contentAdd && (
        <div>
          <h3>Add your Content</h3>
          <div className="flex flex-col">
            <input
              placeholder="Title"
              className={`${defaultStyles}`}
              ref={title}
            ></input>
            <input
              placeholder="Type eg: video or twitter"
              className={`${defaultStyles}`}
              ref={type}
            ></input>
            <input
              placeholder="Link"
              className={`${defaultStyles}`}
              ref={link}
            ></input>
            <input
              placeholder="tags"
              className={`${defaultStyles}`}
              ref={tags}
            ></input>
            <button onClick={handleAddContentAPI}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
