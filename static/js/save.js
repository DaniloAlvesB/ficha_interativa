function save_ficha(){
    if(localStorage.getItem("name") == null){
        var nome = document.getElementById("name").value;
        localStorage.setItem("name", nome);

        var idade = document.getElementById("age").value;
        localStorage.setItem("age", idade);

        var altura = document.getElementById("height").value;
        localStorage.setItem("height", altura);

        var olhos = document.getElementById("eye").value;
        localStorage.setItem("eye", olhos);

        var cabelo = document.getElementById("hair").value;
        localStorage.setItem("hair", cabelo);

        var desc = document.getElementById("geral_desc").value;
        localStorage.setItem("geral_desc", desc);

        aviso("Informações salvas com sucesso", "text-success")
    }else{
        if(confirm("Já existem dados salvos, clique em OK para substituí-los.")){
            localStorage.removeItem("name");
            save_ficha();
        }
    }
}

function reload_ficha(){
    document.getElementById("name").value = localStorage.getItem("name");

    document.getElementById("age").value = localStorage.getItem("age");

    document.getElementById("height").value = localStorage.getItem("height");

    document.getElementById("eye").value = localStorage.getItem("eye");

    document.getElementById("hair").value = localStorage.getItem("hair");

    document.getElementById("geral_desc").value = localStorage.getItem("geral_desc");

    avisos.innerHTML = "";
}