import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import youtubeDark from '../../assets/youtube_black.svg';
import youtubeLight from '../../assets/youtube_white.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Mohammad_Sabbir_Musfique_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Mohammad Sabbir Musfique"
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
          Mohammad
          <br />
          Sabbir
        </h1>
        <h2>Problem Solver</h2>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.youtube.com/@sabbirmusfique8016" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
          <a href="https://github.com/sabbir_063" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/msmusfique063/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I'm an experienced competitive programmer who loves solving tough problems and has successfully competed in many online challenges. I also have a strong background in software development, working well in team projects. I'm excited about the opportunity to use my programming and teamwork skills in a software developer role at a tech company.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
