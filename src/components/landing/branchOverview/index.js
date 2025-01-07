import BranchItem from "./BranchItem";

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
      <h2 className="block text-center mb-3 text-[#353535] md:text-lg font-bold md:mb-5">
        ترخینه گردی
      </h2>
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
