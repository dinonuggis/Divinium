// Funktion zum Laden der Götter
async function loadGods() {
  const gods = [
    {
      name: "Anarok",
      file: "Anarok.md",
      image: "images/anarok.png"
    },
    {
      name: "Dormar",
      file: "Dormar.md",
      image: "images/dormar.png"
    },
    {
      name: "Elyra",
      file: "Elyra.md",
      image: "images/elyra.png"
    },
    {
      name: "Ignara",
      file: "Ignara.md",
      image: "images/ignara.png"
    },
    {
      name: "Korrum",
      file: "Korrum.md",
      image: "images/korrum.png"
    },
    {
      name: "Luminara",
      file: "Luminara.md",
      image: "images/luminara.png"
    },
    {
      name: "Nilara",
      file: "Nilara.md",
      image: "images/nilara.png"
    },
    {
      name: "Pandora",
      file: "Pandora.md",
      image: "images/pandora.png"
    },
    {
      name: "Regalis",
      file: "Regalis.md",
      image: "images/regalis.png"
    },
    {
      name: "Terrana",
      file: "Terrana.md",
      image: "images/terrana.png"
    },
    {
      name: "Umbra",
      file: "Umbra.md",
      image: "images/umbra.png"
    },
    {
      name: "Virak",
      file: "Virak.md",
      image: "images/virak.png"
    },
    // Weitere Götter hinzufügen...
  ];

  const godListContainer = document.getElementById("god-list");

  gods.forEach(god => {
    const godDiv = document.createElement("div");
    godDiv.className = "god-card";

    const img = document.createElement("img");
    img.src = god.image;
    img.alt = god.name;
    godDiv.appendChild(img);

    const godName = document.createElement("strong");
    godName.textContent = god.name;
    godDiv.appendChild(godName);

    const godButton = document.createElement("button");
    godButton.textContent = "Mehr erfahren";
    godButton.onclick = () => loadWiki(god.file);
    godDiv.appendChild(godButton);

    godListContainer.appendChild(godDiv);
  });
}

// Beim Laden der Seite die Götter einfügen
window.onload = function() {
  loadGods();
}
