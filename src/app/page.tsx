import Search from "@/components/Search";
import NavBar from "../components/layout/NavBar";
import { MenuItem } from "./menus/MenuItem";
import ScrollBar from "@/components/itemMenu/ScrollBar";
import fetchCategories from "../data/category_dummy.json";
import fetchData from "../data/dummy.json";

export default function Home() {
  const categories = fetchCategories.categories;
  const data = fetchData.data;

  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <img
          className="h-auto w-full"
          src="https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Store/oo-top-banner_1660113977_1280.png"
          alt="img"
        />
        <Search />

        <MenuItem data={data} categories={categories} />
      </div>
    </div>
  );
}
