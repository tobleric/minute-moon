/*
  Mit Sinus angetriebene Animationen
*/

let a = 0 // «Winkel» zur Errechnung von Sinus/Cosinus

function setup() {
  createCanvas(400, 400)
  noFill()
}

function draw() {
  background(220)

  /* der Motor */
  let factor = sin(a)

  /* Ein Rechteck verschieben */
  let diameter = 20
  let minPos = 0
  let maxPos = width - diameter
  let rectX = map(factor, -1, 1, minPos, maxPos)
  rect(rectX, 50, diameter)

  /* Einen Kreis skalieren */
  let minDia = 10
  let maxDia = 50
  let scaledDia = map(factor, -1, 1, minDia, maxDia)
  ellipse(300, 180, scaledDia)

  /* Eine Linie schlängeln */
  let minY = 300
  let maxY = 380
  for (let i = 10; i < width; i+= 10) {
    // hier möchten wir für jeden Punkt einen leicht verschobenen
    // Winkel, mit dem wir die Sinus-Funktion aufrufen können.
    let offset = i/50
    let offsetFactor = sin(a + offset)
    let x = i
    let y = map(offsetFactor, -1, 1, minY, maxY)
    ellipse(x, y, 3)
  }

  // Den «Winkel» erhöhen
  const increment = TAU/360
  a += increment
}