var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
 
var SchemaTypes = mongoose.Schema.Types;
var mySchema = new Schema({ double: SchemaTypes.Double });
var Xaction = db.model('Xaction', mySchema);
 
var x = new Xaction({ double: 47758.00 });
 
x.save(function (err) {
  Xaction.findById(x, function (err, doc) {
    console.log(doc.double.value);
    doc.double.value += 484.134;
    doc.save(cb);
  });
});

x.double = 40;
console.log(x.double)       // { _bsontype: 'Double', value: 40 } 
console.log(x.double.value) // 40 
 
// or use `valueOf()` 
console.log(x.double.valueOf()) // 40 