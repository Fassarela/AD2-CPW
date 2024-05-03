var primeiro = ["<h1>Cimentício Bege</h1>", "Tamanho:87,7 X 87,7cm", "Caixa:1,54m²", "Preço:R$<span style='color: red;'>110,00</span>", '<img src="ad2-png/Piso_Cime_Portinari_150.png" alt="">'];
var segundo =  ["<h1>Decorado</h1>", "Tamanho:60 X 60cm", "Caixa:2,2m²", "Preço:R$<span style='color: red;'>200,00</span>", '<img src="ad2-png/Piso_Deco_Biancogres_150.png" alt="">'];
var terceiro = ["<h1>Marmorizado</h1>", "Tamanho:90 X 90cm", "Caixa:2,4m²", "Preço:R$<span style='color: red;'>280,00</span>", '<img src="ad2-png/Piso_Marm_Biancogres_150.png" alt="">']
var quarto = ["<h1>Amadeirado Nogueira</h1>", "Tamanho:19,7 X 120cm", "Caixa:1,42m²", "Preço:R$<span style='color: red;'>150,00</span>", '<img src="ad2-png/Piso_Amad_Eliane_150.png" alt="">']

var price = document.getElementById("preco")
var png = document.getElementById("img")
var caso = document.getElementById("case")
var legend = document.getElementById("ponto")

function show(dado){
    switch(dado){
        case "primeiro":
            price.innerHTML = primeiro[2] + '<br>' + primeiro[3] + '<br>'
            png.innerHTML = primeiro[4]
            legend.innerHTML = primeiro[0] + '<br>' + primeiro[1]
            break
        case "segundo":
            price.innerHTML = segundo[2] + '<br>' + segundo[3]
            png.innerHTML = segundo[4]
            legend.innerHTML = segundo[0] + '<br>' + segundo[1] 
            break
        case "terceiro":
            price.innerHTML = terceiro[2] + '<br>' + terceiro[3]
            png.innerHTML = terceiro[4]
            legend.innerHTML = terceiro[0] + '<br>' + terceiro[1]
            break;
        case "quarto":
            price.innerHTML = quarto[2] + '<br>' + quarto[3]
            png.innerHTML = quarto[4]
            legend.innerHTML = quarto[0] + '<br>' + quarto[1] 
            break
        
    }    
}