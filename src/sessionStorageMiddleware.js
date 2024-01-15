// middleware/sessionStorageMiddleware.js
const sessionStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Save the entire state to session storage after each action
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()));

  return result;
};

export default sessionStorageMiddleware;
