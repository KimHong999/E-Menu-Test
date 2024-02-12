import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import React from "react";
import { DataProps } from "../MenuItem";



const Card = ({ data }: {data: DataProps}) => {
  const { name, price, image_url } = data;

  return (
    <div>
      <div className="grid grid-cols-1 border border-gray-300">
        <div>
          <img
            className="w-full p-2 border-b border-gray-300 z-0"
            src={image_url}
            alt="Wonton Noodle Soup"
          />

          <div className="absolute top-0 right-0 m-2">
            <div className="bg-gray-500 h-7 w-7 rounded-full flex items-center justify-center">
              <MdFavoriteBorder className="text-white" />
            </div>
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-sm md:text-base lg:text-lg font-light leading-6 -tracking-normal flex flex-row">
            {name}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg font-normal text-right text-gray-500">
            {price}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
