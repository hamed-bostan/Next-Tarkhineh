import Image from "next/image";

export default function Details() {
  return (
    <section className="px-5 py-4 container mx-auto 2xl:px-28">
      <h3 className="text-md font-bold mb-2 text-[#353535]">درباره ما</h3>
      <div className="text-sm grid grid-cols-2 gap-x-4 gap-y-2 text-[#717171] md:grid-rows-[auto_1fr] lg:gap-x-6">
        <p className="col-span-1 row-span-1 text-justify">
          رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این
          سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش
          برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت
          مشتریان بوده است.
        </p>
        <Image
          width={400}
          height={400}
          src="/assets/images/bannerImages/banner-09.jpg"
          alt="About us image"
          className="rounded-md col-span-1 h-full w-full object-cover object-center md:row-span-2 lg:h-64"
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
