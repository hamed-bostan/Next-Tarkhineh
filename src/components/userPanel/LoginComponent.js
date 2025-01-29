import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginComponent() {
  const session = await getServerSession(options);
  //   if (!session) {
  //     redirect("/api/auth/signin?callbackUrl=/profile");
  //   }
  return (
    <>
      <p>برای دیدن پروفایل ابتدا لاگین کنید</p>
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </>
  );
}
