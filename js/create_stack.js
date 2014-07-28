function CreateStack() {
  this.count = 0 ;
  this.bindEvents();
}
CreateStack.prototype.addDivTag = function() {
  this.count += 1;
  this.currentDiv = $("<div/>").addClass("innerClass")
                               .attr("id", "divInner"+ this.count)
                               .appendTo(".container");
};

CreateStack.prototype.removeDivTag = function() {
  this.count -= 1;
  var currentDivElement = this.currentDiv;
  this.currentDiv = this.currentDiv.prev();
  currentDivElement.remove();
};

CreateStack.prototype.bindEvents = function() {
  var _this = this;
  $("#addStack").on("click", function(){
    _this.addDivTag();
  });
  $(".container").on("click",".innerClass" ,function() {
    $(".highlight").removeClass("highlight");
    if(this.id == _this.currentDiv.attr("id")) {
      _this.removeDivTag();
    }
    else {
      $(this).addClass("highlight");
    } 
  });
};

$(document).ready(function() {
  var createStackObj = new CreateStack();
});