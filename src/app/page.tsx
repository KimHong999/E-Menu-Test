import Search from "@/components/Search";
import NavBar from "../components/layout/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <img
          className="h-auto w-full"
          src="https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Store/oo-top-banner_1660113977_1280.png"
          alt="img"
        />
        <Search/>
     
      </div>
    </div>
  );
}
