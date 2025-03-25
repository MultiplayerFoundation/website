import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import christianToneyImage from "./christian-toney.png"

export default function CompanyPage() {

  useEffect(() => {

    document.title = "The Company • The Multiplayer Foundation"

  }, []);

  return (
    <main>
      <section>
        <h1>Executive Team</h1>
        <section>
          <h2>President</h2>
          <h3>Christian Toney</h3>
          <img src={christianToneyImage} />
          <p>No one deserves to be alone. Under this premise, I founded The Multiplayer Foundation as a way to end social isolation across the world. I'm majoring in computer science at Central Michigan University and decided to use my skill set in technology and engineering to do this.</p>
          <p>Over the years, I have taken on many leadership roles, including working with Ford Motor Company as a software engineering intern and working with the Detroit Area Pre-College Engineering Program (DAPCEP) as a panelist to show middle and high school students some opportunities about working in the STEM field. Wherever I go, I aim to be an active contributor to my community.</p>
          <button onClick={() => location.href = "mailto:christian.toney@multiplayerfoundation.org"}>Email Christian Toney</button>
        </section>
      </section>
      <section>
        <h1>Board of Directors</h1>
        <p>We're looking for experts in computer science, cybersecurity, the arts, and healthcare to join our board of directors. If you're interested in putting a end to social isolation, reach out to us.</p>
        <button onClick={() => location.href = "mailto:board@multiplayerfoundation.org"}>Email The Multiplayer Foundation</button>
      </section>
    </main>
  );

}