import { Tag } from "antd";
const CustomTag = ({ id }) => {
    const names = {
      csharp: "C#",
      react: "React",
      jwt: "JWT",
      next: "Nextjs",
      powerapps: "Power Apps"
    };
  
    const colors = {
      csharp: "purple",
      react: "blue",
      jwt: "red",
      next: "black",
      powerapps: "magenta"

    };
    return <Tag color={colors[id]}>{names[id]}</Tag>;
  };
export const Tags = ({ tags }) => (
    <div className="absolute bottom-3 right-3">
      {tags.map((t) => (
        <CustomTag key={t} id={t} />
      ))}
    </div>
  );