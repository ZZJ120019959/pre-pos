'use strict';

function countSameElements(collection) {
  let ret = [];

  collection.forEach(function (e) {
    let pos = ret.findIndex(function (f) {
      return f.key === e;
    });
    if (pos === -1) {
      if (e.match('-')) {
        let col = e.split('-');
        ret.push({key: col[0], count: Number(col[1])});
      }
      else {
        ret.push({key: e, count: 1});
      }
    } else {
      ret[pos].count++;
    }
  });

  return ret;
}
