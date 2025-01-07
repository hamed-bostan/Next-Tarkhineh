import Image from "next/image";

const branchList = [
  {
    id: "1",
    image: "/assets/images/branchImages/branch_01.png",
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    phoneNumber: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روزهای تعطیل",
  },
  {
    id: "2",
    image: "/assets/images/branchImages/branch_02.png",
    title: "شعبه چالوس",
    address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش ",
    phoneNumber: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روزهای تعطیل",
  },
  {
    id: "3",
    image: "/assets/images/branchImages/branch_03.png",
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    phoneNumber: "۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روزهای تعطیل",
  },
  {
    id: "4",
    image: "/assets/images/branchImages/branch_04.png",
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    phoneNumber: "۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روزهای تعطیل",
  },
];

export default function BranchOverview() {
  return (
    <section className="px-5 py-6">
      <h2 className="block text-center mb-3 text-[#353535] md:text-lg font-bold md:mb-5">ترخینه گردی</h2>
      <BranchListContainer branches={branchList} />
    </section>
  );
}

function BranchListContainer({ branches }) {
  return (
    <div className="flex flex-col gap-y-3 md:grid md:grid-cols-4 md:gap-x-5">
      {branches.map((branch) => (
        <BranchItem branch={branch} key={branch.id} />
      ))}
    </div>
  );
}

function BranchItem({ branch }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 border border-[#CBCBCB] rounded-sm overflow-hidden md:grid-cols-1 md:grid-rows-[auto_1fr]">
      <div className="relative col-span-1 row-span-2 h-20 md:h-40 lg:h-48 md:row-span-1">
        <Image
          width={100}
          height={100}
          src={branch.image}
          alt={branch.title}
          className="w-full h-full object-cover"
        />
        <img
          src="assets/images/icons/expand_01.png"
          alt="expand icon"
          className="absolute bottom-2 right-2 w-4 h-4 md:hidden"
        />
      </div>
      <div className="p-2 col-span-1 row-span-2 text-center md:row-span-1 md:py-4">
        <h3 className="text-md text-[#353535] row-span-1 mb-1 md:mb-2">{branch.title}</h3>
        <p className="text-sm text-[#717171] row-span-1">{branch.address}</p>
      </div>
    </div>
  );
}
