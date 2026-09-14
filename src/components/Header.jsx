import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="header-container flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">BrainBuzz.</h1>

        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/duebenpresleylewis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400 transition-colors"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
