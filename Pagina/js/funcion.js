document.getElementById("validar").addEventListener("click", Validar)

function Validar(){
    let string1 = (document.getElementById("captcha").innerText)
    let string2 = (document.getElementById("textinput").value);

    if(string1 == string2){
        return alert("Correcto (No eres un robot)");
    }else{
        return alert("Incorrecto (ERES UN ROBOT)");
    }
}