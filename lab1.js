let fs = require('fs');
fs.readFile('input16.txt', function(err, data) {

  if(err) throw err;
  let matrix = [];

  let arr = data.toString().split('\n');
  for (let i=0; i<arr.length - 1; i++) {
    matrix[i] = arr[i].split(' ');
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Number(matrix[i][j]);
    }
  }
  let size = matrix.length;
  console.log("Матрица: ");
  console.table(matrix);
  x = gauss(matrix, size);
  console.log("Решение: ");
  console.table(x);


  let toFile = require("fs");

  toFile.writeFile("vector4.txt", x, function(error) {

    if(error) throw error; // если возникла ошибка
    console.log("Запись файла завершена.");
});

})

function gauss(matrix, n)    //Метод Гаусса
{    //Прямой ход, приведение к верхнетреугольному виду
    let tmp;
    let xx = new Array(n);

    for (let i = 0; i<n; i++)
    {
        tmp = matrix[i][i];
        for (let j = n; j >= i; j--)
            matrix[i][j] /= tmp;

        for (let j = i + 1; j<n; j++)
        {
            tmp = matrix[j][i];
            for (let k = n; k >= i; k--)
                matrix[j][k] -= tmp*matrix[i][k];
                console.table(matrix);
        }
    }
    //обратный ход
    xx[n - 1] = matrix[n - 1][n];
    for (let i = n - 2; i >= 0; i--)
    {
        xx[i] = matrix[i][n];
        for (let j = i + 1; j<n; j++)
          xx[i] -= matrix[i][j] * xx[j];
          console.table(matrix);
    }
    return xx;
}
