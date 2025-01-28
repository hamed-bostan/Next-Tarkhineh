import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import SomeChart from "./SomeChart";
import LoginComponent from "./LoginComponent";

export default async function Profile() {
  const session = await getServerSession(options);

  return <>{session ? <SomeChart /> : <LoginComponent />}</>;
}
