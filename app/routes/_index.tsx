import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/index.module.scss";
import { Terminal } from "~/components/Terminal";
import { GithubIcon, GlobeIcon } from "lucide-react";
import KitaconSite from "../assets/kitacon-site.png";
import EmisXDemo from "../assets/emis-x-screenshot.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Jonny Shuttleworth - Frontend Web Developer" },
    { name: "description", content: "An online portfolio for " },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className={styles.card}>
        <Terminal>
          hello world
        </Terminal>
        <div>
          Hi there! My name is Jonny Shuttleworth, and I'm a web developer specialising in React-based frontend development and UI libraries.
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
                HTML, CSS, Javascript
              </li>
              <li>
                React frameworks (Remix, Next.js)
              </li>
              <li>
                CSS modules, SASS
              </li>
              <li>
                NPM
              </li>
              <li>
                Git, GitHub
              </li>
              <li>
                Node.js, Typescript
              </li>
              <li>
                WCAG Accessibility
              </li>
            </ul>
          </div>
          <div>
            <h3>Software</h3>
            <ul>
              <li>
                React frameworks (Remix, Next.js)
              </li>
              <li>
                CSS, SASS
              </li>
              <li>
                NPM
              </li>
              <li>
                Git
              </li>
              <li>
                Node.js
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <Terminal>
          portfolio
        </Terminal>
        <div>
          <div>
            <h2>
              Portfolio
            </h2>
            <div className={styles.mainText}>
              This portfolio site is built using the{" "}
              <a href="https://remix.run/" target="_blank">Remix</a> framework, with the icons coming from the{" "}
              <a href="https://lucide.dev/icons/" target="_blank" rel="nofollow">Lucide</a> set.
            </div>
            <div className={styles.subText}>
              It makes use of SCSS modules for styling, CSS variables to allow the use of a light and dark theme, and a custom React
              hook to facilitate the theme switching menu at the top right of the website.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> <a href="https://github.com/digiAlchem/portfolio" target="_blank" rel="nofollow">digiAlchem/portfolio</a>
            </div>
          </div>
          <div>
            <h2 className={styles.header}>
              Kitacon
            </h2>
            <div className={styles.heroImage}>
              <img src={KitaconSite} />
            </div>
            <div className={styles.mainText}>
              In 2024, I joined the Kitacon Events committee as their web developer to help create a brand new website for that year's event.
            </div>
            <div className={styles.subText}>
              It also uses Remix for website navigation, and connects to a Supabase instance for database queries and content delivery.
              As the website will be used at the event by both committee members and attendees, the site was created with mobile-first
              styling throughout to accommodate this and remove as little friction on mobile devices as possible.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> Private repository
              <GlobeIcon /> <a href="https://www.kitacon.org/" target="_blank" rel="nofollow">Website</a>
            </div>
          </div>
          <div>
            <h2 className={styles.header}>
              EMIS Health
            </h2>
            <div className={styles.heroImage}>
              <img src={EmisXDemo} />
            </div>
            <div className={styles.mainText}>
              As part of EMIS-X, I helped to create and maintain a custom UI library for the new version of the UK's leading
              clinical system.
            </div>
            <div className={styles.subText}>
              EMIS UI is an internal React-based library, featuring a custom-built documentation site using Next.js. We paired with
              a UX team throughout the process of creating the library, meaning that user experience was at the forefront of the
              library from its conception; including adhering to WCAG guidelines and ensuring the platform remains accessible for
              all users.
            </div>
            <div className={styles.githubLink}>
              <GithubIcon /> Private repository
              <GlobeIcon /> <a href="https://www.emishealth.com/products/emis-x" target="_blank" rel="nofollow">Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
