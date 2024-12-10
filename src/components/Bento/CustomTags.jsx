import { Tag } from "antd";
const CustomTag = ({ id, label = false }) => {
  const names = {
    csharp: "C#",
    react: "React",
    jwt: "JWT",
    next: "Nextjs",
    powerapps: "Power Apps",
    vite: "ViteJS",
  };

  const colors = {
    csharp: "purple",
    react: "blue",
    jwt: "red",
    next: "black",
    powerapps: "magenta",
    vite: "gold",
  };

  const logo = {
    csharp: " bg-[url('/src/resources/logos/csharp1.svg')]",
    react: " bg-[url('/src/resources/logos/react.svg')]",
    jwt: " bg-[url('/src/resources/logos/jwt.svg')]",
    next: " bg-[url('/src/resources/logos/next.svg')]",
    powerapps: " bg-[url('/src/resources/logos/powerapps.svg')]",
    vite: " bg-[url('/src/resources/logos/vite.svg')]",
  };

  return label ? (
    <Tag color={colors[id]}>{names[id]}</Tag>
  ) : (
    <div
      className={`w-5 h-5  ${logo[id]} bg-contain bg-no-repeat bg-center grayscale group-hover:grayscale-0 group-hover:h-6  group-hover:w-6 transition-all duration-300`}
    />
  );
};
export const Tags = ({ tags }) => (
  <div className="absolute bottom-3 right-3 flex gap-3 ">
    {tags.map((t) => (
      <CustomTag key={t} id={t} />
    ))}
  </div>
);
export const LabelTags = ({ tags }) => (
  <div className=" flex gap-3 ">
    {tags.map((t) => (
      <CustomTag key={t} id={t} label={true} />
    ))}
  </div>
);