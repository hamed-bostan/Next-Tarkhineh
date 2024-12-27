const menuInformation = [
  {
    id: "1",
    image: "assets/images/firstPageImages/01.png",
    text: "غذای اصلی",
  },
  {
    id: "2",
    image: "assets/images/firstPageImages/02.png",
    text: "پیش غذا",
  },
  {
    id: "3",
    image: "assets/images/firstPageImages/03.png",
    text: "دسر",
  },
  {
    id: "4",
    image: "assets/images/firstPageImages/04.png",
    text: "نوشیدنی",
  },
];

export default function MenuSection() {
  return (
    <div className="px-5 mb-16">
      <h1 className="text-center mb-3 text-sm font-bold">منوی رستوران</h1>
      <div className="grid grid-cols-2 place-items-center gap-y-16">
        {menuInformation.map((item) => {
          return (
            <div className="relative h-28 w-28 flex justify-center" key={item.id}>
              <img src={item.image} alt={item.text} className="h-full" />
              <div className="bg-[#417F56] shadow-xl w-36 h-20 rounded-sm absolute top-1/2 -z-10"></div>
              <span className="text-sm w-24 h-8 bg-white rounded-sm shadow-md flex items-center justify-center absolute -bottom-1/2 -translate-y-1/2">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
