import { Borel } from "next/font/google";
import { SiGithub, SiLetterboxd } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ui/ThemeToggle";

const borel = Borel({
  variable: "--font-borel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-3 px-8 lg:px-16 py-12 lg:py-0">
      <header className="flex flex-col justify-between lg:max-h-screen lg:py-8 lg:sticky lg:top-0 min-w-1/2">
        <div className="flex justify-left flex-col">
          <h1 className="text-primary text-4xl font-bold">
            <a href="#about">Riley Champion</a>
          </h1>
          <h2 className="text-secondary text-2xl">Software Engineer</h2>
          <p className="text-muted">Full Stack Developer | Board Game Enthusiast | Niko&apos;s Dad</p>
        </div>
        <nav>
          <ul className="hidden lg:flex lg:flex-col lg:gap-6 lg:mt-4">
            <li>
              <a href="#experience" className="text-primary hover:text-action-hover">Experience</a>
            </li>
            <li>
              <a href="#projects" className="text-primary hover:text-action-hover">Projects</a>
            </li>
            <li>
              <a href="#current-fixations" className="text-primary hover:text-action-hover">Current Fixations</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row align-middle items-start mt-4 gap-2">
          <ThemeToggle />
          <div className="bg-transparent text-primary p-2 rounded-md border-2 border-transparent cursor-pointer hover:border-border hover:bg-raised active:bg-selected active:border-border-strong transition-colors">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-primary"
            >
              <SiGithub size={23} />
            </a>
          </div>
          <div className="bg-transparent text-primary p-2 rounded-md border-2 border-transparent cursor-pointer hover:border-border hover:bg-raised transition-colors">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-primary"
            >
              <FaLinkedin size={23} />
            </a>
          </div>
          <div className="bg-transparent text-primary p-2 rounded-md border-2 border-transparent cursor-pointer hover:border-border hover:bg-raised transition-colors">
            <a
              href="https://letterboxd.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Letterboxd"
              className="text-primary"
            >
              <SiLetterboxd size={23} />
            </a>
          </div>
        </div>
      </header>
      <div className="min-h-screen min-w-1/2 lg:py-8 py-8">
        <div id="about">
          <h1 className="text-primary text-2xl font-extrabold mb-4">ABOUT</h1>
          <p className="text-primary text-md mb-4">
            I&apos;m a software engineer at ESRI, working on Feature Services — the layer that gets spatial data out of wherever it actually lives and into a map you can pan around. Some of that data sits in stores we host. Some of it stays in a customer&apos;s own warehouse and has to be read in place. Making both feel like the same map is most of the job.
          </p>
          <p className="text-primary text-md mb-4">
            On the side I&apos;m building Adventurer&apos;s Journal, a note-taking app for D&D campaigns, and Kubera, a financial tracker that lives in the terminal because I apparently can&apos;t be trusted with a GUI. There&apos;s also the Niko Gallery, which is exactly what it sounds like.
          </p>
          <p className="text-primary text-md mb-4">
            I started at UC Irvine&apos;s Student Affairs IT, building the system that registered and checked in students for graduation. React and TypeScript, and the first time my code had a line of actual humans attached to it.
          </p>
          <p className="text-primary text-md mb-4">
            Then New York. At First Republic I built a CLI dev tool that let engineers deploy to dev and test Kubernetes environments and reach the rest of our internal tooling without memorizing six different auth flows. Started it in Python, moved it to Go. Then the bank was acquired by JPMorgan Chase, and I spent the next year on transition work and on a deployment orchestration tool that made sure nothing shipped without its tests passing — used by a lot of developers who were, understandably, in a hurry.
          </p>
          <p className="text-primary italic text-md mb-4">
            A year in, I was laid off...
          </p>
          <p className="text-primary text-md mb-4">
            What followed was several months of applications that mostly went nowhere, and eventually the decision to move home to Southern California. Esri came out of that. I probably wouldn&apos;t have found this job if the last one hadn&apos;t ended, which is an annoying thing to be true.
          </p>
          <p className="text-primary text-md mb-4">
            Niko takes up a reasonable percentage of my week. I&apos;m learning to draw, and I&apos;m bad at it in a way that&apos;s finally getting interesting. My partner and I go looking for things to do around SoCal most weekends. I&apos;m four years into a campaign with my friends and threatening to run one of my own. And I&apos;m getting my money&apos;s worth out of a Regal Unlimited membership — if it&apos;s in theaters and it&apos;s strange, I&apos;ve probably seen it.
          </p>
        </div>
        <div id="experience">
          <h1 className="text-primary text-2xl font-extrabold mb-4">EXPERIENCE</h1>
        </div>
        <div id="projects">
          <h1 className="text-primary text-2xl font-extrabold mb-4">PROJECTS</h1>
        </div>
        <div id="current-fixations">
          <h1 className="text-primary text-2xl font-extrabold mb-4">CURRENT FIXATIONS</h1>
        </div>
        <div id="copyright"></div>
      </div>
    </div>
  );
}
