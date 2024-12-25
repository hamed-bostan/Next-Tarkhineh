import Link from "next/link";

export default function NavigationDesktop({ data }) {
  return (
    <div className="hidden md:flex gap-x-6">
      {data.map((item) => (
        <NavigationList key={item.id} item={item} />
      ))}
    </div>
  );
}

function NavigationList({ item }) {
  return (
    <div className="flex items-center gap-x-1">
      <Link href={item.path}>
        <span className="text-sm">{item.text}</span>
      </Link>
      {item.icon && <img src={item.icon} className="w-4 h-4" />}
    </div>
  );
}
