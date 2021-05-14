module.exports = {
    collectCoverage: true,
    "moduleNameMapper": {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"]
}