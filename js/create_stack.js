function CreateStack() {
  this.count = 0 ;
  this.bindEvents();
}

CreateStack.prototype.addDivTag = function() {
  this.count += 1;
  var currentDiv = $("<div/>").addClass("innerClass")
                               .attr("id", "divInner"+ this.count)
                               .appendTo(".container");
};

CreateStack.prototype.addItemHandler = function() {
  var _this = this;
  $("#addStack").on("click", function(){
    _this.addDivTag();
  });
};

CreateStack.prototype.highlightAndRemoveHandler = function() {
  var _this = this;  
  $(".container").on("click",".innerClass" ,function() {
    $(".highlight").removeClass("highlight");
    if(this.id == $(".innerClass:last").attr("id")) {
      this.remove();
      _this.count -= 1;
    }
    else {
      $(this).addClass("highlight");
    } 
  });
};

CreateStack.prototype.bindEvents = function() {
  this.addItemHandler();
  this.highlightAndRemoveHandler();
};

$(document).ready(function() {
  var createStackObj = new CreateStack();
});