"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import ScrollBar from "@/components/itemMenu/ScrollBar";

export interface CategoriesProps {
  id: number;
  name: string;
}

export interface DataProps {
  name: string;
  price: number;
  category_id: number;
  image_url: string;
}

export const MenuItem = ({
  data,
  categories = [],
}: // children
{
  data?: DataProps[];
  categories?: CategoriesProps[];
  // children: React.ReactNode[] | any[]
}) => {
  const [active, setActive] = useState<string | null>(categories[0].id + "");
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sections = document.querySelectorAll(
        ".category"
      ) as NodeListOf<HTMLElement> | null;

      sections?.forEach((section) => {
        const sectionTop = section!.offsetTop;

        if (window.scrollY + 207 >= sectionTop) {
          setActive(section.getAttribute("id"));
        }
      });
    });
  }, []);

  const handleClick = (id: number) => {
    const section = document.getElementById(id + "");
  
    if (section) {
      const sectionTop = (section!.offsetTop) - 207;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  
  return (
    <div>
      <ScrollBar
        categories={categories}
        active={+active!}
        onClick={handleClick}
      />

      {categories?.map((cate, index) => {
        return (
          <div ref={menuRef} className="category" id={cate.id + ""}>
            <div
              key={index}
              className="w-full bg-gray-100 font-normal mt-10 mb-5 p-2"
            >
              {cate.name}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {data?.map((menu, index) => {
                if (menu.category_id === cate.id) {
                  return (
                    <div key={index}>
                      <Card data={menu} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
