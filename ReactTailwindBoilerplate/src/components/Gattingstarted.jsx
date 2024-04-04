import React from "react";

const Gattingstarted = () => {
  return (
    <div className=" ml-20  pt-5">
      <p className=" font-semibold opacity-80 text-4xl">Getting started</p>
      <div className=" rounded-3xl bg-blue-300 bg-opacity-20 p-4 mt-5 mx-6">
        <p className=" text-sm text-gray-600">
         🔒 This doc is in your private channel, where you can store your private
          work. You can share docs one by one from here, but to properly
          organize your team's knowledge base, use workspace channels.
        </p>
        <p className=" text-sm text-gray-600  pt-5">
          You can make channels public to make all docs visible to everyone on
          the team, or private if you want the channel's docs to only be visible
          by a selection of teammates.
        </p>
          </div>
      <p className=" pt-10 pl-5 font-medium text-gray-800 text-3xl">Collaborate with your team these three features</p>
       <div className=" mt-4 mr-20 rounded-xl  bg-blue-300 bg-opacity-35 pl-4 text-xl font-medium pt-4">
       <p className="pb-5"> ✍️ Docs</p>
       <div>
        <p className=" font-light">Create docs to Collaborate</p>
       <p className=" font-light">with your team.</p>
       <p className=" pt-3 font-light">
        Type / to discover Slite's editor tools and bring your docs to life.
 
       </p>
      </div>

       </div>

       <p className=" mt-10 mr-20 rounded-md bg-blue-300 bg-opacity-15"> 💡 Give it go by typing / below</p>
    </div>
  );
};

export default Gattingstarted;
