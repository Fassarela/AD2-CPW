function MostraProduto(produto) {
    var produtos = {
        'Standers': {
            titulo: 'Espaçador',
            descricao: 'Standers 2mm',
            imagem: 'ad2-png/Esp_Standers_150.png',
            quantidade: '300 peças',
            preco: 'R$ 50,00'
        },
        'Axtonbr': {
            titulo: 'Argamassa',
            descricao: 'Axton Branca',
            imagem: 'ad2-png/Arga_Axton_150.png',
            quantidade: '20kg',
            preco: 'R$ 40,00'
        },
        'Axton': {
            titulo: 'Rejunte',
            descricao: 'Axton Marfim',
            imagem: 'ad2-png/Rej_Marfin_Axton_150.png',
            quantidade: '1kg',
            preco: 'R$<span >17,00</span>'
        },
        'Moldura': {
            titulo: 'Rodapé',
            descricao: 'Moldufarma MDF Nogueira',
            imagem: 'ad2-png/Rod_MDF_Moldufarma_150.png',
            quantidade: '10cm X 2,40m',
            preco: 'R$ 35,00'
        },
        'Poliestireno': {
            titulo: 'Rodapé',
            descricao: 'Santa Luzia Poliestireno',
            imagem: 'ad2-png/Rod_Poliest_SantaLuzia_150.png',
            quantidade: '10cm X 2,40m',
            preco: 'R$ 78,00'
        },
        'Cola': {
            titulo: 'Cola para Moldura',
            descricao: 'Santa Luzia',
            imagem: 'ad2-png/Cola_Rod_SantaLuzia_150.png',
            quantidade: '400g',
            preco: 'R$ 47,00'
        }
    };

    var produtoSelecionado = produtos[produto];
    if (produtoSelecionado) {
        document.getElementById('caixa-titulo').innerText = produtoSelecionado.titulo;
        document.getElementById('caixa-descricao').innerText = produtoSelecionado.descricao;
        document.getElementById('caixa-imagem').src = produtoSelecionado.imagem;
        document.getElementById('caixa-quantidade').innerText =  produtoSelecionado.quantidade;
        document.getElementById
        var precoFormatado = produtoSelecionado.preco.replace(/\d+,\d+/, '<span class="texto-colorido">$&</span>');
        document.getElementById('caixa-preco').innerHTML = 'Preço: ' + precoFormatado;
        document.getElementById('caixa').style.display = 'block';
    }
}

document.getElementById('fechar-caixa').addEventListener('click', function() {
    document.getElementById('caixa').style.display = 'none';
});