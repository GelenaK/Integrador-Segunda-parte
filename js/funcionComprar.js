
function comprar()
{
   
   
   const valorTicket=200;
   let sinCateg = valorTicket;

   let estudiante= (valorTicket *0.20);
   let trainee= (valorTicket*0.50);
   let junior = (valorTicket*0.85);

  
   cantidad=document.getElementById("cantidad").value;

   let select=document.getElementById("categ");
   let valorSel=select.options[select.selectedIndex].value;
 

result=0;



switch(valorSel=parseInt(valorSel))
   {
       case 1:
            result= (valorTicket)*cantidad;
         
           break;
   
       case 2:
        result= estudiante*cantidad;
       
           break;
       case 3:
        result=trainee *cantidad;
       
           break;
       case 4:
        result=junior*cantidad;
      
           break;
  }
   

document.getElementById("totalPagar").value=result;



let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("usuario-mail");


quitarClaseError();

if(nombre.value==="")
{
    alert("El campo nombre no puede estar vacío");
    nombre.classList.add("is-invalid");
    nombre.focus();
    document.getElementById("totalPagar").value ="";    
    return ;
}

if(apellido.value==="")
{
    alert("El campo Apellido no puede estar vacío");
    apellido.classList.add("is-invalid");
    apellido.focus();
    document.getElementById("totalPagar").value ="";    
    return ;
}


if(mail.value==="")
{
    alert("Debe ingresar un correo válido");
    mail.classList.add("is-invalid");
    mail.focus();
    document.getElementById("totalPagar").value ="";    
    return ;
}

 // Para determinar si el correo electrónico es válido o no
 const emailValido = mail => 
 {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
 }

 if(!emailValido(mail.value))
 {
    alert("Debe ingresar un correo válido");
    mail.classList.add("is-invalid");
    mail.focus();
    return ;
 }


 if( (cantidad<=0) )
// if( (cantidad.value<=0) || (isNaN(cantidad.value)))
 {
     alert("Debe ingresar números válidos");
     document.getElementById("totalPagar").value ="";  
     cantidad.classList.add("is-invalid");
     cantidad.focus();
      
     return ;
 }

    
} 




function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}







   function reset() 
{
    
    document.getElementById("totalPagar").value ="";    
   
   
}

function resetForm() 
{
document.getElementById("nombre").value ="";    
document.getElementById("apellido").value ="";    
document.getElementById("exampleFormControlInput1").value ="";  
document.getElementById("cantidad").value ="";    
document.getElementById("totalPagar").value ="";    
document.getElementById("categ").value =0;    
}

