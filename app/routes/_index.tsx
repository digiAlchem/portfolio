import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/index.module.scss";
import { Terminal } from "~/components/Terminal";
import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";
import KitaconSite from "../assets/kitacon-site.png";
import Portrait from "../assets/photo.jpg";
import EmisXDemo from "../assets/emis-x-screenshot.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Jonny Shuttleworth - Frontend Web Developer" },
    { name: "description", content: "An online portfolio for Jonny Shuttleworth, a Yorkshire-based web developer" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className={styles.card}>
        <Terminal>
          introduction
        </Terminal>
        <div className="switcher switch-center margin-top">
          <img className={styles.portrait} src={Portrait} />
          <div>
            <div className={styles.mainText}>
              Hi there! My name is Jonny Shuttleworth, and I'm a web developer specialising in React-based frontend development and UI libraries.
            </div>
            <div className={styles.subText}>
              I've been writing code since 2016 in a variety of languages (starting with PHP!) and have since specialised into Javascript-based
              development that focuses on mobile-first styling and reusable component systems.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <Terminal>
          skills
        </Terminal>
        <div className="switcher">
          <div>
            <h3>Code</h3>
            <ul>
              <li>
                HTML, CSS
              </li>
              <li>
                Javascript, Typescript
              </li>
              <li>
                CSS modules, SASS
              </li>
              <li>
                React frameworks (Remix, Next.js)
              </li>
              <li>
                NPM
              </li>
              <li>
                Git, GitHub
              </li>
              <li>
                Node.js
              </li>
              <li>
                WCAG guidelines
              </li>
            </ul>
          </div>
          <div>
            <h3>Software</h3>
            <ul>
              <li>
                Visual Studio Code
              </li>
              <li>
                Terminal
              </li>
              <li>
                Figma
              </li>
              <li>
                Adobe and Affinity suites
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                Google Cloud
              </li>
              <li>
                Netlify
              </li>
              <li>
                Supabase
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <Terminal>
          examples
        </Terminal>
        <div>
          <div>
            <h2>
              Portfolio
            </h2>
            <div className={styles.mainText}>
              This portfolio site is built using the{" "}
              <a href="https://remix.run" target="_blank">Remix</a> framework, with the icons coming from the{" "}
              <a href="https://lucide.dev/icons" target="_blank" rel="nofollow">Lucide</a> set and additional components
              from {" "}
              <a href="https://www.radix-ui.com/primitives" target="_blank">Radix UI</a>.
            </div>
            <div className={styles.subText}>
              It makes use of SCSS modules for styling, CSS variables to allow the use of a light and dark theme, and a custom React
              hook to facilitate the theme switching menu at the top right of the website.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> <a href="https://github.com/digiAlchem/portfolio" target="_blank" rel="nofollow">digiAlchem/portfolio</a>
            </div>
          </div>
          <hr />
          <div>
            <h2 className={styles.header}>
              Kitacon
            </h2>
            <div className={styles.heroImage}>
              <img src={KitaconSite} />
            </div>
            <div className={styles.mainText}>
              In 2023, I joined the Kitacon Events committee as their web developer to help create a new website for their upcoming events.
            </div>
            <div className={styles.subText}>
              It also uses Remix for website navigation, Radix UI primitives, and connects to a Supabase instance for database queries and content delivery.
              As the website will be used at the event by both committee members and attendees, the site was created with mobile-first
              styling throughout to accommodate this and remove as little friction on mobile devices as possible.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> Private repository
              <GlobeIcon /> <a href="https://www.kitacon.org" target="_blank" rel="nofollow">Website</a>
            </div>
          </div>
          <hr />
          <div>
            <h2 className={styles.header}>
              EMIS Health
            </h2>
            <div className={styles.heroImage}>
              <img src={EmisXDemo} />
            </div>
            <div className={styles.mainText}>
              As part of a dedicated UI team, I help to create and maintain a custom component library for the new version of the UK's leading
              clinical system.
            </div>
            <div className={styles.subText}>
              EMIS UI is an internal React-based library, featuring a custom-built documentation site using Next.js. We work very closely with UX designers,
              meaning that user experience is always at the forefront of the library; this includes adherence to WCAG guidelines at AA standard to
              ensure the platform remains accessible for all users.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> Private repository
              <GlobeIcon /> <a href="https://www.emishealth.com/products/emis-x" target="_blank" rel="nofollow">Website</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <Terminal>
          contact
        </Terminal>
        <div>
          <div className={styles.mainText}>
            I live in Doncaster, South Yorkshire, and work best in a remote-based position with flexible hours to accommodate my mental health.
          </div>
          <div className={styles.subText}>
            Currently looking for roles with a focus on frontend (React-based) development, with opportunities to get involved
            with UX discussions and designs alongside conversations about accessibility and best practise.
          </div>
          <div className={styles.mainLink}>
            <LinkedinIcon /> <a href="https://www.linkedin.com/in/jonny-shuttleworth-377290272" target="_blank" rel="nofollow">Jonny Shuttleworth</a>
          </div>
        </div>
      </div>
    </div>
  );
}
