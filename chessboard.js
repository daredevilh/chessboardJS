let size = 8;
let result = '';

for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    for(let j = 1; j <= size; j++) {
      if (j % 2 == 0) {
      	result += ' ';
      } else {
      	result += '#';
      }         
    }
    result += '\n';
  } else {
    for(let j = 1; j <= size; j++) {
      if (j % 2 == 0) {
      	result += '#';
      } else {
      	result += ' ';
      }
    }
    result += '\n';
  }
}

console.log(result);
