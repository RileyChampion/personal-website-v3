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
    <div className="lg:flex lg:justify-between lg:gap-3 px-10 py-12 lg:py-0">
      <header className="flex flex-col justify-between lg:max-h-screen lg:py-8 lg:sticky lg:top-0 min-w-1/2">
        <div className="flex justify-left flex-col">
          <h1 className="text-primary text-4xl font-bold">
            <a href="#about">Riley Champion</a>
          </h1>
          <h2 className="text-secondary text-2xl">Software Engineer</h2>
          <p className="text-muted">Full Stack Developer | Board Game Enthusiast | Niko&apos;s Dad</p>
        </div>
        <nav>
          <ul className="flex flex-col gap-6 mt-4">
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
        <div>
          <h1 className="text-primary text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-primary text-lg mb-4">
            Welcome to my personal website! Here, you can explore my projects, experience, and current fixations. I&apos;m a software engineer with a passion for building innovative solutions and creating meaningful experiences through technology.
          </p>
          <p className="text-primary text-lg mb-4">
            Feel free to browse through my work and reach out if you&apos;d like to collaborate or learn more about what I do.
          </p>
          <p className="text-primary text-lg mb-4">
            Thank you for visiting, and I hope you enjoy exploring my projects!
          </p>
          <p className="text-primary text-lg mb-4">
            If you have any questions or feedback, feel free to reach out!
          </p>
          <p className="text-primary text-lg mb-4">
            You can also connect with me on social media or check out my GitHub for more of my work.
          </p>
          <p className="text-primary text-lg mb-4">
            I&apos;m always open to new opportunities and collaborations, so don&apos;t hesitate to get in touch!
          </p>
          <p className="text-primary text-lg mb-4">
            Thank you for taking the time to visit my website, and I hope you find it informative and engaging!
          </p>
          <p className="text-primary text-lg mb-4">
            I&apos;m constantly learning and growing as a developer, and I look forward to sharing my journey with you through this website.
          </p>
          <p className="text-primary text-lg mb-4">
            Stay tuned for updates on my latest projects, experiences, and insights into the world of software engineering!
          </p>
          <p className="text-primary text-lg mb-4">
            Thank you again for visiting, and I hope you enjoy exploring my personal website!
          </p>
        </div>
      </div>
    </div>
  );
}
