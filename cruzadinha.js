function validar(input){
    var inserir = input.value.toUpperCase();
    var id = input.id
    if(inserir == id){
        input.style = `background-color: green `;
    }else{
        input.style = `background-color: red `;
    }
}