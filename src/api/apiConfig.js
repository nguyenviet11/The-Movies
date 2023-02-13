const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a44cced0c76f16a355dbd9e71afd5ed6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
