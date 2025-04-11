import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import christianToneyImage from "./christian-toney.png"
import styles from "./CompanyPage.module.css"

export default function CompanyPage() {

  useEffect(() => {

    document.title = "The Company • The Multiplayer Foundation"

  }, []);

  return (
    <main id={styles.main}>
      <section>
        <h1>Executive Team</h1>
        <section>
          <section className={styles.person}>
            <section className={styles.imageContainer}>
              <img src={christianToneyImage} />
            </section>
            <section className={styles.titles}>
              <h2>President</h2>
              <h3>Christian Toney</h3>
            </section>
          </section>
          <p>The pandemic lockdown put me in a position where I was great in professional settings, but couldn't adapt to more social environments. This shyness and struggle to return to a new normal put me at a disadvantage when I entered college, but I realized that I wasn't alone. Young adults recognize the importance of face-to-face interactions with others. I knew that although social media was popular, but it's made to keep you mindlessly on there without building true, meaningful connections. So, I founded the The Multiplayer Foundation.</p>
          <p>I'm majoring in computer science at Central Michigan University and I love video games. From Jackbox nights to table-top, they bring us together especially during dire times.</p>
          <p>Outside of The Multiplayer Foundation, I've worked with Ford Motor Company as a software engineer and the Detroit Area Pre-College Engineering Program (DAPCEP) as a panelist to show middle and high school students some opportunities about working in the STEM field.</p>
          <button onClick={() => location.href = "mailto:christian.toney@multiplayerfoundation.org"}>Email Christian Toney</button>
        </section>
      </section>
      <section>
        <h1>Board of Directors</h1>
        <section>
          <p>We're looking for experts in computer science, cybersecurity, the arts, and healthcare to join our board of directors. If you're interested in putting a end to social isolation, reach out to us.</p>
          <button onClick={() => location.href = "mailto:board@multiplayerfoundation.org"}>Email The Multiplayer Foundation</button>
        </section>
      </section>
      <section>
        <h1>FAQ</h1>
        <section>
          <h2>Q. Why are you doing this?</h2>
          <p>Everyone has a phone. In a world hyperfocused on social media, we are more isolated than ever.</p>
          <p>If you're sick, you can't get help from an out-of-state friend or AI. What are they going to give you, a "get well soon" message? We need real-life connections.</p>
        </section>
        <section>
          <h2>Q. Who are you targeting?</h2>
          <p>Our services will be for the 80+ million adults suffering from social isolation, but we're particularly targeting young adults (Gen Z) because they are the <a href="https://www.usatoday.com/story/opinion/2018/05/03/gen-z-loneliest-generation-social-media-personal-interactions-column/574701002/" target="_blank">loneliest generation</a>.</p>
        </section>
        <section>
          <h2>Q. How do you make money?</h2>
          <p>We make money through grants (i.e. crowdfunding with <a href="https://kickstarter.com" target="_blank">Kickstarter</a>), merchandise, and paid memberships. Most of our apps and games are free-to-play, while others require a paid membership.</p>
        </section>
        <section>
          <h2>Q. Why would anyone pay for your app? Can't I just use [app name]?</h2>
          <p><a href="https://nielseniq.com/global/en/insights/analysis/2020/the-social-dilemma-through-the-eyes-of-the-consumer/">Social media isn't free — you're the product.</a> Unlike competitors, we're <i>not</i> in the business of selling your data.</p>
          <p>We invest into mental health check-ins and services, including monthly in-person and in-game meetups in addition to teaching you the fundamentals of relationship and confidence building.</p>
        </section>
        <section>
          <h2>Q. What if I have something else to ask?</h2>
          <p>Contact Christian Toney at <a href="mailto:christian.toney@multiplayerfoundation.org">christian.toney@multiplayerfoundation.org</a>.</p>
        </section>
      </section>
    </main>
  );

}