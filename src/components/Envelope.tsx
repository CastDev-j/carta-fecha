import { FaHeart } from "react-icons/fa";

interface EnvelopeProps {
  isOpen: boolean;
}

const secretUrl = "https://con-detalle-io.netlify.app/";
const author = "Ann <3";

export const Envelope = ({ isOpen }: EnvelopeProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[16/9] flex items-center justify-center">
      <div
        className={`transition-all flex flex-col items-start px-16 py-10 justify-start duration-300 ${
          isOpen ? "duration-1000 -translate-y-24" : ""
        } bg-white w-full h-full absolute`}
      >
        <div className="flex flex-col w-full justify-between">
          <div className="uppercase text-sm font-sembold justify-between flex w-full ">
            <span
            className="font-semibold italic opacity-80"
            >¡Feliz San Valentín!</span>
            <span
            className="text-xs italic text-gray-500"
            >{author}</span>
          </div>
          <a
            href={secretUrl}
            target="_blank"
            rel="noreferrer"
            className="text-center mt-8 py-4 px-6 bg-transparent border-4 border-pink-200 text-pink-950 font-semibold rounded-md hover:bg-pink-200 hover:text-pink-950 transition-all duration-300"
          >
            Hazme click :3
          </a>
        </div>
      </div>
      {/* <!--- Stamp --> */}
      <div
        className={`bg-[#e0a2ff] w-16 uppercase text-[#0c0d10] h-full flex items-center z-40 justify-center font-medium transition-all duration-1000 ${
          isOpen ? "opacity-0 -translate-y-96" : ""
        }`}
      >
        <div className="">
          <FaHeart />
        </div>
      </div>
      {/* <!--- Top --> */}
      <div
        className={`transition-all duration-1000 z-10 bg-gradient-to-b from-[#e8e8e8] to-[#ffffff] absolute w-full h-full ${
          isOpen
            ? "[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]"
            : "[clip-path:polygon(0_0,_100%_0,_95%_55%,_5.5%_55%)]"
        }`}
      ></div>
      {/* <!-- left --> */}
      <div className="transition-all duration-700 absolute w-full h-full bg-[#dddddd] [clip-path:polygon(0_0,_0%_100%,_8%_51%)]"></div>
      {/* <!-- right --> */}
      <div className="transition-all duration-700 absolute w-full h-full bg-[#dddddd] [clip-path:polygon(100%_0,_100%_100%,_92%_51%)]"></div>
      {/* <!--- Bottom --> */}
      <div className="transition-all duration-700 absolute w-full h-full bg-gradient-to-b from-[#d5d5d5] to-[#ffffff] [clip-path:polygon(4%_50%,_96%_50%,_100%_100%,_0%_100%)]"></div>
    </div>
  );
};
