module.exports = {
	forLoop: (randomArray) => {
		let hash = {};
		let tmpArray = [];
		for(let i=0, end=randomArray.length; i<end; i++) {
			if(!hash.hasOwnProperty(randomArray[i])) {
				tmpArray.push(randomArray[i]);
				hash[randomArray[i]] = true;
			}
		}
		return tmpArray;
	},

	arrayToObject: (randomArray) => {
		let hash = {};
		for(let i=0, end=randomArray.length; i<end; i++) {
			hash[randomArray[i]] = true;
		}
		return Object.keys(hash);
	},

	es6Set: (randomArray) => [...new Set(randomArray)],

	names: ['forLoop', 'arrayToObject', 'es6Set']
}
