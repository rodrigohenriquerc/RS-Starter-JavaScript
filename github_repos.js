var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');
let paragraphElement = document.querySelector('#app p');

function searchRepos() {
  listElement.innerHTML = '';
  paragraphElement.innerHTML = '';
  var repos = [];

  var loadingMessageItem = document.createElement('li');
  loadingMessageItem.innerHTML = 'Carregando...';
  listElement.appendChild(loadingMessageItem);

  var userName = inputElement.value;
  userName.value = '';
  var URL = `https://api.github.com/users/${userName}/repos`;
  axios
    .get(URL)
    .then(response => {
      listElement.removeChild(loadingMessageItem);
      if (response.data) {
        if (response.data.length === 0) {
          var listItem = document.createElement('li');
          listItem.innerHTML = 'Sem repositórios.';
          return listElement.appendChild(listItem);
        }
        for (repo of response.data) {
          var listItem = document.createElement('li');
          listItem.innerHTML = repo.name;
          repos.push(listItem);
          // listElement.appendChild(listItem);
        }
        for (repo of repos) {
          listElement.appendChild(repo);
        }
      }
    })
    .catch(error => {
      console.log(error);
      listElement.innerHTML = '';
      paragraphElement.innerHTML = 'Usuário não encontrado.';
    });
}

buttonElement.onclick = searchRepos;

















// https://api.github.com/users/rodrigohenriquerc/repos

// axios.get('https://api.github.com/users/rodrigohenriquerc/repos')
//   .then(response => console.log(response));