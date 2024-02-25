//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//2. Crea una lista de lenguajes de programación llamada 
//"lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
//'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajesSeparados(){
    for(let i=0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajesSeparados();

//5. Crea una función que muestre en la consola todos los elementos de la lista 
//"lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesSeparadosInversamente(){
    for(let i=lenguajesDeProgramacion.length - 1; i >= 0 ; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajesSeparadosInversamente();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let lista = [1,2,3,4,5];
function promedioLista(listaNumeros){
    let suma = 0;
    for(let i=0; i < listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma/listaNumeros.length;

}
let media = promedioLista(lista);
console.log(`Promedio = ${media}`);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumeroMayorMenor(listaNumeros){
        let maximo = Math.max.apply(null, listaNumeros);
        let minimo = Math.min.apply(null, listaNumeros);
        console.log(maximo);
        console.log(minimo);
}
mostrarNumeroMayorMenor(lista);


//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(listaNumeros){
    let suma = 0;
    for(let i=0; i < listaNumeros.length; i++ ){
        suma += listaNumeros[i];
    }
    console.log(suma);
}
sumaLista(lista);

//9. Crea una función que devuelva la posición en la lista donde se encuentra 
// un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
