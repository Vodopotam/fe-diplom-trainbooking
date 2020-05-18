export const getData = async (url, type = 'GET') => {
  const params = {};
  // if (type === 'POST') {
  //   params.body = JSON.stringify(body);
  //   params.headers = new Headers({ 'Content-Type': 'application/json' });
  //   params.method = 'POST';
  // }

  return await fetch(
    `https://netology-trainbooking.herokuapp.com/${url}`,
    params
  )
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .catch(err => console.log(err));
};
