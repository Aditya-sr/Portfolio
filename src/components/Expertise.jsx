import React from "react";

const Expertise = () => {
  return (
    <>
      <div className="my-14">
        <h1 className="text-5xl font-bold  underline text-center">Expertise</h1>

        <div className="Main-Container flex  ">




          <div className="Resume-container my-10 pr-60">
            {/* Resume box */}


            <h1>This is my Resume</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            totam quos recusandae odit molestias deserunt aut. Ratione ex quis
            corrupti illum quo cumque veniam voluptate commodi quae, doloribus
            perspiciatis? Inventore?
            <button className="text-xl font-semibold px-3 py-2 rounded-full bg-blue-500 shadow-lg">
              Download
            </button>


          </div >
    




          <div className="skill-container w-1/2 flex space-x-3 flex-wrap  ">
            {/* skill box */}


            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">HTML
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">CSS
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">JavaScript
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">React
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">Talwind CSS
            </p>


            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">Bootstrap CSS
            </p>
            
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">SQl
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">PHP/Laravel
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">XAMP
            </p>
            <p className="bg-gray-200 w-fit px-3 py-2 rounded-full">Java Core
            </p>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
