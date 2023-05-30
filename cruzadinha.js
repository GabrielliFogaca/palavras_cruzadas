function validar(input){
    var inserir = input.value.toUpperCase();
    var id = input.id
    if(inserir == id){
        input.style = `background-color: #90EE90 `;
    }else{
        input.style = `background-color: #FF6347 `;
    }
}