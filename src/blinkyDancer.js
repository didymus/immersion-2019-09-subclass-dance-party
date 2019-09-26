const BlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.addClass('blinky');
  this.setPosition.call(this, top, left);
};

//import makeDancer superclass methods
BlinkyDancer.prototype = Object.create(makeDancer.prototype);
//reset constructor
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

window.BlinkyDancer = BlinkyDancer;
