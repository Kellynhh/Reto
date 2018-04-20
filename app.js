var name= prompt( 'Cual es tu nombre?'); // en esta linea estamos almacenando el valor de la variable con la informacion del usuario/
   
     // a travez del document.getElement.ById estamos llamando a la eltiqueta de h3 html que interactua con la informacion que el usuario ingresa
     document.getElementById('bienvenida').style.display = "block";
     document.getElementById("nombre").innerHTML = name;

function botonsi(){ // esta funcion le da interactividad al boton si, una vez presionado por el usuario interactua colocando las preguntas
    
    
     var pregunta1='Quien fue la primera programadora de la historia?';

         document.getElementById("preg1").innerHTML=pregunta1; 

     var pregunta2='Quien fue la científica que hizo el software de vuelo para el Apolo?';

         document.getElementById("preg2").innerHTML=pregunta2; 

     var pregunta3='Como se llamó la científica que desarrolló el primer compilador para un lenguaje de programación?';

         document.getElementById("preg3").innerHTML=pregunta3; 
 }


       // interactividad con las respuesta de las preguntas
       /*
        var resp1 = document.getElementById('resp1');
        var resp2 = document.getElementById('resp2');
        var resp3 = document.getElementById('resp3');
        var resp4 = document.getElementById('resp4');
        var resp5 = document.getElementById('resp5');
        var resp6 = document.getElementById('resp6');
        var resp7 = document.getElementById('resp7');
        var resp8 = document.getElementById('resp8');
        var resp9 = document.getElementById('resp9');
        var resp10 = document.getElementById('resp10');
        var resp11 = document.getElementById('resp11');
        var resp12 = document.getElementById('resp12');
        
        // interactividad con el boton de siguiente 
        var siguiente1= document.getElementById('siguiente1');
        var siguiente2= document.getElementById('siguiente2');
        var siguiente3= document.getElementById('siguiente3');
       */
 function mostrarRespuestas () {
            
            // muestra los botones de las opciones a reponder 
            
            resp1.style.display = 'inline';
            resp2.style.display = 'inline';
            resp3.style.display = 'inline';
            resp4.style.display = 'inline';
            resp5.style.display = 'inline';
            resp6.style.display = 'inline';
            resp7.style.display = 'inline';
            resp8.style.display = 'inline';
            resp9.style.display = 'inline';
            resp10.style.display = 'inline';
            resp11.style.display = 'inline';
            resp12.style.display = 'inline';
            siguiente1.style.display = 'inline';
            siguiente2.style.display = 'inline';
            siguiente3.style.display = 'inline';
        
        }
  function desactivar1(){

    resp2.disabled=true;
    resp3.disabled=true;
    resp4.disabled=true;
       
  }    
  
   function desactivar2(){

    resp1.disabled=true;
    resp3.disabled=true;
    resp4.disabled=true;
       
  }

   function desactivar3(){

    resp1.disabled=true;
    resp2.disabled=true;
    resp4.disabled=true;
       
  }

   function desactivar4(){

    resp1.disabled=true;
    resp2.disabled=true;
    resp3.disabled=true;
       
  }

   function desactivar5(){

    resp6.disabled=true;
    resp7.disabled=true;
    resp8.disabled=true;
       
  }

   function desactivar6(){

    resp5.disabled=true;
    resp7.disabled=true;
    resp8.disabled=true;
       
  }

   function desactivar7(){

    resp5.disabled=true;
    resp6.disabled=true;
    resp8.disabled=true;
       
  }

   function desactivar8(){

    resp5.disabled=true;
    resp6.disabled=true;
    resp7.disabled=true;
       
  }

   function desactivar9(){

    resp10.disabled=true;
    resp11.disabled=true;
    resp12.disabled=true;
       
  }

   function desactivar10(){

    resp9.disabled=true;
    resp11.disabled=true;
    resp12.disabled=true;
       
  }

   function desactivar11(){

    resp9.disabled=true;
    resp10.disabled=true;
    resp12.disabled=true;
       
  }

   function desactivar12(){

    resp9.disabled=true;
    resp10.disabled=true;
    resp11.disabled=true;
       
  }

   function desactivarsi(){

    no.disabled=true;      
  }
    function desactivarno(){

    si.disabled=true;      
  }


 function verdadero1() {
    
 
    document.getElementById("mensaje1").innerHTML ="Felicitaciones! tu respuesta es correcta.";

    }
    function incorrecto1() {
  
    document.getElementById("mensaje1").innerHTML = "Ups! Fallaste :( .";    
    }
 function verdadero2() {
    
 
    document.getElementById("mensaje2").innerHTML ="Excelente Respuesta!!";

    }
    function incorrecto2() {
  
    document.getElementById("mensaje2").innerHTML = "Naah.... Fallaste!";    
    }
    function verdadero3() {
    
 
    document.getElementById("mensaje3").innerHTML ="WoOoW!! Excelente!!";

    }
    function incorrecto3() {
  
    document.getElementById("mensaje3").innerHTML = "No, no, no y Nooooo!! :(";    
    }

function botonno(){

     var despedida= 'Vuelve cuando estés lista... :(';

    	  document.getElementById("despedida").innerHTML=despedida;

 }

//pasa de box1 a box2
 
function sig0(id){

   var e= document.getElementById(id);

    e.style.display='none';
 
 }
 

 function sig1(id){

 	 var e= document.getElementById(id);

 	 if(e.style.display=='block'){

 	 	e.style.display='none';

 	 }else{
 	 	e.style.display= 'block';
     } 
 }
 
 function sig2(id){

 	 var e= document.getElementById(id);

 	 if(e.style.display=='none'){

 	 	e.style.display='block';

 	 }else{
 	 	e.style.display= 'none';
     } 
 }

  function sig3(id){

 	 var a= document.getElementById(id);

 	 
 	 	a.style.display='block';

 	
     
 }

 function salida(){

 	alert("Gracias por participar  " + name +"\nHaz contestado correctamente " + contador + " preguntas");
  if (contador==3){
  alert("\nHaz contestado correctamente " + contador + " preguntas");  
  }
  else if(contador==0){
    alert("\nHaz salido muy mal :(");
  }
 }

 
 

var contador=0;

function incrementar() {
  contador++;
}



