import Image from "next/image";

export default function Details() {
  return (
    <section className="px-5 py-4">
      <h3 className="font-bold mb-1 text-[#353535] md:text-lg md:mb-5">درباره ما</h3>
      <div className="text-xs grid grid-cols-2 gap-x-4 gap-y-2 text-[#717171] md:grid-rows-1 md:text-sm">
        <p className="col-span-1 row-span-1 text-justify">
          رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این
          سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش
          برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت
          مشتریان بوده است.
        </p>
        <Image
          width={80}
          height={80}
          src="/assets/images/bannerImages/aboutUs_image.png"
          alt="About us image"
          className="rounded-sm col-span-1 h-full w-full object-cover object-center md:row-span-2 md:rounded-lg"
        />
        <p className="col-span-2 text-justify md:col-span-1">
          دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای
          خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه
          در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح
          کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ
          شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی
          شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد
          کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم
          انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده
          برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود. به امید آن روز که همه
          ایرانیان سالم و سلامت باشند.
        </p>
      </div>
    </section>
  );
}
