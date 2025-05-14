// Funktion zum Umschalten zwischen den Sektionen
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');
  
  document.getElementById(sectionId).style.display = 'block';
}

// Funktion zum Laden der Kategorien
async function loadCategories() {
  const categories = ['goetter', 'reiche', 'kreaturen']; // Liste aller Kategorien
  const categoryList = document.getElementById('category-list');

  categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-card';
    
    const categoryTitle = document.createElement('strong');
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categoryDiv.appendChild(categoryTitle);
    
    // Kategorie-Buttons für jeden Unterpunkt
    loadCategoryItems(category, categoryDiv);
    categoryList.appendChild(categoryDiv);
  });
}

// Funktion zum Laden der Unterpunkte einer Kategorie (z.B. Götter, Reiche, etc.)
async function loadCategoryItems(category, categoryDiv) {
  const res = await fetch(`/categories/${category}/index.json`); // index.json mit den .md-Dateien der Unterpunkte
  const items = await res.json();

  const buttonContainer = document.createElement('div');
  items.forEach(item => {
    const itemButton = document.createElement('button');
    itemButton.textContent = item.name;
    itemButton.onclick = () => loadWiki(`${category}/${item.file}`);
    buttonContainer.appendChild(itemButton);
  });

  categoryDiv.appendChild(buttonContainer);
}

// Funktion zum Laden der Inhalte aus einer Markdown-Datei
async function loadWiki(fileName) {
  const res = await fetch(`/categories/${fileName}`);
  const text = await res.text();
  document.getElementById('wiki-content').innerHTML = marked(text);
}

// Lade die Kategorien nach dem Laden der Seite
window.onload = function() {
  loadCategories();
}
