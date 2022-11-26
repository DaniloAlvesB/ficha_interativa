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
                <li class="nav-item"><button onclick="" href="#" class="nav-link text-light ${x3}">Itens</button></li>
                <li class="nav-item"><button onclick="" href="#" class="nav-link text-light ${x4}">Dados</button></li>
            </ul>
        </header>
    `

}

function render_main(){
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

function render_anota(){
    header_1("", "active", "", "");

    title.innerHTML = `
            <h2 class="m-4 text-center">Anotações</h2>
            <hr class="mx-3">
            <div id="cards"></div>
    `

    main.innerHTML = `
        test
    `
    /*
    for(var i = 0; i < 100; i++){
        if(localStorage.getItem("anota_" + i) != null){
            main.innerHTML += `
                Abotação ${i}
            `
        }
    }
    */
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