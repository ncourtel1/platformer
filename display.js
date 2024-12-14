class Display {
constructor(containerId) {
   this.container = document.getElementById(containerId);
   this.containerWidth = this.container.clientWidth;
   this.containerHeight = this.container.clientHeight;
}

// Méthode pour dessiner un rectangle
drawRectangle(x, y, width, height, color) {
   const rectangle = document.createElement("div");
   rectangle.className = "rectangle";
   rectangle.style.left = Math.floor(x) + "px";
   rectangle.style.top = Math.floor(y) + "px";
   rectangle.style.width = width + "px";
   rectangle.style.height = height + "px";
   rectangle.style.backgroundColor = color;

   this.container.appendChild(rectangle);
}

// Méthode pour remplir tout l'écran avec une couleur
fill(color) {
   this.container.innerHTML = ""; // Efface tout le contenu
   this.container.style.backgroundColor = color;
}

// Méthode pour redimensionner le conteneur
resize(width, height, heightWidthRatio) {
   if (height / width > heightWidthRatio) {
      this.container.style.width = width + "px";
      this.container.style.height = width * heightWidthRatio + "px";
   } else {
      this.container.style.height = height + "px";
      this.container.style.width = height / heightWidthRatio + "px";
   }
}

// Méthode pour simuler le rendu (vide ici)
render() {
   // Pas besoin de copier un buffer : tout est dessiné directement
}
}

// Exemple d'utilisation
const display = new Display("display");

// Redimensionner le conteneur
display.resize(800, 600, 0.75);

// Dessiner quelques rectangles
display.fill("rgba(40,48,56,0.25)");
display.drawRectangle(50, 50, 100, 100, "#ff0000"); // Rectangle rouge
display.drawRectangle(200, 150, 80, 120, "#00ff00"); // Rectangle vert
display.drawRectangle(400, 300, 150, 50, "#0000ff"); // Rectangle bleu