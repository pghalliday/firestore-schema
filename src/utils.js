import {resolve} from 'path';

function resolveRequire(path) {
  if (path.startsWith('.')) {
    return resolve(path);
  }
  return path;
}

export function requires(paths, req = require) {
  if (paths) {
    if (typeof paths === 'string') {
      req(resolveRequire(paths));
    } else {
      paths.forEach((path) => {
        req(resolveRequire(path));
      });
    }
  }
}

export function entry(entry, req = require) {
  if (typeof entry === 'object') {
    if (entry.export) {
      return req(resolveRequire(entry.path))[entry.export];
    }
    return req(resolveRequire(entry.path));
  }
  return req(resolveRequire(entry));
}
