export const exerciseOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
   
    'X-RapidAPI-Key': 'f70ed4bc1emsh66fd3e7362a5b7cp184b57jsn09bf1480fcdc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
