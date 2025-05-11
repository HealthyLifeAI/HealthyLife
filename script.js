const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const links = sidebar.querySelectorAll('a');
const learnSection = document.getElementById('learn-section');
const articleContent = document.getElementById('article-content');
const chatSection = document.getElementById('chat-section');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  mainContent.classList.toggle('shifted');
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    showArticle(section);
  });
});

function showArticle(section) {
  chatSection.style.display = 'none';
  learnSection.style.display = 'block';
  articleContent.innerHTML = getArticle(section);
}

function getArticle(section) {
  const articles = {
    'nutrition': '<h2>Nutrition</h2><p>Eat a balanced diet rich in fruits, vegetables, and whole grains.</p>',
    'exercise': '<h2>Exercise</h2><p>Engage in at least 30 minutes of physical activity daily.</p>',
    'mental-health': '<h2>Mental Health</h2><p>Practice mindfulness, rest, and seek support when needed.</p>'
  };
  return articles[section] || '<p>Content not found.</p>';
}
