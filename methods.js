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

	es6Set: (randomArray) => [...new Set(randomArray)],

	names: ['forLoop', 'es6Set']
}
