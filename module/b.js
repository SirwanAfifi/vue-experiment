// Module B
/*var a = require("./a"); // {}

module.exports = {
    getThisName: function() {
        return "moduleB";
    },
    getOtherModuleName: function() {
        return a.name;
    }
}*/

var a = require("./a"); // {}
var name = "moduleB";


function invokeFn () {
    console.log(a);
    return a.name;
}

exports.name = name;
exports.invokeFn = invokeFn;