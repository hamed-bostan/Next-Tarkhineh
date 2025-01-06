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
    <div className="px-5 mb-16 text-[#353535]">
      <h1 className="text-center mb-3 font-bold md:text-xl md:mb-7">
        منوی رستوران
      </h1>
      <div className="grid grid-cols-2 place-items-center gap-y-16 md:grid-cols-4">
        {menuInformation.map((item) => {
          return (
            <div
              className="relative h-28 w-28 flex justify-center lg:w-36 lg:h-36"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.text}
                className="h-full w-full object-cover"
              />
              <div className="bg-[#417F56] shadow-xl w-36 h-20 rounded-sm absolute top-1/2 -z-10 lg:w-52 lg:h-24"></div>
              <span className="text-xs w-24 h-8 bg-[#F9F9F9] rounded-sm shadow-md flex items-center justify-center absolute -bottom-1/2 -translate-y-1/2 md:text-base  lg:bottom-0 lg:translate-y-full lg:w-32 lg:h-10">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
