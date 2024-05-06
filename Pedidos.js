document.addEventListener("DOMContentLoaded", function () {
    const produtoSelecionado = document.getElementById("PisoseRodapés");
    const areaLabel = document.getElementById("areaLabel");
    const caixasLabel = document.getElementById("caixasLabel");
    const quantidadeDesejadaInput = document.getElementById("metros1");
    const unidadesDeVendaInput = document.getElementById("caixas1");
    const precoInput = document.getElementById("Txtparcial1");

    produtoSelecionado.addEventListener("change", function () {
        const produtoSelecionadoValue = produtoSelecionado.value;
        if (produtoSelecionadoValue === "LEV" || produtoSelecionadoValue === "Mdf") {
            areaLabel.textContent = "Metro:";
            caixasLabel.textContent = "Peças";
        } else {
            areaLabel.textContent = "Área:";
            caixasLabel.textContent = "Caixas";
        }

        quantidadeDesejadaInput.value = "";
        unidadesDeVendaInput.value = "";
        precoInput.value = "";
    });

    quantidadeDesejadaInput.addEventListener("input", function () {
        const produtoSelecionadoValue = produtoSelecionado.value;
        const quantidadeDesejada = quantidadeDesejadaInput.value;
        let unidadesDeVenda = 0;
        let preco = 0;

        if (isNaN(quantidadeDesejada)) {
            alert("Por favor, insira um valor numérico.");
            return;
        }

        if (produtoSelecionadoValue === "LEV" || produtoSelecionadoValue === "Mdf") {
            unidadesDeVenda = Math.ceil(quantidadeDesejada / 2.4);
            preco = unidadesDeVenda * 10;
        } else {
            unidadesDeVenda = Math.ceil(quantidadeDesejada / 1.2);
            preco = unidadesDeVenda * 20;
        }

        unidadesDeVendaInput.value = unidadesDeVenda;
        precoInput.value = preco.toFixed(2);
    });
});