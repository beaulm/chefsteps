module.exports = {
	forLoop: (randomArray) => {
		let tmpArray = [];
		for(let i=0; i<randomArray.length; i++) {
			if(tmpArray.indexOf(randomArray[i]) === -1) {
				tmpArray.push(randomArray[i]);
			}
		}
		return tmpArray;
	},

	arrayFilter: (randomArray) => randomArray.filter((value, index, self) => self.indexOf(value) === index),

	arrayToObject: (randomArray) => {
		let hash = {};
		for(let i=0, end=randomArray.length; i<end; i++) {
			hash[randomArray[i]] = true;
		}
		return Object.keys(hash);
	},

	es6Set: (randomArray) => [...new Set(randomArray)],

    names: ['forLoop', 'arrayFilter', 'arrayToObject', 'es6Set']
}
