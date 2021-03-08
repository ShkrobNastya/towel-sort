
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if (matrix==undefined) { 
  return [];
  }
  console.log(matrix);
  for (let i=0; imatrix.length; i++) {
      if (i%2 == 0) {
          for (let j=0; jmatrix[i].length; j++) {
              arr.push(matrix[i][j]);
          }
      } else {
          for (let j=matrix[i].length-1; j-1; j--) {
              arr.push(matrix[i][j]);
      }
  }
  }
  return arr;
}
