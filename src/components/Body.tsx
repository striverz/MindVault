import Card from "./Card";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const Body = () => {
  return (
    <div className="flex justify-center mt-8">
      <Card
        title="100xDevs Cohort!"
        editBtn={<EditIcon />}
        deleteBtn={<DeleteIcon />}
        embededLink="https://www.youtube.com/embed/1iJ34tTjwwo?si=85WWmqDwz1MORePQ"
        tags={["tag1", "tag2", "tag3"]}
      />
      <Card
        title="100xDevs Cohort!"
        editBtn={<EditIcon />}
        deleteBtn={<DeleteIcon />}
        embededLink="https://www.youtube.com/embed/1iJ34tTjwwo?si=85WWmqDwz1MORePQ"
        tags={["tag1", "tag2", "tag3"]}
      />
      <Card
        title="100xDevs Cohort!"
        editBtn={<EditIcon />}
        deleteBtn={<DeleteIcon />}
        embededLink="https://www.youtube.com/embed/1iJ34tTjwwo?si=85WWmqDwz1MORePQ"
        tags={["tag1", "tag2", "tag3"]}
      />
    </div>
  );
};

export default Body;
