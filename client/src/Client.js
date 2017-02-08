function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Upload the file to the server.
 * @param fileData
 */
function imageFileUpload(fileData) {
  // this represents a multipart/form-data type
  const formData = new FormData();
  formData.append('myfile', fileData);

  const options = {
    method: 'POST',
    body: formData,
  };

  fetch('/api/upload', options)
    .then(checkStatus);
}

/**
 * Post the editor contents in raw form to server.
 * @param rawContent
 */
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

const Client = { postNews, imageFileUpload };
export default Client;
