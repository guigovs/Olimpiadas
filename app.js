function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um(a) atleta ou esporte!</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dado (resultado da pesquisa)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando como uma div
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }
  
    // Atribui o HTML construído à seção de resultados, atualizando a página
    section.innerHTML = resultados;
}