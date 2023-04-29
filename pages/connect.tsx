import InfoModal from "@/components/InfoModal";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useInfoModal from "@/hooks/useInfoModal";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; // Import useEffect and useState hooks
import { AiOutlineLoading3Quarters, AiOutlinePlaySquare, AiOutlineRightCircle } from "react-icons/ai"
import { MdConstruction, MdExplore, MdOutlineOndemandVideo, MdOutlineVolcano, MdSlowMotionVideo, MdVolcano } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);

    if (!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const Connect = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();
    const phrases = [
      "What're ya waiting for?",
      "Welcome back!",
      "Well, well, well, look who's back!",
      "No one ever stays on this page for long...",
      "I thought you'd never come back!",
      "Who's Watching?"
    ];

    const icons = [
   "./images/f26d21.png",
    ];

    const [phrase, setPhrase] = useState(phrases[0]); // Set initial state to the first phrase
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[randomIndex]); // Update the state to the selected phrase
    }, []); // Run the effect only once on the client-side

    const [icon, setIcon] = useState(icons[0]); // Set initial state to the first icon
useEffect(() => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  setIcon(icons[randomIndex]); // Update the state to the selected icon
}, []); // Run the effect only once on the client-side

const { isOpen, closeModal } = useInfoModal();

    return (
        <div className="h-full bg-custom">
        <div className="flex h-full bg-custom">
    
  <div className="flex-shrink-0 bg-black text-white w-48">
    <div className="flex items-center justify-center h-16">
    <img onClick={() => router.push('/')} className="h-4 lg:h-7 cursor-pointer" src="/images/logo.png" alt=""/>
    </div>
    <nav className="flex-grow">

    <ul className="flex flex-col py-2">
  <li className="px-6 py-2 hover:bg-gray-700">
    <a href="#" className="text-gray-300 hover:text-white">
      <div className="flex flex-row items-center">
        <BiSearch className="mr-1" /> 
        <span>Search</span>
      </div>
    </a>
  </li>
</ul>

        <span className="pl-10 text-gray-500 text-sm">Discover</span>

      <ul className="flex flex-col py-2">

        <li className="px-6 py-2 hover:bg-gray-700">
          <a href="#" className="text-gray-300 hover:text-white flex flex-row items-center"><MdExplore className="mr-1" /> Explore</a>
        </li>

        <li className="px-6 py-2 hover:bg-gray-700">
          <a href="#" className="text-gray-300 hover:text-white flex flex-row items-center"><BsFillPeopleFill className="mr-1" /> Friends</a>
        </li>

        <li className="px-6 py-2 hover:bg-gray-700">
          <a onClick={() => router.push('/')} className="text-gray-300 hover:text-white cursor-pointer flex flex-row items-center"><AiOutlinePlaySquare className="mr-1" /> Videos</a>
        </li>

      </ul>
    </nav>
  </div>

        <span className="absolute left-[525px] top-[230px] text-6xl flex flex-col items-center">Under Construction <MdConstruction size={100} /></span>


        </div>

        </div>
      );
      
};

export default Connect;
