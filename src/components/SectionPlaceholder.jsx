import React from "react";
import Welcome from "./WelcomePage";
import QuizPage from "./QuizPage";
import { useState } from "react";

const SectionPlaceholder = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <div>
        {/* Main Content */}
      {/* conditional rendering using state */}

      {/* {showWelcome && <Welcome />} */}
      <QuizPage />
    </div>
  );
};

export default SectionPlaceholder;
