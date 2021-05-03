//obtention d'infos
const xhr = new XMLHttpRequest();
xhr.onload = function() {
    let contenu = JSON.parse(xhr.responseText);
    let pMessage = document.createElement('span');
    let pUser = document.createElement('span');

    pMessage.innerHTML = contenu.message;
    pUser.innerHTML = contenu.user + ' ' + contenu.profile.address + ' ' + contenu.profile.sex;

    document.body.appendChild(pMessage);
    document.body.appendChild(pUser);
};

xhr.open("GET", "/api/obtention-get.php");
xhr.send();

//envoi d' infos
const xhrEnvoi = new XMLHttpRequest();
xhrEnvoi.onload = function() {
    let contenu = JSON.parse(xhrEnvoi.responseText);
    console.log(contenu.resp);
};

let body = {
    message: 'Hello',
    user: 'Doe Douille'
}

xhrEnvoi.open("POST", "/api-envoi.php");
xhrEnvoi.send(JSON.stringify(body));
