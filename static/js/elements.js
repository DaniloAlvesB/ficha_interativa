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
                <li class="nav-item"><button onclick="versoes_sis(versao_mse)" href="#" class="nav-link text-light ${x3}">Itens</button></li>
                <li class="nav-item"><button onclick="fale_conosco()" href="#" class="nav-link text-light ${x4}">Dados</button></li>
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

}

function render_anota(){
    header_1("", "active", "", "")

    title.innerHTML = `
        <h2 class="m-4 text-center">Anotações</h2>
        <hr class="mx-3">
        <div id="cards"></div>
    `

    conteudo.innerHTML = `
       
    `
}

function manuais(){
    header_mse("", "active", "", "")
    
    conteudo.innerHTML = `
        <h2 class="m-4 text-center">Ajuda</h2>
        <hr class="mx-3">

        <div id="requisitos" style="background-color: rgba(200, 200, 255)">
            <div class="m-4">
                <h4>Manuais e tutoriais</h4>
                
                Sisitema Escola:
                <ul>
                    <li>Hardlock: <a href="#" target="_blank">Manual do Sistema de Hardlock</a></li>
                    <li>Online: <a href="#" target="_blank"> Manula do Sisitema Online</a></li>
                </ul>

                <p>Portal do Aluno: <a href="#" target="_blank">Manual do Portal do Aluno</a></p>

                <p>Vídeos auxiliares: <a href="#" target="_blank">videosauxiliares.com.br</a></p>
            </div>
        </div>

        <div id="requisitos" class="m-4">
            <h4>Requisitos</h4>
            <p>
            Requisitos mínimos recomendados para a máquina servidor:
            </p><li>Corel i3;</li>
            <li>8GB de memória RAM;</li>
            <li>HD com 120GB livres.</li>
            <br>
            Requisitos mínimos recomendados para a máquina do aluno:
            <li>Corel i3;</li>
            <li>4GB de memória RAM;</li>
            <li>HD com 120GB livres.</li>
            <p></p>
        </div>

        <div style="background-color: rgba(200, 200, 255)">
            <h4 class="m-4">Boas práticas</h4>
            <div id="dicasServer" style="background-color: rgba(50, 50, 255); border-radius: 7px;" class="mx-3">
                <div style="background-color: rgba(50, 50, 255); border-radius: 7px;" class="p-3 text-light">
                    <b style="font-size: 115%;">Boas práticas da máquina servidor:</b> a máquina servidor é o centro do sistema, as aulas dependem dela para serem desenvolvidas. É importante que a máquina servidor esteja reservada somente para o sistema, portanto, evite o uso de programas não necessários.
                    <br>
                    A máquina servidor deve conter um IP fixo para que as máquinas dos alunos possam se comunicar com ela. Junto disso o ServerHardkey deve sempre estar aberto para que as aulas funcionem.
                    <br>
                    Não necessariamente precisa-se usar a máquina servidor para acessar o Sistema Escola, você pode acessar o Sistema Escola usando o endereço: IP da máquina servidor + :8080/onbyte.
                    <br>
                    <br>
                    Por exemplo:
                    <br>
                    
                    <li><b>Passo 1 -</b> Pegar o IP da máquina servidor: 192.168.0.1 (é apenas um exemplo);</li>
                    <li><b>Passo 2 -</b> Montar o endereço: 192.168.0.1:8080/onbyte;</li>
                    <li><b>Passo 3 -</b> Depois colocar o endereço no navegador.</li>
                </div>
            </div>

            <br>

            <div id="dicasAluno" style="background-color: rgba(50, 50, 255); border-radius: 7px;" class="mx-3">
                <div style="background-color: rgba(50, 50, 255); border-radius: 7px;" class="p-3 text-light">
                    <b style="font-size: 115%;">Boas práticas da máquina do aluno:</b>: a máquina do aluno é por onde será realizada a aula, ela pode ser um computador, celular, tablet, notebook, etc. É recomendado que essa máquina esteja livre de programas desnecessários para evitar travamentos. Fora isso, recomendamos que assista as aulas pelo Chrome e em tela cheia através do atalho "F11". Orientamos também que seja feita uma limpeza de cache nos navegadores.
                    <br>
                    Para acessar o Portal do Aluno é necessário montar um endereço: IP da máquina servidor + :8082/portalAluno.
                    <br>
                    <br>
                    Por exemplo:
                    <br>
                    
                    <li><b>Passo 1 -</b> Pegar o IP da máquina servidor: 192.168.0.2 (é apenas um exemplo);</li>
                    <li><b>Passo 2 -</b> Montar o endereço: 192.168.0.2:8082/portalAluno;</li>
                    <li><b>Passo 3 -</b> Depois colocar o endereço no navegador.</li>
                </div>
            </div>
            <div class="mx-3">
                <p style="margin: 5px">Fora essas dicas, sempre que notar algo de estranho que atrapalhe a gestão ou os alunos, entre em contato com o suporte para evitar erros maiores.</p>
            </div>
        </div>
    `
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

function versoes_sis(list){
    header_mse("", "", "active", "")
    
    conteudo.innerHTML = `
        <h2 class="m-4 text-center">Versões do Sistema</h2>
        <hr class="mx-3">

        <div id="versoessis" class="mt-4 mx-4">
        </div>
    `

    versoessis.innerHTML = `
        <h4>Sistema Escola</h4>
    `

    for(var i = 0; i < list.length; i++){
        versoessis.innerHTML += `
            <button class="btn btn-primary my-1" onclick="versoes_sis_a(${i})">${list[i][0]}</button>
        `
    }
}

function versoes_sis_a(index){
     conteudo.innerHTML = `
        <div class="d-felx flex-wrap" style="padding-left: 1%;">
            <button onclick="versoes_sis(versao_mse)" style="margin-bottom: -60px; margin-top: 0px;" class="btn btn-primary">< Voltar</button>
            <h2 class="text-center">Versões do Sistema</h2>
        </div>
        
        <hr class="mx-3 mb-3">

        <div class="mx-4">
            <h4>${versao_mse[index][0]}</h4>
            <p>${versao_mse[index][1]}</p>
        </div>
    `
}

function save_sis(x, y){
    localStorage.setItem("VerSis_1", x);
    localStorage.setItem("VerSis_Desc", y);
}

function aviso(texto, color){

    avisos.innerHTML = `
        <li class="${color}">${texto}</li>
    `

}