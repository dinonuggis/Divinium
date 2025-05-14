
const chapterDir = 'chapters/';
const chapters = ['kapitel1.md'];

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

function loadMarkdown(path, targetId) {
  fetch(path)
    .then(response => response.text())
    .then(md => {
      document.getElementById(targetId).innerHTML = marked.parse(md);
    })
    .catch(() => {
      document.getElementById(targetId).innerHTML = "<p>Fehler beim Laden.</p>";
    });
}

function loadWiki(file) {
  loadMarkdown('wiki/' + file, 'wiki-content');
}

window.onload = () => {
  const list = document.getElementById('chapter-list');
  chapters.forEach(chapter => {
    const btn = document.createElement('button');
    btn.textContent = chapter.replace('.md', '');
    btn.onclick = () => loadMarkdown(chapterDir + chapter, 'chapter-content');
    list.appendChild(btn);
  });
};
