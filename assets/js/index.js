var data=[];
           function ajax(){
               const http = new XMLHttpRequest();
               const url ='https://api.thecatapi.com/v1/breeds';
               http.onreadystatechange = function(){
                   if(this.readyState == 4 && this.status == 200){
                   data= JSON.parse(this.responseText);             
                  var datoNue =  data.map(element => {
                       return '<option value="'+element.id+'">'+element.name+'</option>';
                   });      
                }
                document.getElementById("raza").innerHTML = datoNue.join(""); 
                datoNuevo(data[0].id);
               }
               http.open("GET",url);
               http.send();
           } 
ajax();

function datoNuevo(value){
    for(let i= 0; i <= data.length-1; i++){
        let idx = data[i].id.indexOf(value)
        if (idx >= 0){
            document.getElementById("gatos").innerHTML = '<div><strong style="font-weight: bold;">Id :&nbsp;&nbsp   </strong>'+data[i].id+'</div>'+  
                '<div><strong style="font-weight: bold;">Nombre:&nbsp;&nbsp </strong>'+data[i].name+'</div>'+
                '<div><strong style="font-weight: bold;">Descripción:&nbsp;&nbsp </strong> '+data[i].description+'</div>'+
                '<div><strong style="font-weight: bold;">Años de vida:&nbsp;&nbsp </strong> '+data[i].life_span+'</div>'+
                '<div><strong style="font-weight: bold;">Origen:&nbsp;&nbsp </strong> '+data[i].origin+'</div>'+
                '<div><strong style="font-weight: bold;">Wiki:&nbsp;&nbsp </strong><a href ="'+data[i].wikipedia_url+'" target="blank"> '+data[i].wikipedia_url+'</a></div>'+
                '<div><strong style="font-weight: bold;">VetStreet&nbsp;&nbsp :</strong> <a href ="'+data[i].vetstreet_url+'" target="blank"> '+data[i].vetstreet_url+'</a></div>';
            document.getElementById("gato_img").innerHTML = '<img src="'+data[i].image.url+'" class="img-fluid" alt="...">';
        }
    }
}
//dos 

var datosRec = [];
var pagina = 0;
function ajaxFotos(){
    const http = new XMLHttpRequest();
    const url ='https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page='+pagina+'&category_ids=1&sub_id=demo-b7e1c3';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        datosRec= JSON.parse(this.responseText);
        valorInicial = 0;  
        pagina++;    
     }
     adelante();
    }
    http.open("GET",url);
    http.send();
} 
ajaxFotos();


var valorInicial = 0;
function adelante(){
    if(valorInicial > 17){
        valorInicial = 0;
    }
    let val1 = true;
        innerHtml(valorInicial, val1);
}

function atras(){
    if(valorInicial < 0){
        valorInicial = 17;
    }
    let val1 = false;
        innerHtml(valorInicial, val1);                                               //valorInicial++
}

function primero(){
    primerValor = 0;
    innerHtml(primerValor);   
}

function ultimo(){
    ultimoValor = 17;
    innerHtml(ultimoValor);   
}

function innerHtml(valor, val1){
    if(val1){
        valorInicial++;
    }else{
        valorInicial--;
    }
    console.log(valor);
    document.getElementById("fotosGat").innerHTML = '<img src="'+
                                                    datosRec[valor].url+
                                                    '" class="d-block w-100" alt="...">';
    
}

