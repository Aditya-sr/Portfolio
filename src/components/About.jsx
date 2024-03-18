import React, { useState } from "react";
import AvtarImage from "../assets/avtar-image.avif";

const About = () => {
  const [data, setData] = useState({
    image: AvtarImage,
    title: "Laravel Developer",
    desc1: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe architecto quod est, alias similique suscipit autem? Ipsa, fugiat qui. 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aut perspiciatis voluptates omnis porro dolores assumenda deserunt distinctio tenetur culpa! Est unde quas aperiam rerum ipsam dolorem expedita eligendi nulla!`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto nulla reiciendis magni consequatur, impedit cupiditate amet animi id nemo! Ipsum hic dignissimos enim similique ducimus libero exercitationem officiis consequuntur?`,
    ActionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });
 
  return (
    <>
      <div className="Main-Container flex items-center ">
        <h1 className="mt-5 justify-center font-bold text text-2xl underline ">
          About Me
        </h1>

        <div className="box2 w-full">
          <img src={data.image} alt="" />
        </div>

        <div className="box-1 space-y-5  w-full mt-24 ">
          {/* about section */}

          <h1 className="text-4xl font-semibold pb-16">{data.title}</h1>
          <p className="text-sm">{data.desc1}</p>
          <p className="text-sm">{data.desc2}</p>

          <button className="font-bold px-3 py-2 text-center bg-blue-500 rounded-full hover:bg-green-500 ">
            {data.ActionButton.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
