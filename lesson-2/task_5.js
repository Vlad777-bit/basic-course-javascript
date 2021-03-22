'use strict';

function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case '+':
      return sum(arg1, arg2);
    case '-':
      return min(arg1, arg2);
    case '/':
      return diff(arg1, arg2);
    case '*':
      return mul(arg1, arg2)    
  }
}
