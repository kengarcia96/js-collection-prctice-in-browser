'use strict';

function collectSameElements(collectionA, collectionB) {
  //return 'Implement the practice require, and begin changing code in this row';


  var commons = [];
  for (let a=0; a < collectionA.length; a++)
  {
  	for (let b=0; b < collectionB.length; b++)
  	{
  		for (let c=0; c < collectionB[b].length; c++)
  		{

  			if (collectionA[a] === collectionB[b][c]){
  				commons.push(collectionA[a]);
  			} 	
  		}
  	}
  }

  return commons;
}
