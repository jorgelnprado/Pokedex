function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado!</p><p>Por favor digite o nome ou número do pokémon!</p>";
        return;        
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";
    
    for (let dado of dados){
       titulo = dado.titulo.toLowerCase();
       descricao = dado.descricao.toLowerCase();
       tag = dado.tag.toLowerCase();
        if (titulo.includes(campoPesquisa) || tag.includes(campoPesquisa)){
            resultados += `
                        <div class="item-resultado">
                                <h2>${dado.titulo}</h2>
                            <p class="descricao-meta" >${dado.numero}</p>
                            <p class="descricao-meta" >${dado.tipo}</p>
                            <p class="descricao-meta" >${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Pokedex Oficial</a>
                            </div>
                    `
        };      
};

if (!resultados){
    resultados = "<p>Nenhum pokémon encontrado!</p>"
};

section.innerHTML = resultados;
}