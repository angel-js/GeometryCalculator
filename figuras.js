// Calcular el area de un cuadrado 
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} centimetros `);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del Cuadrado miden: ${perimetroCuadrado} centimetros `);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del Cuadrado mide: ${areaCuadrado} centimetros cuadrados`);
console.groupEnd();

//  Código del triangulo
console.group('Triangulo');
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log(`los lados del triangulo miden: ${ladoTriangulo} cm ${ladoTriangulo2} cm 
y ${ladoTriangulo3} cm`);

console.log(`La altura del triangulo es de: ${alturaTriangulo} cm`);

const perimetroTriangulo = (ladoTriangulo3 + ladoTriangulo + ladoTriangulo2);
console.log(`El perimetro del triangulo es de: ${perimetroTriangulo} cm`);

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log(`El área del triangulo es de: ${areaTriangulo} cm`);
console.groupEnd();



// Código del círculo
console.group('Círculo');
// Radio
const radioCirculo = 4;
console.log(`El radio del circulo es : ${radioCirculo}`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es : ${diametroCirculo}`);

// PI
const PI = Math.PI;
console.log(`PI equivale a : ${PI}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`La circunferencia del circulo es : ${perimetroCirculo}`);

// Área
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log(`El area del circulo es : ${areaCirculo}`);
console.groupEnd();

