'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for (let a=0; a<collectionA.length; a++){
		for (let b=0; b<objectB.value.length; b++){
			if (collectionA[a].key === objectB.value[b]){

				let variableCount= parseInt(collectionA[a].count / 3);
				collectionA[a].count -= variableCount;
			}
		}

	}

	return collectionA;
}
