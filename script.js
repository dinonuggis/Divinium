// Funktion zum Laden der Götter
async function loadGods() {
  const gods = [
    {
      name: "Anarok",
      file: "anarok.md",
      image: "images/anarok.png"
    },
    {
      name: "Dormar",
      file: "dormar.md",
      image: "images/dormar.png"
    }
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
