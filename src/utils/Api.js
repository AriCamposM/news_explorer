class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Método privado para manejar la respuesta
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Método para buscar noticias por palabra clave
  searchNewsByKeyword(keyword) {
    const apiKey = '966515feb1f5464eaa0496a1264dd09d'; // Coloca aquí tu clave de API de NewsAPI
    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    // Formateo de las fechas a 'YYYY-MM-DD'
    const fromDate = sevenDaysAgo.toISOString().split('T')[0];
    const toDate = currentDate.toISOString().split('T')[0];

    // Construcción del URL de la solicitud con los parámetros
    const url = `${this._baseUrl}/everything?q=${encodeURIComponent(keyword)}&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${apiKey}`;

    // Realiza la solicitud y maneja la respuesta
    return fetch(url, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._handleResponse)
    .catch(error => console.error('Error fetching news:', error));
  }
}

const api = new Api({
  baseUrl: 'https://newsapi.org/v2'
});

export default api;