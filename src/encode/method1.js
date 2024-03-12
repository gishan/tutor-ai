const findIntent = (intent, slide) => {
  // Decode slide.boxes
  // Find in the decoded array all the sequenses of words equal to the intent.proximity_sentence
  /* In the above example:
   * [
   *  {"word": "The","confidence": 78,"x_start": 89,"y_start": 259,"x_end": 117,"y_end": 272},
   *  {"word": "digit","confidence": 87,"x_start": 122,"y_start": 259,"x_end": 155,"y_end": 275},
   *  {"word": "in","confidence": 91,"x_start": 161,"y_start": 259,"x_end": 173,"y_end": 272},
   *  {"word": "the","confidence": 90,"x_start": 178,"y_start": 259,"x_end": 202,"y_end": 272},
   *  {"word": "tens","confidence": 86,"x_start": 207,"y_start": 261,"x_end": 239,"y_end": 272},
   *  {"word": "place","confidence": 85,"x_start": 245,"y_start": 259,"x_end": 283,"y_end": 275},
   *	{"word": "is","confidence": 62,"x_start": 289,"y_start": 259,"x_end": 300,"y_end": 272}
   * ]
   */
  // If more than one instance is found, get the intent.proximity_index sequence in the array
  // Return the last element identified by the proximity_related_to array.
  // In the above example the function should return {x: 300, y: 259}

  if (typeof intent.proximity_sentence !== 'string') {
    throw new Error('intent.proximity_sentence is not a string');
  }

  const parts = intent.proximity_sentence.split(' ');
  console.log(parts);

  if (parts[0] === '') {
    throw new Error('intent.proximity_sentence is an empty string');
  }

  // slide string to json
  if (typeof slide.boxes !== 'string') {
    throw new Error('slide.boxes is not an empty string');
  }

  const jsonBoxes = JSON.parse(slide.boxes);

  // if (
  //   jsonBoxes === undefined ||
  //   jsonBoxes === null ||
  //   jsonBoxes.constructor !== Array
  // ) {
  //   throw new Error('jsonBoxes in not an array');
  // }

  const { list } = jsonBoxes.reduce(
    (prev, curr, index) => {
      if (curr.word === parts[prev.index]) {
        if (prev.index === 0) {
          prev.matches = index;
          prev.list = { ...prev.list, [prev.matches]: [curr] };
        } else {
          prev.list = {
            ...prev.list,
            [prev.matches]: [...prev.list[prev.matches], curr],
          };
        }
        prev.index++;
      } else {
        prev.index = 0;
      }
      return prev;
    },
    { list: {}, index: 0, matches: 0 }
  );

  const listWithExactMatches = Object.values(list).filter(
    (el) => el.length === parts.length
  );

  console.log(list);

  // const pickedList = listWithExactMatches;

  console.log(listWithExactMatches);
};

export default findIntent;
