import { useServerUser } from "@/actions/useServerUser";
import UserProfile from "@/components/DisplayUser";
import EarthoLoginPage from "@/components/EarthoLogin";
import TRPC from "@/components/TRPC";
import dynamic from "next/dynamic";

const OneTaplogin = dynamic(() => import("@/components/OneTapLogin"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
});

export default async function Home() {
  const user = await useServerUser();
  console.log({ user });
  return (
    <>
      {/* <OneTaplogin /> */}
      {/* {user && <UserProfile user={user} />}
      <EarthoLoginPage /> */}
      <TRPC />
    </>
  );
}
