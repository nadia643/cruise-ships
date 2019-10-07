function ship(startingPort, setSail) {
  this.startingPort = 'Dover';
  this.setSail = function () {
    this.startingPort = null;
  };
}

module.exports = ship;
