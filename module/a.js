// Module A
/*var b = require("./b");

module.exports = {
    getThisName: function() {
        return b.getOtherModuleName();
    },
    getOtherModuleName: function() {
        return b.getThisName();
    },
    name: "moduleA"
}*/

var b = require("./b");
var name = "moduleA";

function invokeFn () {
    console.log(b);
    return b.name;
}

exports.name = name;
exports.invokeFn = invokeFn;
