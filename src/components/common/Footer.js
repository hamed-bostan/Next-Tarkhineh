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

export default function Footer() {
  return (
    <section className="bg-[url('/assets/images/bannerImages/footer.jpg')] bg-center bg-cover h-36 w-full">
      <div className="grid grid-cols-2 grid-rows-5 text-white px-5 py-4">
        <span className="text-sm font-bold">دتسرسی آسان</span>
        <span className="text-sm font-bold">شعبه های ترخینه</span>
        {footerLinks.map((item, index) => (
          <span
            key={item.id}
            className={`text-sm ${
              index === footerLinks.length - 1 ? "col-start-2" : ""
            }`}
          >
            {item.text}
          </span>
        ))}
        <div className="flex items-center gap-x-2 row-start-5">
          {footerIcons.map((item) => (
            <img key={item.id} src={item.image} className="w-4 h-4" />
          ))}
        </div>
      </div>
    </section>
  );
}
