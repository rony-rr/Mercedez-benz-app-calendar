
const fetchPost = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.warn(error);
  }
}

const fetchGet = async (url, token) => {

  try {
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+token
      }
    });
  const responseJson = await response.json();
  return responseJson;
} catch (error) {
  console.warn(error);
}
}


const fetchHook = {
  fetchPost,
  fetchGet
};


export default fetchHook;