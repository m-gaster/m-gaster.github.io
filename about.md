---
layout: inner
title: About
permalink: /about/
---
<div class="landing-content">
  <!-- Introduction -->
  <section class="intro">
    <h2 class="text-center">Hi</h2>
    <p>
      I'm fortunate to have a career where I direct my skills and effort toward social and economic problems that I care about.
    </p>
    <p>Please reach out if you want to collaborate, inquire, or connect!</p>
    <div class="contact-buttons">
      <a href="mailto:mgsiteforwarding@gmail.com" class="button">
        <img src="/assets/img/gmail_logo.png" alt="Email">
      </a>
      <a href="https://www.linkedin.com/in/mikhaelgaster/" class="button">
        <img src="/assets/img/linkedin_logo.png" alt="LinkedIn">
      </a>
    </div>
  </section>
</div>


<style>
    /* Overall Layout */
    .landing-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    section {
        margin-bottom: 1.5em; /* Reduced margin */
    }

    h2 {
        margin: 0 0 0.5em 0;
    }

    /* Introduction Section */
    .intro p {
        line-height: 1.6;
        margin-bottom: 0.75em; /* Reduced margin */
    }

    /* Contact Buttons */
    .contact-buttons {
      display: flex;
      justify-content: center;
      align-items: center; /* Vertically center items */
      gap: 25px; /* Reduced gap */
      margin-top: 0.5em; /* Reduced top margin */
    }

   .button {
        display: inline-flex; /* Use flex to control image centering */
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        padding: 0;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        transition: transform 0.2s ease-in-out;
    }

    .button:hover {
        transform: scale(1.1); /* Scale up on hover */
    }

    .button img {
        width: 35px; /* Slightly reduced size */
        height: auto;
        display: block;
      }

    .email-disclaimer {
      text-align: center;
      margin-top: 0.25em;/*Further reduced*/

    }
</style>
