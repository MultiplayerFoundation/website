import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mentorPhoto from "./mentor.png"
import techPhoto from "./tech.png"
import groupPhoto from "./group.jpg"
import styles from "./HomePage.module.css"
import demo1Photo from "./demo1.png"
import demo2Photo from "./demo2.png"
import demo3Photo from "./demo3.png"
import demo4Photo from "./demo4.png"
import demo5Photo from "./demo5.png"
import alonePhoto from "./alone.jpg"

export default function HomePage() {

  useEffect(() => {

    document.title = "The Multiplayer Foundation"

  }, []);

  const navigate = useNavigate();

  return (
    <main id={styles.main}>
      <section className={styles.actionCall}>
        <h1>No one deserves to be alone</h1>
        <p>The Multiplayer Foundation takes advantage of technology to foster meaningful connections and bring an end to the loneliness epidemic.</p>
        <button onClick={() => navigate("/company")}>Learn more</button>
      </section>
      <section id={styles.headline}>
        <img src={alonePhoto} />
        <p>
          Social isolation is on the rise. Societal dangers — risks that put everyone in jeopardy — are becoming ever more present. There needs to be an engaged, modern movement that's dedicated to making sure no one feels alone.
        </p>
      </section>
      <section className={styles.value}>
        <img src={techPhoto} />
        <section>
          <h1>Driving engagement through innovation and technology</h1>
          <p>We use technology to connect people with others that will leave a positive impact on their lives — online <i>and</i> offline.</p>
        </section>
      </section>
      <section className={styles.value} id={styles.second}>
        <img src={mentorPhoto} />
        <section>
          <h1>Advocating for social environment</h1>
          <p>We advocate for policies and programs that promote community connection and address social isolation.</p>
        </section>
      </section>
      <section className={styles.value}>
        <img src={groupPhoto} />
        <section>
          <h1>Supporting a great mental health</h1>
          <p>Outside of application expenses, we use our revenue to create and sponsor mental health initiatives. For example, we plan to partner with licensed professionals to offer affordable counseling sessions.</p>
        </section>
      </section>
      <section>
        <h1>Our newest project: Blitz Meet</h1>
        <section>
          <p>Our new game for people to meet someone they can relate to in 30 seconds or less.</p>
          <p><i>Coming Q4 2026</i></p>
          <ul id={styles.gallery}>
            <li>
              <img src={demo1Photo} />
            </li>
            <li>
              <img src={demo2Photo} />
            </li>
            <li>
              <img src={demo3Photo} />
            </li>
            <li>
              <img src={demo4Photo} />
            </li>
            <li>
              <img src={demo5Photo} />
            </li>
          </ul>
        </section>
      </section>
      <section className={styles.actionCall}>
        <h1>Memberships</h1>
        <p>After we get you addicted to our free games, lock in and support the movement. Get a $5 monthly membership and unlock the rest of our catalog.</p>
        <p>Real Gs make a commitment to helping somebody else.</p>
      </section>
    </main>
  );

}