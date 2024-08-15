import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDM3OGE5YjRhMzI4MWJlODk2MjhlMDQ3YzkyOGI3YSIsIm5iZiI6MTcyMzE1NjgwNy40NDQyNjcsInN1YiI6IjY2YWY1MDM4MzI2YWQ1N2NiMmMzN2FiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cukFyGHtXZzc6Bryu4qJnsS5vEjBAEJaykXBM3RXyhc",
  },
});

export default instance;
