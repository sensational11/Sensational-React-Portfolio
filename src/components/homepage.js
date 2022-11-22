import React from "react";
import PageContent from "./PageContent";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function HomePage({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "aboutme":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default HomePage;
