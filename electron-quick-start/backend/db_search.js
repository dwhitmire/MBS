function contains(input) {
    // case insensitive contains clause
    var output = new RegExp(input, "i"); 
    return output
}

 module.exports.contains = contains