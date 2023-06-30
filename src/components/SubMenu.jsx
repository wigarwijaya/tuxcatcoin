/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SubMenu = ({ title, path, close }) => {

  return (
    <>
      <Link
        to={path}
        onClick={!title[1] && close}
        className="flex justify-between items-center p-5 h-[60px] text-lg list-none no-underline text-black hover:bg-[#c5c5c5] hover:cursor-pointer hover:border-l-4 hover:border-primary"
      >
        <div>
          <span className="ml-4">{title}</span>
        </div>
      </Link>
    </>
  );
};

export default SubMenu;
