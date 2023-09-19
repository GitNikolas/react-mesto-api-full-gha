class Api {
  constructor(options) {
    this.options = options;
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _handleResponse(res){
    if(res.ok){
      return res.json()
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: getHeaders(),
    })
    .then(this._handleResponse)
  }

  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      headers: getHeaders()
    })
    .then(this._handleResponse)
  }

  setInitialCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    .then(this._handleResponse)
  }

  setUserInformation(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then(this._handleResponse)

  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(this._handleResponse)
  }

  handleLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      method: 'PUT',
      headers: getHeaders()
    })
    .then(this._handleResponse)
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      method: 'DELETE',
      headers: getHeaders()
    })
    .then(this._handleResponse)
  }

  deleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    .then(this._handleResponse)
  }
}

const getHeaders = () => {
  const token = localStorage.getItem('jwt');
  return {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

const api = new Api({
  baseUrl: 'https://api.projectMesto.gitNik.nomoredomainsicu.ru',
  headers: getHeaders(),
});

export default api;
