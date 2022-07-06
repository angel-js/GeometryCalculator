// Calcular el area de un cuadrado 
console.group('Cuadrado');

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}; 
console.groupEnd();

//  Código del triangulo
console.group('Triangulo');
function perimetroTriangulo(lado1, lado2, lado3) {
    l1 = Number(lado1);
    l2 = Number(lado2);
    l3 = Number(lado3);
    suma = (l1 + l2 + l3);
    return suma;
};

function areaTriangulo(baseT, alturaT) {
    return (baseT * alturaT) / 2;
}
console.groupEnd();



// Código del círculo
console.group('Círculo');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
};

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área
function areaCirculo() {
    return (radio * radio) / 2;
};

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};

function validar(d1,d2,d3){
    if(d1 === d2 || d1 == d3){
        return true;
    } else if(d2 === d3 ){
        return true;
    } else {
        return false
    }
};
function campoVacio(c1,c2,c3){
    if(c1 == 0 || c2 == 0 || c3 == 0){
        return true
    } else {
        return false
    }
}


// Triangulo
function CPTriangulo(){
    const input1 = document.getElementById("lado1")
    const input2 = document.getElementById("lado2")
    const input3 = document.getElementById("lado3")
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    let camposVacios = campoVacio(value1,value2,value3);
    let validando = validar(value1,value2,value3);
    if(validando === true && camposVacios === false){
        perimetro = perimetroTriangulo(value1,value2,value3);
        alert("El perimetro de su triangulo es: " + perimetro);
    } else if(camposVacios == true){
    alert("Uno de los espacios esta vacío :c")
    } else if(validando === false){
        alert("Su triangulo no es isoceles :C")
    };
     
    
};

function CATriangulo(){
    const input1 = document.getElementById("lado1")
    const input2 = document.getElementById("lado2")
    const input3 = document.getElementById("lado3")
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    let camposVacios = campoVacio(value1,value2,value3);
    let validando = validar(value1,value2,value3);
    if(validando === true && camposVacios === false){
        area = areaTriangulo(value1,value2,value3);
        alert(`El area de su triangulo es: ${area} cm^2`  );
    } else if(camposVacios == true){
    alert("Uno de los espacios esta vacío :c")
    } else if(validando === false){
        alert("Su triangulo no es isoceles :C")
    };
}