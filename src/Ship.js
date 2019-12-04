const Port = require('../src/Port.js');

function ship(currentPort, setSail) {
  this.currentPort = Port;
  this.setSail = function () {
    this.currentPort = null;
  },
  dock(port) {
   this.currentPort = port; 
  },
};

module.exports = ship;