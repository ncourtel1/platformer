class Player {
   constructor(elementId) {
      // Associe un élément DOM au joueur
      this.element = document.getElementById(elementId);

      // Position et vitesse
      this.positionX = 0; // Position actuelle en X
      this.speedX = 0; // Vitesse horizontale
      this.friction = 0.8; // Coefficient de friction
      this.maxSpeed = 15; // Vitesse maximale

      this.gravity = 0.5;

      // Input
      this.vectord2d = { x: 0, y: 0 }; // Direction

      // Initialise les écouteurs de clavier
      this.getInput();
   }

   // Gère les événements clavier une seule fois
   getInput() {
      document.addEventListener("keydown", (event) => {
         if (event.key === "a") {
            this.vectord2d.x = -1; // Gauche
         } else if (event.key === "d") {
            this.vectord2d.x = 1; // Droite
         }
         if(event.key === " "){
            this.vectord2d.y = 1;
         }
      });

      document.addEventListener("keyup", (event) => {
         if (event.key === "a" || event.key === "d") {
            this.vectord2d.x = 0; // Arrêt horizontal
         }
         if(event.key === " "){
            this.vectord2d.y = 0;
         }
      });
   }

   // Met à jour la position et la vitesse du joueur
   update() {
      // Applique l'accélération ou la friction
      if (this.vectord2d.x !== 0) {
         this.speedX += this.vectord2d.x * this.acceleration;
         // Limite la vitesse maximale
         this.speedX = Math.max(
            Math.min(this.speedX, this.maxSpeed),
            -this.maxSpeed
         );
      } else {
         // Applique la friction si aucune touche n'est pressée
         this.speedX *= this.friction;
         if (Math.abs(this.speedX) < 0.1) this.speedX = 0; // Stoppe le glissement
      }

      // Met à jour la position en X
      this.positionX += this.speedX;

      // Empêche de sortir de l'écran (par exemple)
      this.positionX = Math.max(this.positionX, 0);

      // Mets à jour le DOM
      this.render();
   }

   // Met à jour la position visuelle du joueur
   render() {
      this.element.style.left = `${this.positionX}px`;
   }
}

// Variables globales pour la boucle
let oldTimeStamp = 0;
let player = new Player("player");

function gameLoop(timeStamp) {
   // Calcule le temps écoulé depuis la dernière frame
   const secondsPassed = (timeStamp - oldTimeStamp) / 1000;
   oldTimeStamp = timeStamp;

   // Mets à jour et affiche le joueur
   player.update();

   // Continue la boucle
   window.requestAnimationFrame(gameLoop);
}

// Démarre la boucle de jeu
gameLoop(0);