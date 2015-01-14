var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
 	var myString = "<ol>";
 	for(var i = 0; i < arrayOfText.length; i++)
 	{
 		myString += "<li>" + arrayOfText[i] + "</li>";
 	}
 	myString += "</ol>";
 	return myString
}

lib.generateUnorderedList = function(arrayOfText) {
    var list = "<ul>"
    for (var i = 0; i < arrayOfText.length; i++) {
    	list += "<li>" + arrayOfText[i] + "</li>"
    }
    list += "</ul>"
    return list
}

lib.generateTableRow = function (arrayOfText) {
    row = "<tr>"
    for (element in arrayOfText) {
        row += ("<td>" + element + "</td>")
    }
    row += "</td>"

    return row
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) {
    return "<a href'" + url + "'>" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return '<input type="text" name="' + name + '">'
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return '<label>' + label + '</label> <input type="text" name="'+ name + '">'
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib
