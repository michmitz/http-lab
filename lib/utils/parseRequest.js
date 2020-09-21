module.exports = rawRequest => {
  let request = {};
  const parsedMethod = rawRequest.toString().split('\n')[0].split(' ')[0];
  const parsedPath = rawRequest.toString().split('\n')[0].split(' ')[1];
  const headerBody = rawRequest.toString().split('\n');

  headerBody.includes('')
    ?
    request = {
      method: parsedMethod,
      path: parsedPath,
      body: headerBody.pop() 
    }
    :
    request = {
      method: parsedMethod,
      path: parsedPath
    };
    
  return request;
};


