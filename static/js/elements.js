function header_1(x1, x2, x3, x4){

    header.innerHTML = `
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4 text-light">Ficha interativa</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><button onclick="render_main()" class="nav-link text-light ${x1}">Ficha</button></li>
                <li class="nav-item"><button onclick="render_anota()" class="nav-link text-light ${x2}">Anotações</button></li>
                <li class="nav-item"><button onclick="render_itens()" class="nav-link text-light ${x3}">Itens</button></li>
                <li class="nav-item"><button onclick="" href="#" class="nav-link text-light ${x4}">Dados</button></li>
            </ul>
        </header>
    `

}

function render_zero(){
    title.innerHTML = ``
    main.innerHTML = ``
}


//Main
function render_main(){
    render_zero();
    header_1("active", "", "", "");

    title.innerHTML = `
        <h2 class="m-4 text-center">Ficha</h2>
        <hr class="mx-3">
        <div id="cards"></div>
    `

    main.innerHTML = `
        <div id="title"></div>

        <div id="conteudo" class="mt-4 mx-4 d-flex flex-column justufy-content-center">

            <!-- Line 1 -->
            <h4>Informações</h4>
            <h5 id="avisos"></h5>
            <div class="d-flex flex-wrap">

                <!-- Name -->
                <div class="d-flex flex-column m-2">
                    <h5 class="m-1">Nome</h5>
                    <input id="name" type="text" class="form-control" style="width: 250px;">
                </div>

                <!-- Idade -->
                <div class="d-flex flex-column m-2">
                    <h5 class="m-1">Idade</h5>
                    <input id="age" type="number" min="0" class="form-control" style="width: 60px;">
                </div>

                <!-- Altura -->
                <div class="d-flex flex-column m-2">
                    <h5 class="m-1">Altura (m)</h5>
                    <input id="height" type="number" min="0" class="form-control" style="width: 100px;">
                </div>

            </div>

            <!-- Line 2 -->
            <h4 class="mt-5">Descrição</h4>
            <div class="d-flex flex-wrap">

                <!-- Eyes -->
                <div class="d-flex flex-column m-2">
                    <h5 class="m-1">Olhos</h5>
                    <input id="eye" type="text" class="form-control" style="width: 250px;">
                </div>

                <!-- Hair -->
                <div class="d-flex flex-column m-2">
                    <h5 class="m-1">Cabelo</h5>
                    <input id="hair" type="text" class="form-control" style="width: 250px;">
                </div>

            </div>
            <!-- Description -->
            <div class="d-flex flex-column m-2">
                <h5 class="m-1">Descrição geral</h5>
                <textarea id="geral_desc" class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>

        <div class="d-flex justify-content-cente px-4">
            <button id="save" class="my-4 mx-1 btn btn-primary" onclick="reload_ficha()">Recarregar</button>
            <button id="save" class="my-4 mx-1 btn btn-success" onclick="save_ficha()">Salvar alterações</button>
        </div>
    `

    reload_ficha();
}


//Anotações
function render_anota(){
    render_zero();
    header_1("", "active", "", "");

    title.innerHTML = `
            <h2 class="m-4 text-center">Anotações</h2>
            <hr class="mx-3">
            <div id="cards"></div>
    `
    main.innerHTML = `
        <div id="nova" class="mx-4 mt-4 d-flex flex-wrap">
        <button onclick="anota_ap()" class="btn btn-primary">Nova anotação</button>
        </div>
        <div id="lines" class="mx-4"></div>
        <div id="info" class="mx-4"></div>
    `
    var count = 0;
    for(var i = 0; i < 50; i++){
        if(localStorage.getItem("anota_" + i) != null){
            count++
            lines.innerHTML += `
                ${localStorage.getItem("anota_" + i)}
            `
        }
    }
    info.innerHTML = `
        <h5>Total de ${count} itens encontrados (máximo de 50).</h5>
    `
}

function anota_ap(){
    nova.innerHTML = `
        <input id="nome_an" type="text" class="form-control" placeholder="Nome" style="width: 10%;">
        <input id="desc_an" type="text" class="form-control" placeholder="Anotação" style="width: 30%;">
        <button onclick="anota_sm()" class="btn btn-success">Concluir</button>
        <button onclick="render_anota()" class="btn btn-danger">Cancelar</button>
    `
}

function anota_sm(){
    var name = document.getElementById("nome_an").value;
    var desc = document.getElementById("desc_an").value;

    for(var i = 0; i < 50; i++){
        if(localStorage.getItem("anota_" + i) == null){
            var text = `
                <div id="anota_${i}" target="_blank">
                    <div class="card_1_t d-flex justify-content-between">
                        <h3 class="card_1_title">${name}</h3>
                        <button onclick="delete_note('anota_${i}')" type="button" class="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="card_1_b">
                        <p class="text-dark"><b>${desc}</b></p>
                    </div>
                </div>
            `;
            localStorage.setItem("anota_"+i, text)
            break;
        }
    }

    render_anota()
}

function delete_note(x){
    localStorage.removeItem(x);
    render_anota()
}


//Itens
function render_itens(){

    render_zero();
    header_1("","","active","");

    title.innerHTML = `
        <h2 class="m-4 text-center">Itens</h2>
        <hr class="mx-3">
        <div id="cards"></div>
    `
    main.innerHTML = `
        <div id="nova" class="mx-4 mt-4 d-flex flex-wrap">
        <button onclick="itens_ap()" class="btn btn-primary">Novo item</button>
        </div>
        <div id="lines" class="mx-4"></div>
        <div id="info" class="mx-4"></div>
    `
    var count = 0;
    for(var i = 0; i < 50; i++){
    if(localStorage.getItem("item_" + i) != null){
        count++
        lines.innerHTML += `
            ${localStorage.getItem("item_" + i)}
        `
    }
    }
    info.innerHTML = `
        <h5>Total de ${count} itens encontrados (máximo de 100).</h5>
    `

}

function itens_ap(){
    nova.innerHTML = `
        <input id="nome_it" type="text" class="form-control" placeholder="Nome" style="width: 10%;">
        <input id="numb_it" type="number" class="form-control" placeholder="Peso" style="width: 10%;">
        <textarea id="desc_it" class="form-control" placeholder="Descrição" style="width: 30%;"></textarea>
        <button onclick="itens_sm()" class="btn btn-success">Concluir</button>
        <button onclick="render_itens()" class="btn btn-danger">Cancelar</button>
    `
}

function itens_sm(){
    var name = document.getElementById("nome_it").value;
    var desc = document.getElementById("desc_it").value;
    var numb = document.getElementById("numb_it").value;

    for(var i = 0; i < 100; i++){
        if(localStorage.getItem("item_" + i) == null){
            var text = `
                <div id="anota_${i}" target="_blank">
                    <div class="card_1_t d-flex bg-warning justify-content-between">
                        <h3 class="card_1_title">${name} - ${numb}kg</h3>
                        <button onclick="delete_itens('item_${i}')" type="button" class="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="card_1_b">
                        <p class="text-dark"><b>${desc}</b></p>
                    </div>
                </div>
            `;
            localStorage.setItem("item_"+i, text)
            break;
        }
    }

    render_itens()
}

function delete_itens(x){
    localStorage.removeItem(x);
    render_itens()
}



function card_1(title, description, link){
    cards.innerHTML += `
        <a id="card" href="${link}" target="_blank">
            <div class="card_1_t">
                <h3 class="card_1_title">${title}</h3>
                <hr>
            </div>
            <div class="card_1_b">
                <p class="text-dark"><b>${description}</b></p>
            </div>
        </a>
    `
}

function aviso(texto, color){

    avisos.innerHTML = `
        <li class="${color}">${texto}</li>
    `

}