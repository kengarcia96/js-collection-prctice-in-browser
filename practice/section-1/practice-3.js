'use strict';

function collectSameElements(collectionA, objectB) {
  // return 'Implement the practice require, and begin changing code in this row';

 var commons = [];
  for (let a=0; a < collectionA.length; a++)
  {
  		for (let b=0; b < objectB["value"].length; b++)
  		{ 
  			if (collectionA[a] === objectB["value"][b]){
  				commons.push(collectionA[a]);
  			} 	
  		}
  }

  return commons;
}
