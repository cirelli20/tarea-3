let marcas = []; // Array para almacenar las marcas

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180);
  // Agregar el texto "Haz clic" en el fondo
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("HAZ CLICK", width / 2, height / 2);

  // Dibujar todas las marcas almacenadas en el array
  for (let i = 0; i < marcas.length; i++) {
    let marca = marcas[i];
    marca.mostrar();
  }
}

// Función para crear una marca en la posición del clic o toque
function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let nuevaMarca = new Marca(x, y);
  marcas.push(nuevaMarca);
}

// Definición de la clase Marca
class Marca {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diametro = 100; // Tamaño de la marca
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  mostrar() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diametro);
  }
}

