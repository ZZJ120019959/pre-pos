'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let wordsList =[];
  collectionA.forEach((item)=>{//将collectionA中的数据放到数组中
    wordsList.push(item.key);
  });
  objectB.value.forEach((item)=>{//看objectB中value的值是否跟数组中key的值一样，一样则-1
    collectionA[wordsList.indexOf(item)].count-=1;
  })
  return collectionA;
}
