import React from "react";
import "../styless/information.css";
function About() {
  return (
    <div className="about">
      <section className="hero">
        <h1>About Our Store</h1>
        <p>
          A modern e-commerce platform built with React for learning and
          practice.
        </p>
      </section>

      <section className="section">
        <h2>Project Introduction</h2>
        <p>
          This is a React-based e-commerce project. It allows users to browse
          and search electronic products like laptops, TVs, and mobile phones.
          The goal is to practice frontend development and build real-world UI
          skills.
        </p>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          To create a smooth and user-friendly shopping experience while
          improving modern React development skills and UI/UX design knowledge.
        </p>
      </section>

      <section className="section">
        <h2>Features</h2>

        <div className="grid">
          <div className="card">📱 Product Browsing</div>
          <div className="card">🔍 Search Functionality</div>
          <div className="card">🎨 Clean UI Design</div>
          <div className="card">📱 Responsive Layout</div>
        </div>
      </section>
      <section className="section">
        <h2>Developer</h2>
        <p>
          Built by a frontend developer learning React. Focused on
          component-based design, UI/UX improvement, and real-world project
          building.
        </p>
      </section>
    </div>
  );
}

export default About;
