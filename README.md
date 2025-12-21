
# 🧾 Rhythm-Web app music player

_Rhythm music player web app that play songs and shows the current playing song on the bottom player made using HTML,CSS,Javascript_

---

## 📌 Table of Contents
- <a href="#overview">Overview</a>
- <a href="#business-problem">Business Problem</a>
- <a href="#tools--technologies">Tools & Technologies</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#data-cleaning--preparation">Data Cleaning & Preparation</a>
- <a href="#research-questions--key-findings">Research Questions & Key Findings</a>
- <a href="#how-to-run-this-project">How to Run This Project</a>
- <a href="#final-recommendations">Final Recommendations</a>
- <a href="#author--contact">Author & Contact</a>

---
<h2><a class="anchor" id="overview"></a>Overview</h2>

Rhythm is a responsive music web application that allows users to play, pause, and switch between songs seamlessly. The application features an interactive UI with a dynamic bottom music player that displays the currently playing track, enhancing the overall user experience.

Built using HTML, CSS, and JavaScript, the project focuses on smooth interactivity, clean design, and responsive behavior across different screen sizes.

---
<h2><a class="anchor" id="business-problem"></a>Business Problem</h2>

Many basic music players lack intuitive UI feedback and responsiveness across devices. Users often want a simple, visually engaging way to control music playback while clearly seeing which song is currently playing.

Rhythm addresses this by providing:
- Clear play/pause controls
- Visual song state changes
- A bottom player that appears only when music is playing

---
<h2><a class="anchor" id="dataset"></a>Dataset</h2>

This project does not use an external dataset.
Instead, it uses:
- A static JavaScript array of objects to store song metadata such as:
- Song name
- Audio file path
- Cover image path
This approach is efficient for client-side music applications where content is predefined.

---

<h2><a class="anchor" id="tools--technologies"></a>Tools & Technologies</h2>

- HTML5 – Structure and semantic layout
- CSS3 – Styling, animations, media queries
- JavaScript (ES6) – DOM manipulation, event handling, audio control
- GitHub

---
<h2><a class="anchor" id="project-structure"></a>Project Structure</h2>

```
Rhythm/
├── covers/
├── song/
├── cd (1).png
├── gif2.gif
├── guitar.png
├── index.html
├── script.js
├── style.css
└── README.md
```

---
<h2><a class="anchor" id="data-cleaning--preparation"></a>Data Cleaning & Preparation</h2>

Since the project does not rely on external data sources, no traditional data cleaning was required.
However:
- Song data is structured cleanly in JavaScript objects
- Audio and image paths are organized for easy access and scalability
- DOM elements are selected and managed efficiently to avoid redundancy

---

<h2><a class="anchor" id="research-questions--key-findings"></a>Research Questions & Key Findings</h2>

🔹 Research Questions & Key Findings

Key Questions:
- How can song playback state be visually communicated to users?
- How can UI remain clean while providing useful playback information?
- How can responsiveness be ensured without frameworks?
Key Findings
- A bottom player improves user awareness of active playback
- Toggling icons based on state (play/pause) enhances usability
- Media queries and Flexbox provide strong responsiveness without libraries

---

<h2><a class="anchor" id="how-to-run-this-project"></a>How to Run This Project</h2>

- Clone the repository
- Open the project folder
- Open index.html in any modern browser
- Click on a song’s play icon to start listening 🎵
- No additional setup or dependencies required.

---
<h2><a class="anchor" id="final-recommendations"></a>Final Recommendations</h2>

- Add a progress bar for song duration tracking
- Implement next/previous controls for enhanced navigation
- Store last played song using localStorage for session persistence
- Convert the project into a modular structure for scalability
---
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>

**Amrapali Bala**   
📧 Email: amrapalibala51@gmail.com 
🔗 [LinkedIn](https://www.linkedin.com/in/amrapali-bala-546b78252/)  