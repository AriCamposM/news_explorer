export const BASE_URL = 'https://api.arinews.utdnews.com';

export const register = ( password, email, name ) => {
    return fetch(`${BASE_URL}/signup`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email":email,
            "name": name, })
    })
    .then((res) => {
        if(!res.ok){
            return {error: true};
        }
        return res.json();
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(`Error : ${err}`)
        return { error: true } ;
    })
}

export const authorize = ( password, email ) => {
    return fetch(`${BASE_URL}/signin`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email":email })
    })
    .then((res => res.json()))
    .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
    })
      .catch(err => console.log(err))
};


export const checkToken = ( token ) => {
    return fetch(`${BASE_URL}/users/me`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Token no válido');
        }
        return res.json();
    })
    .then(data => data)
}


export const saveArticle = (token, { keyword, title, description, date, source, url, urlToImage }) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      keyword: keyword,
      title: title,
      description: description,
      date: date,
      source: source,
      url: url,
      urlToImage: urlToImage,
    })
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  })
  .catch(err => {
    console.error(`Error: ${err}`);
    return { error: true };
  });
}


export const unSaveArticle = ( token, articleId ) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method:'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  })
  .catch(err => {
    console.error(`Error: ${err}`);
    return { error: true };
  });

}

export const getArticles = (token) =>{
  return fetch(`${BASE_URL}/articles`, {
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  })
  .catch(err => {
    console.error(`Error: ${err}`);
    return { error: true };
  });
}