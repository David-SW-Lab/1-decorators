class PlatformError extends Error {
  constructor(message, errorStack) {
    super(message);
    this.stack = errorStack;
    this.name = this.constructor.name;
  }
}

export default PlatformError;
