const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const resultsList = document.getElementById('results-list');

const content = [
    { title: 'Episodio 1 - El Comienzo (Temporada 1)', link: 'episodes/season1/episode1.html' },
    { title: 'Episodio 2 - Continuación (Temporada 1)', link: 'episodes/season1/episode2.html' },
    { title: 'Episodio 3 - Desafío (Temporada 1)', link: 'episodes/season1/episode3.html' },
    { title: 'Episodio 4 - Final (Temporada 1)', link: 'episodes/season1/episode4.html' },
    { title: 'Episodio 1 - Nuevo Comienzo (Temporada 2)', link: 'episodes/season2/episode1.html' },
    { title: 'Episodio 2 - El Regreso (Temporada 2)', link: 'episodes/season2/episode2.html' },
    { title: 'Película 1 - El Ataque del Ogre', link: 'movies/movie1.html' },
    { title: 'Película 2 - La Leyenda de Saikyou', link: 'movies/movie2.html' }
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = content.filter(item => item.title.toLowerCase().includes(query));
    resultsList.innerHTML = filtered.map(item => <li><a href="${item.link}">${item.title}</a></li>).join('');
    searchResults.style.display = filtered.length ? 'block' : 'none';
});