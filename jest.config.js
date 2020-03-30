// Para obtener el coverage report --> npm test -- --coverage --watchAll=false

module.exports = {
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  collectCoverageFrom: [
    'json',
    'html',
    'lcov'
  ],
};
