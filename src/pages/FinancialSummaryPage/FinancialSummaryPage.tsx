import React, { useEffect } from "react";
import finances from "./finances.png";

export default function FinanceSummaryPage() {

  useEffect(() => {

    document.title = "The Finances • The Multiplayer Foundation"

  }, []);

  return (
    <main>
      <img src={finances} />
    </main>
  );

}