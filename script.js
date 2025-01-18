const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const resultsList = document.getElementById('results-list');

const content = [
    // Temporada 1
    { title: 'Episodio 1 - El Comienzo (Temporada 1)', link: 'episodes/season1/episode1.html' },
    { title: 'Episodio 2 - Continuación (Temporada 1)', link: 'episodes/season1/episode2.html' },
    // Más episodios de Temporada 1
    // Temporada 2
    { title: 'Episodio 1 - Nuevo Desafío (Temporada 2)', link: 'episodes/season2/episode1.html' },
    { title: 'Episodio 2 - La Revancha (Temporada 2)', link: 'episodes/season2/episode2.html' },
    // Más episodios de Temporada 2
    // Películas
    { title: 'Película 1 - El Ataque del Ogre', link: 'movies/movie1.html' },
    { title: 'Película 2 - La Leyenda de Saikyou', link: 'movies/movie2.html' }
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = content.filter(item => item.title.toLowerCase().includes(query));
    resultsList.innerHTML = filtered.map(item => <li><a href="${item.link}">${item.title}</a></li>).join('');
    searchResults.style.display = filtered.length ? 'block' : 'none';
});
