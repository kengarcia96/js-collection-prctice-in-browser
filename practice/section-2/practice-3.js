'use strict';

function countSameElements(collection) {
  let letter = [];
  for (let a=0; a < collection.length; a++)
  {
	let newEntry = true;
	let checkedWord = checkString(collection[a]);  

  	for (let b=0; b < letter.length; b++){

	  	if (checkedWord[0] === letter[b].name){
	  		if (checkedWord.length > 1){
	  			letter[b].summary += parseInt(checkedWord[1]);
	  		}
	  		else{
	  			letter[b].summary++;
	  		}

	  		newEntry = false;
	  	}

  	}

	if(newEntry === true){
		letter.push({name: checkedWord[0], summary: checkedWord[1] == null ? 1 : parseInt(checkedWord[1])}); 
	}


	console.log(letter);
	
  }

return letter;
}


function checkString(toCheck){
	let final;
	let checkColon = toCheck.includes(":");
	let checkDash = toCheck.includes("-"); 
	let checkBracket = toCheck.includes("["); 

	if (checkColon === true){
		final = toCheck.split(":");
	}

	else if (checkDash === true){
		final = toCheck.split("-");
	}

	else if (checkBracket === true){
		final = toCheck.split("[");
	}

	else{
		return toCheck;
	}


	return final;

}