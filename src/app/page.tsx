import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="flex-1 space-y-4">
        <HeroSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 my-4"></div>
        </div>

        <ExperienceSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 my-4"></div>
        </div>

        <ProjectsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 my-4"></div>
        </div>

        <SkillsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 my-4"></div>
        </div>

        <CertificationsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 my-4"></div>
        </div>

        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
