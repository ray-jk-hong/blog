((function() {var callbacks = [],timeLimit = 50,open = false;setInterval(loop, 1);return {addListener: function(fn) {callbacks.push(fn);},cancleListenr: function(fn) {callbacks = callbacks.filter(function(v) {return v !== fn;});}}
function loop() {var startTime = new Date();debugger;if (new Date() - startTime > timeLimit) {if (!open) {callbacks.forEach(function(fn) {fn.call(null);});}open = true;window.stop();alert('此处添加关掉调试时提示的文字');document.body.innerHTML = "";} else {open = false;}}})()).addListener(function() {window.location.reload();});


function toDevtools(){
  let num = 0;
  let devtools = new Date();
  devtools.toString = function() {
    num++;
    if (num > 1) {
        window.location.href = "about:blank"
        blast();
    }
  }
  console.log('', devtools);
}
toDevtools();


document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && (e.keyCode == 123)) {
      e.keyCode = 0;
      e.returnValue = false;
      btf.snackbarShow('No copies');
      return (false);
    }
}
$(document).keydown(function(e){
  if( e.ctrlKey  == true && e.keyCode == 83 ){
    console.log('ctrl+s');
    return false;
  }
});
