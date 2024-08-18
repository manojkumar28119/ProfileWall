# User Profile Creation and Display with Location-Based Sorting

This project allows users to create and display profiles, sorted by location, using a React front-end and an Express.js back-end with an SQLite database.



## Project Overview

This application allows users to create profiles, which are stored in an SQLite database. The profiles can be displayed and sorted by location in a React application. Features include input validation, pagination, and the ability to view profiles sorted by location.

## Features

- **Profile Creation:** Form to input and submit new user profiles.
- **Profile Storage:** Profiles are saved in an SQLite database.
- **Location-Based Sorting:** Profiles are displayed sorted by location.
- **Pagination:** Handles large numbers of profiles efficiently.
- **Input Validation:** Ensures form fields are correctly filled out.
- **Dummy Data:** Includes 10 pre-loaded dummy users for testing.

## Technologies Used

- **Front-End:** React.js
- **Back-End:** Node.js, Express.js
- **Database:** SQLite
- **Deployment:** Render (for backend)
- **Styling:** Bootstrap (for CSS)

## API Endpoints

### 1. `POST /createprofile`

- **Description:** Creates a new user profile.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "location": "New York",
    "profession": "Software Engineer"
  }
