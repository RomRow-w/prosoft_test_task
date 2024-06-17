
async function fetchFilms(opt) {
  const resp = await fetch('http://185.185.69.80:8082/list', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(opt)
  })  
  return resp.json();
}

export default fetchFilms;