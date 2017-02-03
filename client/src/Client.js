function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// post the news from the ContentEditor component
function postNews(rawContent) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(rawContent),  // converts it to JSON string for you
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return fetch('/api/news/post', options)
    .then(checkStatus);
}

const Client = { postNews };
export default Client;
