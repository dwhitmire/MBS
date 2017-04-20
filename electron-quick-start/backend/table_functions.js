function deleteRow(table, cell)
{
    var i=cell.parentNode.parentNode.rowIndex
    var x=document.getElementById(table)
    console.log(document.getElementById(table).rows[1].cells[0].innerHTML)

    // if only one entry left, replace with blank row
    if (document.getElementById(table).rows.length == 2)
    {
        // change target node
        var new_row = x.rows[1]
        new_row.cells[0].innerHTML = ''
        new_row.cells[1].innerHTML = ''
        new_row.cells[2].innerHTML = ''
        new_row.cells[3].innerHTML = ''
        new_row.cells[4].innerHTML = ''
        new_row.cells[5].innerHTML = ''
    }
    else {
        document.getElementById(table).deleteRow(i)
    } 
}

// known index
function deleteRowByIndex(table, index)
{
    var x=document.getElementById(table)
    console.log(index)

    // if only one entry left, replace with blank row
    if (document.getElementById(table).rows.length == 2)
    {
        // change target node
        var new_row = x.rows[1]
        new_row.cells[0].innerHTML = ''
        new_row.cells[1].innerHTML = ''
        new_row.cells[2].innerHTML = ''
        new_row.cells[3].innerHTML = ''
        new_row.cells[4].innerHTML = ''
        new_row.cells[5].innerHTML = ''
    }
    else {
        document.getElementById(table).deleteRow(index)
    } 
}

function deleteAllRows(table) {
    var x = document.getElementById(table)
    console.log(x.childElementCount)
    var count = x.childElementCount
    //for (var i = 1, row; row = x.rows[i]; i++) {
    for (var i = count-1; i != 0; i--) {
        console.log(i)
        deleteRowByIndex(table, i)
    }
}


function insertRow(table, title, year, rated, genre, director, actors)
{
    console.log(document.getElementById(table).rows[1])
    var x=document.getElementById(table)
    // deep clone the targeted row
    var new_row = x.rows[1].cloneNode(true)
    console.log(new_row)

    // update the row information
    new_row.cells[0].innerHTML = title
    new_row.cells[1].innerHTML = year
    new_row.cells[2].innerHTML = rated
    new_row.cells[3].innerHTML = genre
    new_row.cells[4].innerHTML = director
    new_row.cells[5].innerHTML = actors

    // append the new row to the table
    if (x.rows[1].cells[0].innerHTML == '') {
        console.log("replacing row")
        x.rows[1].replaceWith(new_row)
    }    
    else {
        console.log("appending row")
        // deep clone the targeted row
        var new_row = x.rows[1].cloneNode(true)
        console.log(new_row)

        // update the row information
        new_row.cells[0].innerHTML = title
        new_row.cells[1].innerHTML = year
        new_row.cells[2].innerHTML = rated
        new_row.cells[3].innerHTML = genre
        new_row.cells[4].innerHTML = director
        new_row.cells[5].innerHTML = actors
        x.appendChild( new_row )
    }
}

module.exports.deleteRow = deleteRow
module.exports.insertRow = insertRow
module.exports.deleteAllRows = deleteAllRows