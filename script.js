const projects = [
  {
    title: "CasaSante",
    desc: "Sito vetrina per attività commerciale, struttura responsive e navigazione semplice.",
    live: "https://casasante.it",
  },
  {
    title: "I Pulcini di Gloria",
    desc: "Sito informativo con contenuti e sezioni dedicate, ottimizzato per dispositivi mobili.",
    live: "https://ipulcinidigloria.it",
  }
];

const grid = document.querySelector("#projects");

grid.innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>

    <div class="actions">
      <a class="btn project-btn"
         href="${p.live}"
         target="_blank"
         rel="noopener noreferrer">
        🌍 Visita il sito
      </a>
    </div>

  </article>
`).join("");

document.querySelector("#year").textContent = new Date().getFullYear();
