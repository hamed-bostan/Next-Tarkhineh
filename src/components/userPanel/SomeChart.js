import { options } from "@/app/api/auth/[...nextauth]/options";
import { LogOut } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function SomeChart() {
  const session = await getServerSession(options);
  return (
    <>
      <p>
        You are logged in, This is why you can see overview charts for your cart
        shop
      </p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      <LogOut color="#C30000" className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
    </>
  );
}
