let { expect } = require('chai');
let { describe, it } = require('mocha');

//Get email lists with different distributions of duplicates
const lists = require('../list');

//Get all dedupe methods
const dedupe = require('../methods');

//For each email list
lists.names.forEach((listName) => {

	//For each dedupe method
	dedupe.names.forEach((dedupeName) => {

		//Get the current time
		const systemTime = process.hrtime();

		//Generate a unique list using the current list + method
		const result = dedupe[dedupeName](lists[listName]);

		//Calculate how long the method took
		const duration = process.hrtime(systemTime);

		describe(`${dedupeName} + ${listName}`, () => {

			//Make sure the output is correct
			it('should produce unique output', () => {

				expect(result.length).to.equal(50000);

				if(listName !== 'shuffled') {

					expect(result).to.eql(lists.control);

				}

			});
			
			//Make sure the method returned in less than one second
			it('should take less than one second to execute', () => {

				expect(duration[0]).to.be.below(1);

			});

		});

	});

});