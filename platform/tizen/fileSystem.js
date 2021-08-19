// createFile : String -> tizenFile -> Promise tizenFile
export const createDirectory = path =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`createDirectory : ${path}`);
    }, 1000);
  });

// createFile : String -> tizenFile -> Promise tizenFile
export const createFile = path =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`createFile : ${path}`);
    }, 1000);
  });

// getMacAddress : () -> String
export const getMacAddress = () =>
  Promise.reject({ message: `getMacAddress error` });
