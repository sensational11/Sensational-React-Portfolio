import React, { useEffect } from "react";

// import HomePage from "./Homepage";

export default function Navbar(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <div>
      <ul>
        {pages.map((HomePage) => (
          <li
            className={`mx-5 ${
              currentPage.name === HomePage.name && "navActive"
            }`}
            key={HomePage.name}
          >
            <span onClick={() => setCurrentPage(HomePage)}>
              {HomePage.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
