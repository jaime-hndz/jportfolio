import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Menu2 = () => {
  return (
    <div className=" h-screen fixed right-4 gap-4 pt-5 z-50 font-consolas text-white flex flex-col items-center text-2xl">
      <Link
        className="text-4xl transition ease-in-out  hover:text-sky-400 hover:-translate-x-2 cursor-none"
        target="_blank"
        to="https://www.linkedin.com/in/jaime-rafael-hernandez-746a14203 "
        blan
      >
        {" "}
        <LinkedinFilled />{" "}
      </Link>
      <Link
        className="text-4xl transition ease-in-out  hover:text-sky-400 hover:-translate-x-2 cursor-none"
        target="_blank"
        to="https://github.com/jaime-hndz"
      >
        {" "}
        <GithubFilled />{" "}
      </Link>
    </div>
  );
};
