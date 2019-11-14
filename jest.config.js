module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/Tests/**/*.+(spec|test).(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
}
