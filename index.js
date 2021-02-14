//Declaro constantes de mis Arreglos
const who       = ['The dog', 'My grandma', 'His turtle', 'My bird'];
const action    = ['ate', 'peed', 'crushed', 'broke'];
const what      = ['my homework', 'the keys', 'the car'];
const when      = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let resultado = '';

//Función que me pondrá aleatorio el texto
function mostrar() {

    tWho        = who[Math.floor(Math.random() * who.length)];
    tAction     = action[Math.floor(Math.random() * action.length)];
    tWhat       = what[Math.floor(Math.random() * what.length)];
    tWhen       = when[Math.floor(Math.random() * when.length)];

    resultado = tWho + ' ' + tAction + ' ' + tWhat + ' ' + tWhen;
    console.log(resultado);

    document.getElementById("excuse").innerHTML = resultado;
}
window.onload = function () {
    mostrar();
} 
