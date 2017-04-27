var searchDB = require('./database/Find.js')

function printLibrary() { // library button
		searchDB.printAll(sortArrayby, "title")
}
printLibrary