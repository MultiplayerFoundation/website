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

export default function HomePage() {

  useEffect(() => {

    document.title = "The Multiplayer Foundation"

  }, []);

  const mailtoLink = "mailto:hey@multiplayerfoundation.org?subject=I'd%20like%20to%20get%20involved!&body=Hi!%0A%0AI'd%20like%20to%20get%20involved%20with%20The%20Multiplayer%20Foundation.%20I%20can%20%3Clist%20skills%3E%20and%20I'm%20interested%20in%20%3Clist%20interests%3E.";

  return (
    <main id={styles.main}>
      <section className={styles.actionCall}>
        <h1>No one deserves to be alone</h1>
        <p>The Multiplayer Foundation takes advantage of technology to foster meaningful connections and bring an end to the loneliness epidemic.</p>
        <button onClick={() => location.href = mailtoLink}>Get involved</button>
      </section>
      <section id={styles.headline}>
        <p>
          Social isolation is on the rise. Societal dangers — risks that put everyone in jeopardy — are becoming ever more present. There needs to be an engaged, modern movement that's dedicated to making sure no one feels alone.
        </p>
      </section>
      <section className={styles.value}>
        <section>
          <h1>Driving engagement through innovation and technology</h1>
          <p>We use technology to connect people with others that will leave a positive impact on their lives — online <i>and</i> offline.</p>
        </section>
        <img src={techPhoto} />
      </section>
      <section className={styles.value}>
        <section>
          <h1>Advocating for social environment</h1>
          <p>We advocate for policies and programs that promote community connection and address social isolation.</p>
        </section>
        <img src={mentorPhoto} />
      </section>
      <section className={styles.value}>
        <section>
          <h1>Supporting a great mental health</h1>
          <p>Outside of application expenses, we use our revenue to create and sponsor mental health initiatives. For example, we plan to partner with licensed professionals to offer affordable counseling sessions.</p>
        </section>
        <img src={groupPhoto} />
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
        <p>Want to join the mission?</p>
        <button onClick={() => location.href = mailtoLink}>Get involved</button>
      </section>
    </main>
  );

}