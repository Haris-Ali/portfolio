import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/Haris_Ali_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    src={heroImg}
                    className={styles.hero}
                    alt="Profile picture of Haris Ali"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Haris Ali
                    <br />
                    Akhter
                </h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://github.com/Haris-Ali" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/haris-ali-akhter/"
                        target="_blank"
                    >
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Passion for crafting seamless user experiences through
                    innovative technologies.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
