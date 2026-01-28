let clicks = 0;

const evidences = [
  {
    text: "Eles brigam o tempo todo, mas confiam a vida um no outro em combate.",
    img: "./assets/img/hudcon_1.gif"
  },
  {
    text: "Ilya ficou visivelmente alterado quando Shane se machucou. Isso é normal entre rivais.",
    img: "./assets/img/hudcon_2.gif"
  },
  {
    text: "Contato visual prolongado. Silêncio estranho. Nenhum dos dois se afasta.",
    img: "./assets/img/hudcon_3.gif"
  },
  {
    text: "Eles funcionam melhor juntos do que separados. Coincidência, claro.",
    img: "./assets/img/placeholder.gif"
  },
  {
    text: "Isso não é ódio. Isso é tensão emocional mal resolvida.",
    img: "./assets/img/hudcon_5.gif"
  }
];

const narratorTexts = [
  "Eles são apenas rivais.",
  "Rivalidade intensa. Só isso.",
  "Isso ainda entra na categoria rivalidade.",
  "Ok… talvez seja um pouco estranho.",
  "Isso definitivamente não é só rivalidade."
];

const denyBtn = document.getElementById("denyBtn");
const narrator = document.getElementById("narrator");
const evidenceSection = document.getElementById("evidenceSection");
const meterFill = document.getElementById("meterFill");
const denialText = document.getElementById("denialText");

denyBtn.addEventListener("click", () => {

  if (clicks < evidences.length) {
    const ev = evidences[clicks];

    // Limpa a evidência anterior
    evidenceSection.innerHTML = "";

    // Cria nova evidência
    const div = document.createElement("div");
    div.classList.add("evidence");

    const p = document.createElement("p");
    p.textContent = ev.text;

    const img = document.createElement("img");
    img.src = ev.img;
    img.alt = "Prova suspeita";

    div.appendChild(p);
    div.appendChild(img);
    evidenceSection.appendChild(div);
  }

  clicks++;

  const percent = Math.min(clicks * 20, 100);
  meterFill.style.width = percent + "%";
  denialText.textContent = `Nível de negação: ${percent}%`;

  narrator.textContent =
    narratorTexts[Math.min(clicks, narratorTexts.length - 1)];

  if (clicks === evidences.length) {
    denyBtn.textContent = "Ok. Talvez não sejam SÓ rivais.";
  }

  if (clicks > evidences.length) {
    evidenceSection.innerHTML = `
      <p class="final">
        Não adianta mais negar.<br><br>
        Shane e Ilya claramente não são só rivais.
      </p>
    `;
    denyBtn.style.display = "none";
  }
});

