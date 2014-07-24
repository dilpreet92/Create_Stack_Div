function createStack() {
  this.count = 0 ;
  this.currentDiv = "";
}
createStack.prototype.addDivTag = function() {
  this.count += 1;
  this.currentDiv = $("<div/>")
    .addClass("innerClass").attr("id", "divInner"+ this.count)
      .appendTo(".container");
};

createStack.prototype.removeDivTag = function() {
  this.count -= 1;
  this.currentDiv = this.currentDiv.hide().prev();
};

createStack.prototype.bindEvents = function() {
  var _this = this;
  $(":button").on("click", function(){
    _this.addDivTag();
  });
  $(".container").on("click",".innerClass" ,function(event) {
    $(".container div").addClass("innerClass");
    if(event.target.id == _this.currentDiv.attr("id")) {
      _this.removeDivTag();
    }
    else {
      $(this).removeClass("innerClass").addClass("highlight");
    } 
  });
};

$(document).ready(function() {
  var createStackObj = new createStack();
  createStackObj.bindEvents();    
});