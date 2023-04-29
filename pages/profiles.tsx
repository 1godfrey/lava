import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; // Import useEffect and useState hooks
import { AiOutlineLoading3Quarters, AiOutlineRightCircle } from "react-icons/ai"
import { MdOutlineVolcano, MdVolcano } from "react-icons/md"

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

const Profiles = () => {
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

    return (
        <div className="flex items-center justify-center h-full bg-custom">
          <div className="flex flex-col">
            <div className="absolute top-72 left-[600px] text-white animate-bounce transition duration-1000">
            <div className="">What do you want to do?</div>
            <div className="top-10 animate-bounce">
            <div onClick={() => router.push('/connect')}>
            <MdOutlineVolcano className="absolute -left-36 -bottom-20 cursor-pointer" size={150} />
            <MdVolcano className="absolute z-40 -left-36 -bottom-20 opacity-0 cursor-pointer hover:opacity-100 transition duration-300" size={150} />
            </div>
            <div onClick={() => router.push('/')}>
            <MdOutlineVolcano className="absolute left-40 -bottom-20 cursor-pointer" size={150} />
            <MdVolcano className="absolute z-40 left-40 -bottom-20 opacity-0 cursor-pointer hover:opacity-100 transition duration-300" size={150} /></div>
            </div>
            </div>
            
            <h1 className="text-3xl md:text-6xl text-white text-center">{phrase}</h1> {/* Use the state variable */}
            <div className="flex items-center justify-center gap-8 mt-10">
              <div>
                <div className="flex-row w-44 mx-auto">
                  <div
                    className="
                      w-44
                      h-44
                      rounded-md
                      flex
                      items-center
                      justify-center
                      border-2
                      border-transparent
                      
                      overflow-hidden
                      my-auto
                    "
                  >
                    <img className="z-1" src={icon} alt="" />
                    <AiOutlineLoading3Quarters className="absolute left-4 top-4 z-30 animate-spin text-white" size={30} />
                  </div>
      
                  <div className="
                    mt-4
                    text-white
                    text-2xl
                    text-center
                    group-hover:text-white
                    animate-bounce
                  ">
                    {user?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[385px] left-[485px] text-2xl text-white animate-bounce font-bold">Connect</div>
          <div className="absolute top-[385px] left-[810px] text-2xl text-white animate-bounce font-bold">Relax</div>
        </div>
      );
      
};

export default Profiles;
