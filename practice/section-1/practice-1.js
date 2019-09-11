'use strict';

function collectSameElements(collectionA, collectionB) {

  //return 'Implement the practice require, and begin changing code in this row';

  var commons = [];
  for (let a=0; a < collectionA.length; a++){
  	for (let b=0; b < collectionB.length; b++){

  		if (collectionA[a] === collectionB[b]){
  			commons.push(collectionA[a]);
  		} 	
  	}


  }

  return commons;

}
