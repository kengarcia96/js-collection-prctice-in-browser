'use strict';

function createUpdatedCollection(collectionA, objectB) {

  let letter = [];

  for (let a=0; a < collectionA.length; a++)
  {
	let newEntry = true;

  	for (let b=0; b < letter.length; b++){
	  	if (collectionA[a] === letter[b].key){
	  		letter[b].count++;
	  		newEntry = false;
	  	}
  	}

	if(newEntry === true){
		  letter.push({key: collectionA[a], count: 1}); 
	}

  }

  for (let c=0; c<letter.length; c++){
  	for (let d=0; d<objectB.value.length; d++){
			if (letter[c].key === objectB.value[d]){

			let variableCount= parseInt(letter[c].count / 3);
			letter[c].count -= variableCount;
		}
  	}
  }

  return letter;

}
