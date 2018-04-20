var name = prompt ("Cual estu nombre?")

var pregunta1=document.test.pregunta1.value;
var pregunta2=document.test.pregunta2.value;
var pregunta2=document.test.pregunta3.value;
var correct=0;

if (pregunta1 == "Guerrero"){correct++;}
if (pregunta2 == "Rusia"){correct++;}
if(pregunta3)== "36"{correct++;}
var messages= ["Buen trabajo", "Esta bien", "Intentalo de nuevo"]
if (correct<1) {range=2;
}
if (correct<0 && correct<3) {range=1;

}
if (correct>2) {range=0;

}
document.getElementById('messages').innerHTML=messages [range];
document.getElementById('number_correct').innerHTML= "Lo LOgraste"+ correct+"correct";
document.getElementById('picture').src= picture [range];
