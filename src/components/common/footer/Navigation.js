const footerLinks = [
  { id: "1", text: "پرسش‌های متداول" },
  { id: "2", text: "شعبه اکباتان" },
  { id: "3", text: "قوانین ترخینه" },
  { id: "4", text: "شعبه چالوس" },
  { id: "5", text: "حریم خصوصی" },
  { id: "6", text: "شعبه اقدسیه" },
  { id: "7", text: "شعبه ونک" },
];

const footerIcons = [
  { id: "1", image: "/assets/images/icons/twitter.svg" },
  { id: "2", image: "/assets/images/icons/instagram.svg" },
  { id: "3", image: "/assets/images/icons/telegram.svg" },
];

export default function Navigation() {
  return (
    <div className="col-span-2 md:col-span-1 grid grid-cols-2 grid-rows-5 text-[#EDEDED]">
      <span className="text-sm mb-2 md:text-base md:mb-3 md:font-medium">
        دتسرسی آسان
      </span>
      <span className="text-sm mb-2 md:text-base md:mb-3 md:font-medium">
        شعبه های ترخینه
      </span>
      {footerLinks.map((item, index) => (
        <span
          key={item.id}
          className={`text-xs md:text-sm ${
            index < footerLinks.length - 1 ? "mb-1 md:mb-2" : ""
          }
          ${index === footerLinks.length - 1 ? "col-start-2" : ""}`}
        >
          {item.text}
        </span>
      ))}
      <div className="flex gap-x-2 row-start-5">
        {footerIcons.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
