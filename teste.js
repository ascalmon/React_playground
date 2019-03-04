
var str = 'sahsagsjsdssdvnsmvsdfnsxdfnsdfmsdnfdfmndsfmdfnd';
let j;
for (let i = 0; i < str.length; i++){
  console.log(str[i]);
  if (str[i] == 'x'){
    j = i
    break;
  }

}
console.log('j =',j);
