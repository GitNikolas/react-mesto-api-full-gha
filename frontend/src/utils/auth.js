export const baseUrl = 'https://api.projectMesto.gitNik.nomoredomainsicu.ru';

export function register(password, email) {
  return fetch(`${baseUrl}/signup`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  .then( (res) => {
    if(res.ok){
      return res.json();
    } else {
      throw new Error(`Произошла ошибка регистрации: ${res.status} ${res.statusText}`)
    }
  })
}

export function login(password, email) {
  return fetch(`${baseUrl}/signin`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then( (res) => {
    return res.json();
  })
}

export function checkToken(jwt) {
  return fetch(`${baseUrl}/users/me`, {
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
  })
  .then( (res) => {
    return res.json();
  })
}
