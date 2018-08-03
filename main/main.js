module.exports = function main() {
  // Write your code here
  if(arguments.length===0){
	  return 0;
  }
  
  var str = arguments[0];
  var sum = 0;
  for(var i=0;i<str.length;i++){
	  sum = sum + parseInt(str.charAt(i));
  }
	  
  return sum;
};
