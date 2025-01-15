document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('results');
    const loading = document.getElementById('loading');
    const watchlistForm = document.getElementById('watchlistForm');
    const titlesInput = document.getElementById('titlesInput');
    const episodesInput = document.getElementById('episodesInput');
    const scoresInput = document.getElementById('scoresInput');
    const durationsInput = document.getElementById('durationsInput');
    const imagesInput = document.getElementById('imagesInput');

    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const year = document.getElementById('year').value;
        const season = document.getElementById('season').value;
        const category = document.getElementById('category').value;
        const url = `https://myanimelist.p.rapidapi.com/v2/anime/seasonal?year=${year}&season=${season}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2936d62a08mshec10fc0e5e2afb2p1ba14bjsn82935e8bd63b',
                'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
            }
        };

        // Show loading screen
        loading.style.display = 'block';
        resultsContainer.innerHTML = '';

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result); 
            displayResults(result, category);
        } catch (error) {
            console.error(error);
        } finally {
            // Hide loading screen
            loading.style.display = 'none';
        }
    });

    function displayResults(result, category) {
        resultsContainer.innerHTML = '';
        console.log(result); // Debugging: Log the result to check the response structure

        if (result[category]) {
            result[category].forEach(anime => {
                const animeItem = document.createElement('div');
                animeItem.classList.add('anime-item');

                const title = document.createElement('h3');
                title.textContent = anime.title;

                const score = document.createElement('p');
                score.textContent = `Score: ${anime.score}`;

                const duration = document.createElement('p');
                duration.textContent = `Duration: ${anime.duration}`;

                const imageUrl = document.createElement('img');
                imageUrl.src = anime.image_url;

                const episodes = document.createElement('p');
                episodes.textContent = `Episodes: ${anime.episodes}`;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'anime';
                checkbox.value = anime.title;
                checkbox.dataset.episodes = anime.episodes;
                checkbox.dataset.score = anime.score;
                checkbox.dataset.duration = anime.duration;
                checkbox.dataset.image = anime.image_url;
                const checkboxLabel = document.createElement('label');
                checkboxLabel.textContent = ' Add to Watchlist';

                if (watchlistTitles.includes(anime.title)) {
                    checkbox.checked = true;
                    checkboxLabel.textContent = ' Added';
                    animeItem.classList.add('highlighted');
                }

                animeItem.appendChild(title);
                animeItem.appendChild(episodes);
                animeItem.appendChild(score);
                animeItem.appendChild(duration);
                animeItem.appendChild(imageUrl);
                animeItem.appendChild(checkbox);
                animeItem.appendChild(checkboxLabel);

                resultsContainer.appendChild(animeItem);
            });
        } else {
            console.log(`No data found for category: ${category}`); // Debugging: Log if no data found for category
        }
    }

    watchlistForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedAnimes = [];
        const selectedEpisodes = [];
        const selectedScores = [];
        const selectedDurations = [];
        const selectedImages = [];
        const checkboxes = document.querySelectorAll('input[name="anime"]:checked');
        checkboxes.forEach(checkbox => {
            selectedAnimes.push(checkbox.value);
            selectedEpisodes.push(checkbox.dataset.episodes);
            selectedScores.push(checkbox.dataset.score);
            selectedDurations.push(checkbox.dataset.duration);
            selectedImages.push(checkbox.dataset.image);
        });
        titlesInput.value = selectedAnimes.join(',');
        episodesInput.value = selectedEpisodes.join(',');
        scoresInput.value = selectedScores.join(',');
        durationsInput.value = selectedDurations.join(',');
        imagesInput.value = selectedImages.join(',');

        // Change the text of the checkboxes to "Added"
        checkboxes.forEach(checkbox => {
            const label = checkbox.nextElementSibling;
            label.textContent = ' Added';
        });

        // Show a message to the user after adding items to the watchlist
        const message = document.createElement('p');
        message.textContent = 'Added to watchlist! Search for more?';
        resultsContainer.appendChild(message);

        // Submit the form
        watchlistForm.submit();
    });
});