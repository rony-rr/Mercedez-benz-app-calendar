const fetchPost = async (url, data, token) => {
  try {
    let headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
    } else {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.warn(error);
    return "error";
  }
};

const fetchGet = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.warn(error);
    return "error";
  }
};

const fetchPut = async (url, token) => {
  try {
    let headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
    } else {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.warn(error);
    return "error";
  }
};

const fetchDelete = async (url, token) => {
  try {
    let headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers,
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.warn(error);
    return "error";
  }
};

const fetchHook = {
  fetchPost,
  fetchGet,
  fetchPut,
  fetchDelete,
};

export default fetchHook;
