export default function Address() {
  return (
    <div className="grid grid-cols-2 text-sm text-[#353535] gap-y-2 p-2 border-2 border-[#417F56] rounded-sm absolute -bottom-14 left-4 right-4 bg-white">
      <div className="col-span-full flex gap-x-1 items-center">
        <img
          src="/assets/images/icons/location.svg"
          alt="location icon"
          className="w-4 h-4"
        />
        <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
      </div>
      <div className="flex gap-x-1 items-center">
        <img
          src="/assets/images/icons/call-calling.svg"
          alt="phone call icon"
          className="w-4 h-4"
        />
        <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
      </div>
      <div className="flex gap-x-1 items-center">
        <img
          src="/assets/images/icons/clock.svg"
          alt="clock icon"
          className="w-4 h-4"
        />
        <span>همه روزه از ساعت ۱۲ الی ۲۳ </span>
      </div>
    </div>
  );
}
