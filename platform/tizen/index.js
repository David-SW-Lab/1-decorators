import * as fs from "./fileSystem";
import { handleError, handleErrorAsync } from "../decorators";
import PlatformError from "../errors";

// createDirectory : String -> Promise tizenFile
export const createDirectory = handleErrorAsync(PlatformError)(path =>
  fs.createDirectory(path).catch(e => Promise.reject(e))
);

// createFile : String -> Promise tizenFile
export const createFile = handleErrorAsync(PlatformError)(path =>
  fs.createFile(path)
);

// getMacAddress : String -> Promise tizenFile
export const getMacAddress = handleErrorAsync(PlatformError)(() =>
  fs.getMacAddress()
);
