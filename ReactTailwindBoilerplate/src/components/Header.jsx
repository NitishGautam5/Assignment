import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <div className="  bg-sky-500 w-screen    font-thin  md:font-thin  text-xs text-white  flex lg:justify-center justify-start  md:justify-center lg:font-light h-8  pt-2">
      <div className="  ">
        Enable browser notification to avoid missing out on important activity
      </div>
      <div className=" absolute flex w-screen  justify-end">
        <div className=" rounded bg-blue-500 font-semibold p-1 ">
          <FontAwesomeIcon className="pr-1" icon={faBell} />
          Enable notification
        </div>
        <div className=" pt-1 pl-2 pr-2">
          <FontAwesomeIcon size="lg" icon={faXmarkCircle} />
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
