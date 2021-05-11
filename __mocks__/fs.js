const fs = jest.genMockFromModule('fs');
const _fs = jest.requireActual('fs');

Object.assign(fs, _fs);

let readMocks = {};

fs.setReadFileMock = (path, error, data) => {
  readMocks[path] = [error, data];
}

fs.readFile = (path, options, callback) => {
  if (path in readMocks) {
    callback(...readMocks[path]);
  } else {
    _fs.readFile(path, option, callback);
  }
}

let writeMocks = {};

fs.setWriteFileMock = (path, fn) => {
  writeMocks[path] = fn;
}

fs.writeFile = (path, data, callback) => {
  if (path in writeMocks) {
    writeMocks[path](path, data, callback)
  } else {
    _fs.writeFile(path, data, callback)
  }
}

fs.clearMocks = () => {
  readMocks = {}
  writeMocks = {}
}

module.exports = fs;