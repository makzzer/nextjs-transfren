import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

interface SocialCardProps {
  //platform: string;
  //icon: string;
  url: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center md:min-w-[300px] justify-center bg-white rounded-lg shadow-md p-4 mx-2 my-2"
    >
      <SocialIcon url={url}/>
      
      {/*      <span className="ml-2 text-gray-800 font-semibold">{platform}</span>
       */}
    </a>
  );
};

export default SocialCard;
