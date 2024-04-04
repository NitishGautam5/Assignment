import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faXmarkCircle ,faClock} from "@fortawesome/free-regular-svg-icons";
const Sidebar = () => {
  return (
    <div className=" border  bg-gray-200 border-black border-solid md:w-[350px]  lg:w-[350px] ">
      <div className=" flex  font-bold justify-between px-5 mt-5">
        <div className=" flex">
          <img
            className=" h-5 pr-3"
            src="https://cdn2.iconfinder.com/data/icons/grownups/68/hour_full_circle_loading_progress-1024.png"
          />
          <p className=" text-xs ">refero team</p>
        </div>

        <FontAwesomeIcon size="" icon={faBell} />
      </div>
      <div className=" flex justify-between px-5 pt-5">
        <input className=" h-7 bg-white shadow-2xl border border-gray-400 rounded"/>
        <button><img className="p-1 rounded h-6 bg-white" src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/search-3-1024.png"/></button>
        <button></button>
      </div>
      <div className=" p-3 m-5 rounded-xl mt-5 pt-5 bg-gray-300">
        <p  className=" font-bold  text-md">Your team used 8/50 free docs</p>
        <p className=" pt-1 font-light  text-sm">upgrade to create unlimited docs</p>
      </div>
      <div className="  flex pl-5"><FontAwesomeIcon  className=" pt-1 text-gray-600" size="lg" icon={faClock}/><p className=" text-gray-600 text-lg pl-3">Catch up</p></div>
      <div className=" pt-4 flex pl-5"><img  className=" pt-1 h-6 opacity-70" src="https://cdn2.iconfinder.com/data/icons/business-development-6/24/Chat_communication_message_talk_chatting_conference-1024.png"/><p className=" text-gray-600 text-lg pl-3">Discussion</p></div>
      <p className=" pt-9 pl-5 font-bold">Favorites</p>
      <p className=" pt-2 pl-9">👋 Getting started</p>
      <p className=" pt-2 pl-5 font-bold">My channels</p>
      <p className=" pl-9 pt-2"> My privet channel</p>
      <p className=" mt-1 ml-16  bg-opacity-70 mr-16  rounded-xl bg-cyan-200">👋 Getting started</p>
      <p className=" pt-2 pl-9 ">Engineering</p>
      <p className=" pt-2 pl-9">Product</p>
      <div className="  h-32 mt-12 ">
         
      <p className=" pl-5  text-gray-500 pt-2 font-semibold flex"><img className=" pr-3 h-5" src="https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/add-user-1024.png"/>Add people</p>
      <p className=" pl-5  text-gray-500 pt-2 font-semibold flex"><img className=" pr-3 h-5" src="https://cdn3.iconfinder.com/data/icons/editorial-dashboard/14/contrast-1024.png"/>Templates</p>
      <p className=" pl-5  text-gray-500 pt-2 font-semibold flex"><img className=" pr-3 h-5" src="https://cdn4.iconfinder.com/data/icons/epic-outlines/30/download-1024.png"/>Shared with me</p>
     <p className=" pl-5  text-gray-500 pt-2 font-semibold flex"><img className=" pr-3 h-5" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-box-outline-1024.png"/>Add archive</p>
      </div>
    </div>
  );
};

export default Sidebar;
