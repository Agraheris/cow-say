const information = require(`./information.js`)

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${information.firstName} and my campus is in ${information.campus}`,
    e : "oO",
    T : "U "
}));