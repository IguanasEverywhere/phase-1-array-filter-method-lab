// Code your solution here
function findMatching(arrOfNames, name) {
  let matchingNames = arrOfNames.filter((driverName) => driverName.toLowerCase() === name.toLowerCase());
  return matchingNames;
}

function fuzzyMatch(arrOfNames, prefix) {
  let prefixLength = prefix.length;
  let matchingNames = arrOfNames.filter((driverName) => {
    return driverName.slice(0, prefixLength) === prefix;
  });
  return matchingNames;
}

function matchName(arrOfDriverObjs, name) {
  let matchingObjs = arrOfDriverObjs.filter((driverObj) => {
    return driverObj.name === name;
  });
  return matchingObjs;
}

