# AnimeRecommendations

AnimeRecommendations is a web application that allows users to search for anime, view details, and manage their watchlist. The project is built using Django for the backend and HTML, CSS, and vanilla JavaScript for the frontend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technical Details](#technical-details)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/AnimeRecommendations.git
    cd AnimeRecommendations
    ```

2. **Create a virtual environment and activate it:**
    ```sh
    python -m venv myenv
    source myenv/bin/activate  # On Windows use `myenv\Scripts\activate`
    ```

3. **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4. **Apply migrations:**
    ```sh
    python manage.py migrate
    ```

5. **Run the development server:**
    ```sh
    python manage.py runserver
    ```

6. **Open your browser and navigate to `http://127.0.0.1:8000/`.**

## Usage

Once the server is running, you can use the application to:

- **Search Anime:** Search anime by year and season  to find anime.
- **View Details:** Views anime  detailes information including title, score, duration, and episodes.
- **Add to Watchlist:** Add anime to your personal watchlist for future reference.
- **Delete Anime** :**Delete anime from your watchlist.

## Features

- **User Authentication:** Users can register, log in, and manage their accounts.
- **Anime Search:** Search for anime  by year and season.
- **Anime Details:** View detailed information about each anime.
- **Watchlist Management:** Add and remove anime from your watchlist.

## Technical Details

- **Backend**: The backend is built using Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **Frontend**: The frontend is built using vanilla JavaScript for dynamic interactions and updates.
- **API Integration**: The application integrates with an external anime API to fetch anime data. The API is called from the backend, and the data is processed and sent to the frontend for display.
- **User Authentication**: Users can register, log in, and manage their accounts. Authentication is handled using Django's built-in authentication system.
- **Database**: The application uses SQLite as the database to store user information, watchlist data, and other necessary information.

## Project Structure

- **AnimeRecommendations**: Main project directory
  - **AnimeRecommendations/**: Contains project settings, URLs, and views
    - `__init__.py`: Initializes the package
    - `asgi.py`: ASGI configuration for deployment
    - `forms.py`: Forms for user authentication and other functionalities
    - `settings.py`: Project settings
    - `urls.py`: URL routing for the project
    - `views.py`: Views for handling user authentication and main page
    - `wsgi.py`: WSGI configuration for deployment
  - **static/**: Contains static files (CSS, JavaScript)
    - `css/`: CSS files
    - `images/`: Image files
    - `js/`: JavaScript files
  - **templates/**: Contains HTML templates
    - `index.html`: Main page template
    - `login.html`: Login page template
    - `registration.html`: Registration page template
    - `watchlist.html`: Watchlist page template
  - **WatchList/**: Contains the watchlist-related models, views, and templates
    - `__init__.py`: Initializes the app package
    - `admin.py`: Admin configuration for the WatchList model
    - `apps.py`: Application configuration
    - `forms.py`: Forms for watchlist creation and update
    - `migrations/`: Database migrations
    - `models.py`: WatchList model definition
    - `tests.py`: Unit tests for the WatchList app
    - `views.py`: Views for handling watchlist-related requests
  - `manage.py`: Django's command-line utility for administrative tasks
  - `db.sqlite3`: SQLite database file

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the repository:**
    ```sh
    git fork https://github.com/yourusername/AnimeRecommendations.git
    ```

2. **Create your feature branch:**
    ```sh
    git checkout -b feature/YourFeature
    ```

3. **Commit your changes:**
    ```sh
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**
    ```sh
    git push origin feature/YourFeature
    ```

5. **Open a pull request.**
