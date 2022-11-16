//Prueba de Conocimiento

const first = document.querySelector('#grafo');
const second = document.querySelector('#second');
const tercero = document.querySelector('#datebd');
const four = document.querySelector('#componentes');
const five = document.querySelector('#bdnor');

console.log(first);

let puntaje = 0;

let puntaje1 =0, puntaje2=0, puntaje3=0, puntaje4=0, puntaje5=0, puntaje6=0, puntaje7=0, puntaje8=0, puntaje9=0, puntaje10 = 0;


first.addEventListener('change', ()=>{
    let valorOption = first.value;
    console.log(valorOption);

    let optionSelect = first.options[first.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje1= 10
        console.log(puntaje1)
    }else{
        console.log("Perdiste")
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    console.log(valorOption);

    let optionSelect = second.options[second.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==2){
        console.log("ganaste")
        puntaje2= 10
        console.log(puntaje2)
    }else{
        console.log("Perdiste")
    }
})

tercero.addEventListener('change', ()=>{
    let valorOption = tercero.value;
    console.log(valorOption);

    let optionSelect = tercero.options[tercero.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje3= 10
        console.log(puntaje)
    }else{
        console.log("Perdiste")
    }
})

four.addEventListener('change', ()=>{
    let valorOption = four.value;
    console.log(valorOption);

    let optionSelect = four.options[four.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==5){
        console.log("ganaste")
        puntaje4= 10
        console.log(puntaje)
    }else{
        console.log("Perdiste")
    }
})

five.addEventListener('change', ()=>{
    let valorOption = five.value;
    console.log(valorOption);

    let optionSelect = five.options[five.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==3){
        puntaje5= 10

    }else{
        console.log("Perdiste")
    }
})

//Practica
pr5.addEventListener('change', ()=>{
    let valorOption = pr5.value;
    console.log(valorOption);
    let optionSelect = pr5.options[pr5.selectedIndex];
    if(valorOption == 3){
        puntaje10= 10
        r5.innerHTML=""
    }else{
        console.log("Perdiste")
    }
})

const boton = document.getElementById('responder');
let r = `db.profes.find({$or:[{nombre:"tatiana"},{nombre:"Andres"}]})`
const r1 = document.getElementById('con1');
const r2 = document.getElementById('con2');
const r3 = document.getElementById('con3');
const r4 = document.getElementById('con4');
const r5 = document.getElementById('con5');

boton.addEventListener('click', ()=>{
    const pr1 = document.querySelector('#pr1').value;
    const pr2 = document.querySelector('#pr2').value;
    const pr22 = document.querySelector('#pr22').value;
    const pr3 = document.querySelector('#pr3').value;
    const pr4 = document.querySelector('#pr4').value;
    
    if(pr1 == r || pr1 ==`db.profes.find({$or: [{nombre:"tatiana"},{nombre:"Andres"}]})`|| pr1 ==`db.profes.find({$or: [{nombre: "tatiana"},{nombre: "Andres"}]})`){
        puntaje6 = 10;
        console.log("correcto1")
        r1.innerHTML=""
    }else{
        r1.innerHTML="¡RESPUESTA INCORRECTA!"
    }
    if(pr2== `use hospital` && pr22 == `db.dropDatabase()`){
        puntaje7 = 10;
        console.log("correcto2");
        r2.innerHTML=""
    }else{
        r2.innerHTML="¡RESPUESTA INCORRECTA!"
    }
    if(pr3 == `db.libro.update({ _id:1 },{$set:{ titulo:"el gato negro" }},{ upset:true })` || pr3 == `db.libro.update({_id: 1},{$set:{titulo:"el gato negro"}},{upset:true})` || pr3 ==`db.libro.update({ _id: 1 },{$set:{titulo: "el gato negro"}},{upset:true})`){
        puntaje8 = 10;
        console.log("correcto3")
        r3.innerHTML=""
    }else{
        r3.innerHTML="¡RESPUESTA INCORRECTA!"
    }
    if (pr4 == `db.ficha.find().sort({_id:-1})` || pr4 == `db.ficha.find().sort({ _id:-1 })` || pr4 == `db.ficha.find( ).sort({_id:-1})`){
        puntaje9 = 10;
        console.log("correcto4")
        r4.innerHTML=""
    }else{
        r4.innerHTML="¡RESPUESTA INCORRECTA!"
    }
    puntaje = puntaje1+puntaje2+puntaje3+puntaje4+puntaje5+puntaje6+puntaje7+puntaje8+puntaje9+puntaje10;
    if(puntaje >= 70){

        Swal.fire({ text:`Pasaste ya que tu nota fue de ${puntaje}`,icon:'success'})
    }else{

        Swal.fire({ text:`perdiste ya que tu nota fue de ${puntaje}`,icon:'error'})
    
    }
    
})




