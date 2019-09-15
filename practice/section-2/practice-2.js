'use strict';

function countSameElements(collection) {
  let letter = [];
  for (let a=0; a < collection.length; a++)
  {
	let newEntry = true;

  	for (let b=0; b < letter.length; b++){
	  	if (collection[a] === letter[b].key){
	  		letter[b].count++;
	  		newEntry = false;
	  	}
  	}

	if(newEntry === true){
		let word = collection[a].split("-");
		letter.push({key: word[0], count: word[1] == null ? 1 : parseInt(word[1])}); 
	}

  }

	return letter;
}
