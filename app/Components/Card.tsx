import Image from 'next/image';
import { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" flex flex-col gap-2 min-w-full overflow-hidden shadow-lg md:m-4">
      <Image 
        src={imageUrl} 
        alt={title} 
        className="w-full md:min-h-[400px] md:max-h-[400px]" 
        width={400}
        height={200}
        layout="responsive"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
