const makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

//import makeDancer superclass methods
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//reset constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

window.makeBlinkyDancer = makeBlinkyDancer;
