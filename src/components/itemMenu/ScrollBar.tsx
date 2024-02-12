"use client";
import React, { useState } from "react";
import "./ScrollBar.css";
import { CategoriesProps } from "@/app/menus/MenuItem";

const ScrollBar = ({
  categories,
  active,
  onClick
}: {
  categories: CategoriesProps[];
  active?: number;
  onClick: (id: number) => void
}) => {
  return (
    <div className="w-full h-auto  sticky top-[123px]">
      <header className=" inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm">
        <nav
          className="max-w-[85rem] w-full mx-auto sm:px-4 "
          aria-label="Global"
        >
          <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="overflow-x-scroll flex flex-col gap-5 mt-5 sm:flex-row sm:items-center">
              {categories.map((cate, index) => (
                <div
                  onClick={()=>onClick(cate.id)}
                  key={index}
                  className={`nav_link text-md text-gray-700 cursor-pointer ${
                    active === cate.id && "active"
                  }`}
                >
                  {cate.name}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ScrollBar;
