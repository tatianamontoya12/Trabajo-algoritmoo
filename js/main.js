function suma() {
    // Explicacion algoritmo
    alert ("Algoritmo que realiza una suma entre dos valores ingresados por")
    //Declaración de variables necesarias
    let a=0;
    let b=0;
    let s= 0;
    //Capturamos los datos

    a= parseInt(prompt("Ingrese el primer valor"));
    b= parseInt(prompt("Ingrese el segundo valor"));
    //Ralizamos la operación
    s = a+b;
    // Damos el resultado o respuesta
    alert("El resultado de la sumas es: " + s)
    
    
}

function opBasicas(){
    //Explicacion
    alert ("Algoritmo que va a realizar operaciones basicas")
    //Declaravcion de variables
    let a=0;
    let b=0;
    let r= 0;
    let m= 0;
    let d= 0;

    //Capturamos los datos
    a= parseInt(prompt("Ingrese el primer valor"));
    b= parseInt(prompt("Ingrese el segundo valor"));
    //Ralizamos la operación
    r = a-b;
    m= a*b;
    d= a/b;
    // Damos respuesta a las operaciones
    alert("El resultado de la resta es: " + r);
    alert("El resultado de la multiplicación es: " + m);
    alert("El resultado de la división es: " + d)

}
function ncuadrado(){
    //Explicacion del algoritmo
    alert("Algoritmo que calcula el cuadrado de un número ingresado");
    //declaracion de variables
    let N,C=0;
    //Capturamos datos
    N= parseInt(prompt("Ingrese el primer valor"));

   // Realizamos la operacion
   C=N*N
   
   //mostramos el resultado
   alert("El resultado de la area de un cuadrado es: "+ C);
}

function Rtriangulo(){
    //Explicacion del algoritmo
    alert("Algoritmo que calcula el triangulo de un número ingresado");
    //declaracion de variables
    let R,H,I=0;
    //Capturamos datos
    R= parseInt(prompt("Ingrese el primer valor"));
    H= parseInt(prompt("Ingrese el segundo valor"));

   // Realizamos la operacion
   I=(H*R)/2
   
   //mostramos el resultado
   alert("El resultado de la area de un cuadrado es: "+ I);
}
function cMedidas() {

    alert("Algoritmo que determina las pulgadas ,los kilometros y los milimetros de un valor dado en metros");

    let M=0;
    let P=0;
    let K=0;
    let L=0;

    M=parseInt(prompt("Ingresa tu valor en metros"));

    P= M*39.37;
    K=M/1000;
    L=M*1000;

    alert("El resultado en pulgadas es:"+P);
    alert("El resultado en kilometros es:"+K);
    alert("El resultado en milimetros es:"+L);

}

function numeroMayor(){
    //Explicacion del algoritmo
    alert("algoritmo que detremine el mayor de dos numero ingresados");
    //declaracion de variables 
    N1=parseInt(prompt("Ingrese el primer numero"));
    N2=parseInt(prompt("Ingrese el primer numero"));
    //Realizamos la operacion
    if(N1==N2){
        alert("los valores ingresados son iguales")
    }else if (N1>N2){
        alert(N1+"Es mayor que" + N2);
    }else{
      alert (N2+"Es mayor que" +N1);
}
function numeroMenor(){
    //Explicacion del algoritmo
    alert("algoritmo que detremine el menor de dos numero ingresados");
    //declaracion de variables 
    N1=parseInt(prompt("Ingrese el primer numero"));
    N2=parseInt(prompt("Ingrese el primer numero"));
    //Realizamos la operacion
    if((N1==N2)&&(N2==N3)){
        alert("los valores ingresados son iguales");
    }else if ((N1<N2)&&(N1<N3)){
        alert(N1 +" Es el menor");
    }else if ((N2<N1) && (N2<N3)){
        alert (N2+"Es menor que" );
    }else { 
        alert(N3 + "Es el numero menor");
    }
}
}
function promedioNotas(){
    //Explicación del algoritmo
    alert("Algoritmo para determinar el promedio de notas de un estudiante en la materia de algoritmia ");

    //Declaravcion de variables
    let n1,n2,n3,n4,n5,n6,n7;

    //Capturamos los datos
    n1= parseInt(prompt("Ingrese la primera nota"));
    n2= parseInt(prompt("Ingrese la segunda nota"));
    n3= parseInt(prompt("Ingrese la tercera nota"));
    n4= parseInt(prompt("Ingrese la cuarta nota"));
    n5= parseInt(prompt("Ingrese la quinta nota"));
    n6= parseInt(prompt("Ingrese la sexta nota"));
    n7= parseInt(prompt("Ingrese la septima nota"));

    //Realizamos la opración
    pro= (n1+n2+n3+n4+n5+n6+n7)/7;
    //Mostramos el resultado
    if (pro>=6.1){
        alert("Aprobo la materia con : " + pro);
    }else{
        alert("Reprobo la materia con: " +pro);
    }
   
}
function descuentoCompras() {
    // Explicacion del algoritmo
    alert("Algoritmo que aplica descuento según el número de kilos comprados");

    // Declaración de variables necesarias
    let K, V, S, D, T;

    // Capturamos los datos
    K = parseInt(prompt("Ingrese el número de Kg: "));
    V = parseInt(prompt("Ingrese el valor de las manzanas: "));
    S = K * V;

    alert("El subtotal es: " + S);

    // Realizamos la operación
    if (K <= 2) {
        D = 0;
        T = S; // No resta el descuento del subtotal
        alert("No se realizo ningún descuento, el total es: " + T);
    } 
    else if (K >= 3 && K <= 5) {
        D = S * 0.1;
        T = S - D; // Resta el descuento del subtotal
        alert("Se realizo un descuento del 10%, el total es: " + T);
    } 
    else if (K >= 6 && K <= 10) {
        D = S * 0.15;
        T = S - D;
        alert("Se realizo un descuento del 15%, el total es: " + T);
    } 
    else if (K >= 11) {
        D = S * 0.2;
        T = S - D;
        alert("Se realizo un descuento del 20%, el total es: " + T);
    }    
}
    function salarioSemanal(){
        //explicacion del  algoritmo
    alert ("Algoritmo que calcula las horas trabajadas semanales de un trabajador")
    //Declaracion de variables necesarias 
        let L, MA , MI, J , V , S, D, T, X = 0;
     //capturamos los datos
    L=parseInt(prompt("ingrese el total de horas trabajadas el lunes, si no trabajo ese dia ingrese 0: "));  
    MA=parseInt(prompt("ingrese el total de horas trabajadas el martes, si no trabajo ese dia ingrese 0: "));  
    MI=parseInt(prompt("ingrese el total de horas trabajadas el miercoles, si no trabajo ese dia ingrese 0: "));  
    J=parseInt(prompt("ingrese el total de horas trabajadas el jueves, si no trabajo ese dia ingrese 0: "));  
    V=parseInt(prompt("ingrese el total de horas trabajadas el viernes, si no trabajo ese dia ingrese 0: "));  
    S=parseInt(prompt("ingrese el total de horas trabajadas el sabado, si no trabajo ese dia ingrese 0: "));  
    D=parseInt(prompt("ingrese el total de horas trabajadas el domingo, si no trabajo ese dia ingrese 0: "));  
    //realizamos la operacion 
    T=(L+MA+MI+J+V+S+D);
    Horas = 12500;
    Extras = 18000;
    if (T <= 40){
        alert("El total de horas trabajadas es: " + T + "y el total devengado es $"+ T * Horas);
    }
    else if (T > 40){
        X = T-40;
        alert("El total de horas trabajadas es: " + T )
        alert("Valor a pagar por 40 horas = $"+ (Horas*40) + " + " +X+" horas extras = $" + (X*Extras));    
        alert("El total devengado es $"+ ((40 * Horas) +(X*Extras)));
    }
}