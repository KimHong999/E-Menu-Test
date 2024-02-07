import Card from "./components/Card";

export const SectionOne = () => {
  const MenuData = [
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
    {
      img: "https://dkxj8skx6o8xc.cloudfront.net/clouddb/Do4OzB4MOYbX/Images/2023-01-20%2012-27-23_c@2x.png",
      menuName: "មីគាវ-Wonton Noodle Soup",
      price: "2.80$",
    },
  ];
  return (
    <div>
      <div className="w-full bg-gray-100 font-normal mb-5 p-2">Menu</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {MenuData.map((menu, index) => (
          <Card key={index} data={menu} />
        ))}
      </div>
    </div>
  );
};
