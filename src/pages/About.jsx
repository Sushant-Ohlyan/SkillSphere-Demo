import React from "react";
import "../Styles/About.css"; // import the css file

export default function About() {
  // Your name—replace with your actual name
  const developerName = "Sushant Ohlyan";

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1>About SkillSphere</h1>

      <p>
        <strong>SkillSphere</strong> is a web application designed to help you explore the latest trending programming videos and courses from various trusted sources. It features an intelligent search powered by OpenAI’s ChatGPT API to deliver smart, relevant results tailored to your interests.
      </p>

      <h2>Project Purpose</h2>
      <p>
        In the fast-paced world of programming and technology, staying updated with the latest tutorials, courses, and videos is crucial. SkillSphere aggregates content from popular platforms and combines it with AI-powered search to make learning easier and more efficient.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Display trending programming videos and courses from YouTube, RapidAPI, and more.</li>
        <li>Powerful search interface using ChatGPT for contextual and precise searching.</li>
        <li>Clean, responsive UI for easy navigation.</li>
      </ul>

      <h2>About the Developer</h2>
      <p>
        This project was developed by <strong>{developerName}</strong>. I am passionate about web development and building tools that simplify learning and enhance productivity.
      </p>

      <h2>Contact</h2>
      <p>
        Feel free to reach out if you have questions, feedback, or collaboration ideas!
      </p>
      {/* Replace below with your own contact info */}
      <address>
        Email: <a href="mailto:sushant.ohlyan@example.com">sushant.ohlyan@example.com</a>
        <br />
        LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
      </address>
    </div>
  );
}
