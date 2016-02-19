// CHUNK into ARRAYS

var chunk = function(array, size){
	var result = []
		startAt = 0
		chunks = []
	
	var chunkSize = function(){
		var remainder = array.length % size
		for (var i = 0; i < size; i++){
			if (remainder > 0) {
				chunks.push((Math.round(array.length / size )) + 1)
			} else {
				chunks.push(Math.round(array.length / size ))
			}
			remainder -= 1
		}
	}()

	var chunk = chunks[0]

	for (var i = 0; i < size; i++){
		result.push(array.slice(startAt,chunk))	
		startAt += chunks[i]
		chunk = startAt + chunks[i+1]
	}

	return result

}

var shuffleArray = function(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var makeTeams = function(people, teams){

	peopleArray = []

	for (var i = 0; i < people; i++){
		peopleArray.push(i+1)
	}
	peopleArray = shuffleArray(peopleArray)

	return chunk(peopleArray, teams)

}

module.exports = {

	makeTeams : makeTeams


}