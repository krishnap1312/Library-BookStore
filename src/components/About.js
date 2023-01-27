import "../components/all.css";
import React from "react";
import Header from "./Header";

const About = () => {
  return (<><Header/>
    <div>
      <div className="about-head">
        <h1 className="about-h1">Welcome to our library website!</h1>
      </div>

      <div className="about-paras">
        <p>
          {" "}
          We are a vibrant community institution dedicated to providing access
          to information, education, and entertainment for all members of our
          community. Our collection includes books, magazines, newspapers,
          e-books, audio books, and more, covering a wide range of subjects for
          all ages and interests.
        </p>

        <br></br>

        <p>
          {" "}
          Our library also offers a variety of programs and events for all ages,
          including storytimes for children, book clubs for adults, and
          workshops on topics such as technology and job searching. We also have
          meeting spaces and study rooms available for community use.
        </p>

        <br></br>

        <p>
          {" "}
          Our knowledgeable and friendly staff is always available to help you
          find what you need and answer any questions you may have. We are
          committed to providing the best possible service to our patrons and
          are always open to feedback and suggestions.
        </p>

        <br></br>

        <p className="Salutation">
          Thank you for choosing our library and we look forward to serving you!
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
