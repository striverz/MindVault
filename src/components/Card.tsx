import { ReactElement } from "react";

interface CardProps {
  title: string;
  editBtn: ReactElement;
  deleteBtn: ReactElement;
  embededLink: string;
  tags?: string[];
}

const Card = ({ title, editBtn, deleteBtn, embededLink, tags }: CardProps) => {
  return (
    <div className="border border-black w-72 h-80 rounded-md shadow-lg grid grid-rows-5 m-4 p-2">
      <div className="grid grid-cols-5 items-center gap-3 p-2 row-span-1">
        <h1 className="col-span-3">{title}</h1>
        <div className="col-span-1">{editBtn}</div>
        <div className="col-span-1">{deleteBtn}</div>
      </div>
      <div className="relative w-full max-w-md aspect-video rounded-md shadow-lg overflow-hidden row-span-3">
        <iframe
          src={embededLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
      <div></div>

      <div className="flex justify-center gap-4 p-2  row-span-1">
        {tags?.map((tag, ind) => (
          <p key={ind}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
