var puer = require('./puer')
var fixtures = require('./fixtures') 

$ = puer.html(fixtures.table)
$('table').should.exist()
$('chair').should.notExist()
$('td').should.haveExactly(4)
$('tr').should.haveExactly(3)
$('td').should.containTextAtIndex('January', 0)
$('td').should.containTextAtIndex('100', 1)
$('td').should.containTextInSequence(['January',100,'February','80'])

$ = puer.html(fixtures.orderedList)
$('li').should.haveExactly(3)
$('li').should.containTextInSequence(['item 1','item 2','item 3'])