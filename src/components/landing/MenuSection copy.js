const menuInformation = [
  {
    id: '1',
    image: "assets/images/firstPageImages/01.png",
    text: "غذای اصلی",
  },
  {
    id: '2',
    image: "assets/images/firstPageImages/02.png",
    text: "پیش غذا",
  },
  {
    id: '3',
    image: "assets/images/firstPageImages/03.png",
    text: "دسر",
  },
  {
    id: '4',
    image: "assets/images/firstPageImages/04.png",
    text: "نوشیدنی",
  },
];

export default function MenuSection() {
  return (
    <div className="px-5">
      <p>منوی رستوران</p>
      <div className="grid grid-cols-2 gap-x-4">
        {menuInformation.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="relative">
                <img src={item.image} alt={item.text} className="h-28" />
                <div className="bg-[#417F56] w-36 h-20 rounded-sm absolute top-1/2 left-0 -z-10"></div>
              </div>
              <span className="bg-white text-black w-24 h-8 shadow-sm">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
