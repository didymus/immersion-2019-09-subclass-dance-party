const makeXKeyscoreDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="xkeyscore" src="src/whitecircle.png">');
  //makeDancer.apply(this, arguments);
};

//import makeDancer superclass methods
makeXKeyscoreDancer.prototype = Object.create(makeDancer.prototype);
//reset constructor
makeXKeyscoreDancer.prototype.constructor = makeXKeyscoreDancer;

makeXKeyscoreDancer.prototype.step = function(timeBetweenSteps) {
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

window.makeXKeyscoreDancer = makeXKeyscoreDancer;
