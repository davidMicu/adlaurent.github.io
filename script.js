// Fonction pour créer un élément HTML avec du texte
function createElement(tag, text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}

// Code qui s'exécute quand la page est chargée
window.addEventListener("load", () => {
  // Création d'un conteneur dans le body
  const container = createElement("div", "");
  document.body.appendChild(container);

  // Création et affichage d'un message
  const message = createElement("p", "Bonjour, ceci est un script simple !");
  container.appendChild(message);

  // Création d'un bouton
  const button = createElement("button", "Cliquez-moi");
  container.appendChild(button);

  // Gestionnaire d'événement au clic sur le bouton
  button.addEventListener("click", () => {
    alert("Merci d'avoir cliqué !");
  });
});