const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('[name="character-id"]').value;
    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector('[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = event.target[0].value;
    const charInfo = {name: event.target[1].value, occupation: event.target[2].value, weapon: event.target[3].value, cartoon: event.target[4].checked};
    charactersAPI.updateOneRegister(id, charInfo)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const charInfo = {name: event.target[0].value, occupation: event.target[1].value, weapon: event.target[2].value, cartoon: event.target[3].checked};
    charactersAPI.createOneRegister(charInfo);
  });
});
