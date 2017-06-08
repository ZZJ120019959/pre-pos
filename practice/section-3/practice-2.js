'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let wordsList =[];
  collectionA.forEach((item)=>{
    wordsList.push(item.key);
  });
  objectB.value.forEach((item)=>{
    if( collectionA[wordsList.indexOf(item)].count >= 3 )//满3减1，有几个3就减几个1
      collectionA[wordsList.indexOf(item)].count-=parseInt((collectionA[wordsList.indexOf(item)].count/3));
  })
  return collectionA;
}
