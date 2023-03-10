import "./About.css";
import { memo } from "react";

const About = memo(function About() {
  return (
    <div className="about">
      <h2 className="aboutHeading">About</h2>
      <p className="aboutPara">
        Final year student pursuing B.Tech. (Honours) in Information and
        Communication Technology with minor in Computational Science at
        Dhirubhai Ambani Instititute of Information and Communication
        Technology. (DA-IICT)
      </p>

      <p className="aboutPara">
        My recent interests include Competitive Programming and exploring ideas
        in the domain of Quantum Computing. I have also worked on developing
        full stack web applications using Django and projects of native Android
        Development. Moreover, I am also an active Open Source contributor and
        love to contribute to open source projects that align with my interest
        and motive.
      </p>

      <p className="aboutPara">
        I am currently interning as Frontend Web Developer at Tekion India.
      </p>
    </div>
  );
});

export default About;
