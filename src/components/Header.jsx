import { useState } from "react";
const Header = () => {
  const[brandName,setBrandName]=useState("Aditya Srivastava")
  const[menuLinks,setMenuLinks]=useState([
  {
    title:"Home",
    link:"/home",
    id:1,

  },
  {
    title:"About",
    link:"/home",
    id:2,
    

  },
  {
    title:"Skills",
    link:"/home",
    id:3,

  },

  {
    title:"Portfollio",
    link:"/home",
    id:2,
  },

  {
    title:"Contact",
    link:"/home",
    id:2,
    

  },

 


  ])

  const[actionButton,setActionButton]=useState(
    [
      {
        title: "Hire Me!",
        link : "/hire-me" ,
      },

    
    ]
  )
  

  return (

    <>
      <div className="h-20 w-full  main border flex justify-between items-center px-16 bg-gray-50 ">
        <div className=" ">
          {/* brand logo */}
          <h1 className="text-1xl font-bold ">{brandName}</h1>
        </div>
        <div className="space-x-2">
          {/* menu links */}

          {menuLinks.map((link)=>(
            <a className="hover:text-blue-300" key={link.id} href={link.link}>
              {link.title} 
             </a>
             
          )
          )}



          
        </div>
        <div >
          {/* bttton */}
          <a className="px-3 py-2 bg-blue-500 hover:bg-green-500 rounded-full text-white font-semibold transition-colors duration-700" 
          href={actionButton[0].link}>
          {actionButton[0].title}
        </a>
        
        </div>
      </div>
    </>
  );
};

export default Header;
