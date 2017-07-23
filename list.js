//Generate a list of 50,000 unique email addresses
let uniqueAddresses = [];
for(let i=0; i<50000; i++) {
	uniqueAddresses.push('chef'+i+'@chefsteps.com');
}

//Push the list of email addresses into an array twice (steps)
const steps = uniqueAddresses.concat(uniqueAddresses);

//Push the list of email addresses into an array, then reverse it and push it in again (pyramid)
const pyramid = uniqueAddresses.slice().concat(uniqueAddresses.slice().reverse());

//Create a list of email addresses where each address appears twice in a row (double)
let double = [];
for(let j=0, end=uniqueAddresses.length; j<end; j++) {
	double.push(uniqueAddresses[j]);
	double.push(uniqueAddresses[j]);
}

/**
* @desc knuthShuffle() Perform and in-place knuth shuffle on an array
*
* @param {array} [input] - Array of anything
*
* @return {array} - A shuffled version of the input array
*/
function knuthShuffle(input) {

  //Initialize a counter which represents the max index still unshuffled
  let i = input.length;

  //While there are still items to be shuffled
  while(i) {

	//Generate a random number which could be an index in the input array
	let j = Math.floor(Math.random() * i--);

	//Move the item at the randomly selected index to the end of the array
	let temp = input[j];
	input[j] = input[i];
	input[i] = temp;

  }

  return input;

}

//Create a list of email addresses where each address apepars twice, but in a random order (shuffled)
let shuffled = knuthShuffle(steps.slice());

module.exports = {
	control: uniqueAddresses,
	steps,
	pyramid,
	double,
	shuffled,
	names: ['steps', 'pyramid', 'double', 'shuffled']
}
