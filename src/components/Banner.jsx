import bannerImage from "../assets/geto.png";
import bannerBackground from "../assets/banner-wallpaper.svg";

import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url( ${bannerBackground} )`,
        backgroundSize: "cover",
      }}
      className=" main-container w-full h-[450px] flex  "
    >
      <div className=" w-full flex justify-between text-white  ">
        {/* first box */}

        <div className=" w-2/3 h-full text-left ms-4 space-y-3 ">
          {/* text */}
          <h3 className="text-3xl font-semibold">Hi,I am</h3>
          <h1 className="  text-5xl font-bold">Aditya Srivastava</h1>

          <h2 className=" text-2xl font-bold">I am a Software Engineer</h2>
          <p className=" text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            nemo quis asperiores, velit eaque molestias et repudiandae
            obcaecati! Eos dicta placeat, error repudiandae obcaecati, facere
            molestiae beatae illum atque consequatur, aspernatur reprehenderit
            ratione? Tempore enim id beatae ut, deleniti ea nam! Earum voluptate
            corporis amet nostrum architecto voluptatibus velit sunt.
          </p>

         
          <div className=" bg-red-500 h-64">

          <div className="icon-container   flex ">
            <a className=" w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-500 ">
              <i class="fa-brands text-2xl  fa-facebook"></i>
            </a>
            <a className="w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-500 ">
              <i class="fa-brands text-2xl fa-instagram"></i>
            </a>
            <a className="w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-500 ">
              <i class="fa-brands text-2xl fa-linkedin"></i>
            </a>
            <a className="w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-500 ">
              <i class="fa-brands text-2xl fa-twitter"></i>
            </a>
          </div>
          
          <a
            className="text-xl px-3 py-2  bg-blue-500 rounded-full shadow-lg hover:bg-green-500 transition-color duration-300"
            href="/Contact-me"
          >
            Contact Me
          </a>

          </div>

        </div>
      </div>
      <div className=" w-full flex justify-center ">
        {/* second box */}

        <div>
          {/* image */}
          <img
            className=" rounded-full w-80 shadow-lg  "
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
