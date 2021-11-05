
const fetchPost = async (url,data) => {
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

const fetchHook = {
  fetchPost
};


export default fetchHook;