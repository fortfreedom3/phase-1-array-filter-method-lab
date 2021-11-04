// Code your solution here

function findMatching(listOfDrivers, name) {
    return listOfDrivers.filter((drivers) => (drivers.toLowerCase() === name.toLowerCase()))
}

function fuzzyMatch(listOfDrivers,letters) {
    
    return listOfDrivers.filter((drivers) => drivers.toLowerCase().indexOf(letters.toLowerCase()) === 0)
}


function matchName(listOfDrivers, string) {

    return listOfDrivers.filter( (listOfDrivers) => listOfDrivers.name === string)
}


console.log(matchName(drivers, 'Bobby'))