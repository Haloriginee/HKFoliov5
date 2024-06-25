import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xlw-full">
        <FloatingNav
          navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience />
      </div>
    </main>
  );
}
