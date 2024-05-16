module.exports = {
    collectCoverage: true,
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    testEnvironment: 'jest-environment-jsdom'
}