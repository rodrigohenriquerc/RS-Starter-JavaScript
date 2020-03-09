function returnAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve('O usuário é maior de idade!');
      }, 2000);
    }
    setTimeout(() => {
      reject('O usuário é menor de idade.');
    }, 2000);
  });
}

returnAge(17)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })