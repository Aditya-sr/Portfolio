import React, { useState } from "react";

const Service = () => {
  const [serviceData, setServiceData] = useState([
    {
      id: "1",
      title: "Front-End Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sint,
        maiores laudantium repellendus incidunt voluptatum porro commodi
        tempore veniam sapiente.`,
      actionButton: {
        title: "Click Me!",
        link: "/click-me",
      },
    },
    {
      id: "2",
      title: "Back-End Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sint,
      maiores laudantium repellendus incidunt voluptatum porro commodi
      tempore veniam sapiente.`,
      actionButton: {
        title: "Click Me!",
        link: "/click-me",
      },
    },
    {
      id: "3",
      title: "Social Media",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sint,
        maiores laudantium repellendus incidunt voluptatum porro commodi
        tempore veniam sapiente.`,
      actionButton: {
        title: "Click Me!",
        link: "/click-me",
      },
    },
  ]);

  return (
    <>
      <div className="service-main-container py-16">
        <h1 className="font-bold text-center text-5xl">Services</h1>
      </div>

      <div className="service-container space-x-5 px-5 flex ">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="p-5 text-center bg-slate-100 tex space-y-4 mt-8 shadow-lg rounded-xl"
          >
            <div className="icon flex justify-center items-center  space-x-4  ">
              <i className="text-3xl fa-brands fa-react"></i>
              <i className="text-3xl fa-brands fa-bootstrap"></i>
              <i className="text-3xl fa-brands fa-html5"></i>
              <i className="text-3xl fa-brands fa-css3-alt"></i>
            </div>
            <h1 className="text-4xl">{service.title}</h1>
            <p>{service.description}</p>
            
            <button className="px-3 py-2 mt-4 text-center bg-blue-500 rounded-full shadow-lg text-xl font-semibold hover:bg-green-500 transition-colors duration-700">
              {service.actionButton.title}
            </button>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
