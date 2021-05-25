function findMatching(drivers, name){
    const newDriversArray = drivers.filter(string => string.toLowerCase() === name.toLowerCase())
    return newDriversArray
}
function fuzzyMatch(drivers, name){
    const newDriversArray = drivers.filter(string => string.charAt(0) === name.charAt(0))
    return newDriversArray
}
function matchName(drivers, name){
    const newDriversArray = drivers.filter(drivers => drivers.name === name)
    return newDriversArray
}





//matchName - This function takes an array of driver objects and a string 
//as arguments. Each driver object has two properties: name and hometown.
// The function should return each element whose name property matches the 
//provided string argument.

