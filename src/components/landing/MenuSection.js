const menuInformation = [
  {
    id: "1",
    image: "assets/images/firstPageImages/01.png",
    text: "غذای اصلی",
  },
  // {
  //   id: '2',
  //   image: "assets/images/firstPageImages/02.png",
  //   text: "پیش غذا",
  // },
  // {
  //   id: '3',
  //   image: "assets/images/firstPageImages/03.png",
  //   text: "دسر",
  // },
  // {
  //   id: '4',
  //   image: "assets/images/firstPageImages/04.png",
  //   text: "نوشیدنی",
  // },
];

export default function MenuSection() {
  return (
    <div className="px-5">
      <p className="text-center">منوی رستوران</p>
      {menuInformation.map((item) => {
        return (
          <div className="relative h-28 w-28 flex justify-center mr-5">
            <img src={item.image} alt={item.text} className="h-full" />
            <div className="bg-[#417F56] w-36 h-20 rounded-sm absolute top-1/2 -z-10"></div>
          </div>
        );
      })}
    </div>
  );
}
