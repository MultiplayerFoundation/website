import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MotivationPage() {

  useEffect(() => {

    document.title = "The Motivation • The Multiplayer Foundation"

  }, []);

  return (
    <main>
      <section>
        <h1>Welcome to the new social world</h1>
        <p>The Multiplayer Foundation takes advantage of technology to foster meaningful connections and bring an end to the loneliness epidemic.</p>
        <button>Get involved</button>
      </section>
      <section id={"headline"}>
        <p>
          Social isolation is on the rise. Societal dangers — risks that put everyone in jeopardy — are becoming ever more present. There needs to be an engaged, modern movement that's dedicated to making sure no one feels alone.
        </p>
      </section>
      <section>
        <h1>Driving engagement through innovation</h1>
        <p>We use technology to connect people with others that will leave a positive impact on their lives — online <i>and</i> offline.</p>
      </section>
      <section>
        <h1>Advocating for social environment</h1>
        <p>We advocate for policies and programs that promote community connection and address social isolation.</p>
      </section>
      <section>
        <h1>Supporting a great mental health</h1>
        <p>Outside of application expenses, we use our revenue to create and sponsor mental health initiatives. For example, we plan to partner with licensed professionals to offer affordable counseling sessions.</p>
      </section>
      <section>
        <h1>Our newest project</h1>
        <section>
          <h1>Blitz Meet</h1>
          <p>Our new game for people to meet someone they can relate to in 30 seconds or less.</p>
          <p><i>Coming Q4 2026</i></p>
        </section>
      </section>
      <section>
        <p>Want to join the mission?</p>
        <button>Get involved</button>
      </section>
    </main>
  );

}