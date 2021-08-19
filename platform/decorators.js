/**
 * @file decorators
 * @author David
 * @date 2020-05-04
 */

// handleErrorAsync : Error -> (* -> *) | (* -> Promise *) -> (* -> Promise *)
const handleErrorAsync = func => async (...args) => {
  try {
    return await func(...args);
  } catch (error) {
    const wrappedError = new ErrorType(error.message, error.stack);
    throw wrappedError;
  }
};

const handleError = func => (...args) => {
  try {
    return func(...args);
  } catch (error) {
    const wrappedError = new ErrorType(error.message, error.stack);
    throw wrappedError;
  }
};

export { handleError, handleErrorAsync };


// handleError : Error -> (* -> *) -> (* -> *)
function handleError(ErrorType) {
  function decorator(func) {
    function wrapper(...args) {
      try {
        return func(...args);
      } catch (error) {
        const wrappedError = new ErrorType(error.message, error.stack);
        throw wrappedError;
      }
    }
    return wrapper;
  }
  return decorator;
}

export { handleError, handleErrorAsync };
