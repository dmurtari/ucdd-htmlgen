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
    for (var element in arrayOfText) {
        row += ("<td>" + arrayOfText[element] + "</td>")
    }
    row += "</tr>"

    return row
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    table = "<table>"
    for (var row in twoDimensionalArrayOfText) {
        table += lib.generateTableRow(twoDimensionalArrayOfText[row])
    }
    table += "</table>"

    return table
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
    dropdown = "<select>"
    for (var i = 0; i < arrayOfValues.length; i++) {
        dropdown += ('<option value="' + arrayOfValues[i] + '">' + arrayOfText[i]
                     + '</option>')
    };
    dropdown += "</select>"

    return dropdown
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    embeddable = '<iframe width="'
    var fullscreen = allowfullscreen ? 'allowfullscreen' : '' 

    embeddable += (width + '" height=' + height + '" src="//www.youtube.com/embed/'
                   + videoId + '" ' + fullscreen + "</iframe>")

    return embeddable
}

module.exports = lib
