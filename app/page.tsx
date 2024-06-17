import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xlw-full">
        <FloatingNav
          navItems={[
            {name: "string", link: "/", icon: <FaHome/>}
          ]} />
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
