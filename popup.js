console.log("Hola, mundo");




document.addEventListener("DOMContentLoaded", function () {
  // Get the select element
  var selectedCategoryAmericanas = document.querySelector('#categorySelectAmericanas');
  var selectedCategoryAmazon = document.querySelector('#categorySelectAmazon');

  // Save input values to local storage
  function saveInputValues() {
    localStorage.setItem('custoBaseProdutoValue', document.getElementById('custoBaseProduto').value);
    localStorage.setItem('transporteValue', document.getElementById('transporte').value);
    localStorage.setItem('custoValue', document.getElementById('custo').value);
    localStorage.setItem('preçoFinalLIValue', document.getElementById('preçoFinalLI').value);
    localStorage.setItem('preçoFinalAmericanasValue', document.getElementById('preçoFinalAmericanas').value);
    localStorage.setItem('preçoFinalMercadoLivrePMValue', document.getElementById('preçoFinalMercadoLivrePM').value);
    localStorage.setItem('preçoFinalMercadoLivreCValue', document.getElementById('preçoFinalMercadoLivreC').value);
    localStorage.setItem('preçoFinaMagaluValue', document.getElementById('preçoFinaMagalu').value);
    localStorage.setItem('preçoFinalAmazonValue', document.getElementById('preçoFinalAmazon').value);
    localStorage.setItem('preçoFinalShopeePValue', document.getElementById('preçoFinalShopeeP').value);
    localStorage.setItem('preçoFinalShopeeFValue', document.getElementById('preçoFinalShopeeF').value);
    console.log('save');
  }


  // Retrieve and set input values from local storage
  function setInputValues() {
    document.getElementById('custo').value = localStorage.getItem('custoValue') || '';
    document.getElementById('transporte').value = localStorage.getItem('transporteValue') || '';
    document.getElementById('custoBaseProduto').value = localStorage.getItem('custoBaseProdutoValue') || '';
    document.getElementById('preçoFinalLI').value = localStorage.getItem('preçoFinalLIValue') || '';
    document.getElementById('preçoFinalAmericanas').value = localStorage.getItem('preçoFinalAmericanasValue') || '';
    document.getElementById('preçoFinalMercadoLivrePM').value = localStorage.getItem('preçoFinalMercadoLivrePMValue') || '';
    document.getElementById('preçoFinalMercadoLivreC').value = localStorage.getItem('preçoFinalMercadoLivreCValue') || '';
    document.getElementById('preçoFinaMagalu').value = localStorage.getItem('preçoFinaMagaluValue') || '';
    document.getElementById('preçoFinalAmazon').value = localStorage.getItem('preçoFinalAmazonValue') || '';
    document.getElementById('preçoFinalShopeeP').value = localStorage.getItem('preçoFinalShopeePValue') || '';
    document.getElementById('preçoFinalShopeeF').value = localStorage.getItem('preçoFinalShopeeFValue') || '';
    console.log('set');
  }

  //clean storage value and input values

  function cleanSavedInputValues() {
    localStorage.removeItem('custoValue');
    document.getElementById('custo').value = '';

    localStorage.removeItem('transporteValue');
    document.getElementById('transporte').value = '';

    localStorage.removeItem('custoBaseProdutoValue');
    document.getElementById('custoBaseProduto').value = '';

    localStorage.removeItem('preçoFinalLIValue');
    document.getElementById('preçoFinalLI').value = '';

    localStorage.removeItem('preçoFinalAmericanasValue');
    document.getElementById('preçoFinalAmericanas').value = '';

    localStorage.removeItem('preçoFinalMercadoLivrePMValue');
    document.getElementById('preçoFinalMercadoLivrePM').value = '';

    localStorage.removeItem('preçoFinalMercadoLivreCValue');
    document.getElementById('preçoFinalMercadoLivreC').value = '';

    localStorage.removeItem('preçoFinaMagaluValue');
    document.getElementById('preçoFinaMagalu').value = '';

    localStorage.removeItem('preçoFinalAmazonValue');
    document.getElementById('preçoFinalAmazon').value = '';

    localStorage.removeItem('preçoFinalShopeePValue');
    document.getElementById('preçoFinalShopeeP').value = '';

    localStorage.removeItem('preçoFinalShopeeFValue');
    document.getElementById('preçoFinalShopeeF').value = '';

    console.log('clean');
  }


  //charge storage values
  setInputValues();


  // Categorias amerricanas
  var arrayA16_5Percent = ["Lavanderia", "Forno/ Fogão/ Mesa/ Bar", "Importação", "Utilidades Plásticas", "Papelaria", "Móveis", "Instrumentos musicais", "Casa e hobby", "Brinquedos, acessórios e brinquedos de bebê"];
  var arrayA16Percent = ["Informática e acessórios", "PC Gamer", "Telefonia fixa", "Telefonia", "Eletrodomésticos", "Eletroportáteis", "Eletrônicos", "DVD e Blu-ray", "Páscoa", "Câmeras e consoles", "Climatização", "Weareble", "Tablets", "Áudio", "PCs"];
  var arrayA12Percent = ["Bomboniere", "Pet Shop", "Mercearia matinal", "Bebidas", "Mercearia básica", "Biscoitos", "Limpeza", "Alimentos", "Guloseimas", "Mercearia", "complementar"];
  var arrayA17Percent = ["Higiene pessoal", "Fraldas e higiene", "Beleza e Perfumaria", "Suplementos e vitaminas", "Saúde e bem estar", "Livros", "Esporte e Lazer", "Construção eferramentas", "Agro, Indústria eComércio"];
  var arrayA19Percent = ["Acessóriosde moda", "Calçados", "Roupas infantis", "Relógios", "Moda íntima feminina e masculina", "Meias", "Roupas femininas e masculinas", "Malas, mochilas e acessórios", "Moda esportiva"];


  // Create options for Americanas
  createOptions(selectedCategoryAmericanas, arrayA16Percent, '16%');
  createOptions(selectedCategoryAmericanas, arrayA16_5Percent, '16.5%');
  createOptions(selectedCategoryAmericanas, arrayA12Percent, '12%');
  createOptions(selectedCategoryAmericanas, arrayA17Percent, '17%');
  createOptions(selectedCategoryAmericanas, arrayA19Percent, '19%');

  //valores Categorias Amazon

  //categorias amazon
  const categories = {
    'Videogames e consoles (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Acessórios para eletrônicos e para PC¹ (15% até R$ 100,00)': {
      percentage: 15,
      value: 1.00,
    },
    'Acessórios para eletrônicos e para PC¹ (10% para o excedente acima de R$ 100,00)': {
      percentage: 10,
      value: 1.00,
    },
    'Roupas e acessórios (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Calçados, bolsas e óculos escuros (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Bagagem e acessórios de viagem (14%)': {
      percentage: 14,
      value: 1.00,
    },
    'Relógios (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Joias (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Livros (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'TV, áudio e cinema em casa (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Eletrônicos portáteis (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Celulares (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Câmera e fotografia (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Casa (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Ferramentas e Construção (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Cozinha (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'PC (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Papelaria e Escritório (14%)': {
      percentage: 14,
      value: 1.00,
    },
    'Esportes, aventura e lazer (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Eletrodomésticos de linha branca (8%)': {
      percentage: 8,
      value: 1.00,
    },
    'Ar-Condicionado (8%)': {
      percentage: 8,
      value: 1.00,
    },
    'Móveis² (15% até R$ 200,00)': {
      percentage: 15,
      value: 1.00,
    },
    'Móveis² (9% para o excedente acima de R$ 200,00)': {
      percentage: 9,
      value: 1.00,
    },
    'Brinquedos e jogos (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Produtos para bebês (11%)': {
      percentage: 11,
      value: 1.00,
    },
    'Saúde e cuidados pessoais (10%)': {
      percentage: 10,
      value: 1.00,
    },
    'Beleza (13%)': {
      percentage: 13,
      value: 1.00,
    },
    'Eletroportáteis de cuidado pessoal (11%)': {
      percentage: 11,
      value: 1.00,
    },
    'Jardim e Piscina (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Vídeo e DVD (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Música (CDs, LPs etc) (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Instrumentos musicais e acessórios (15%)': {
      percentage: 15,
      value: 1.00,
    },
    'Peças e acessórios automotivos (12%)': {
      percentage: 12,
      value: 1.00,
    },
    'Pneus e rodas (10%)': {
      percentage: 10,
      value: 1.00,
    },
    'Produtos para animais de estimação (11%)': {
      percentage: 11,
      value: 1.00,
    },
    'Comidas e bebidas (8%)': {
      percentage: 8,
      value: 1.00,
    },
    'Bebidas alcoólicas (10%)': {
      percentage: 10,
      value: 1.00,
    },
    'Indústria e Ciência (10%)': {
      percentage: 10,
      value: 2.00,
    },
    'Demais categorias (15%)': {
      percentage: 15,
      value: 1.00,
    },
  };

  //Categorias Amazon
  for (var category in categories) {
    createOptions(selectedCategoryAmazon, [category], '');

  }

  //categorias amazon
  var categoryInfoAmazon;
  var cAValue;
  var percentageAmazon;

  var selectedCategoryDefault = selectedCategoryAmazon.options[selectedCategoryAmazon.selectedIndex].text;
  if (categories.hasOwnProperty(selectedCategoryDefault)) {
    categoryInfoAmazon = categories[selectedCategoryDefault];
    percentageAmazon = categoryInfoAmazon.percentage / 100;
    cAValue = categoryInfoAmazon.value;

    console.log(`${selectedCategoryDefault}`)
    console.log(percentageAmazon)
    console.log(cAValue)
  }

  //final categorias amazon


  // crear opciones segun el producto y categorias de los arrays
  function createOptions(selectElement, array, percentage) {

    var optGroup = document.createElement('optgroup');
    optGroup.label = percentage;
    array.forEach(function (category) {
      var option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      optGroup.appendChild(option);
    });

    //crear categorias
    selectElement.appendChild(optGroup);
  }
  //final de codigo Americanas

  init();

  function init() {
    // start calculations 
    custoLucroIdeal();

    //click en calcular
    document.getElementById("calcularButton").addEventListener("click", custoLucroIdeal);

    //click limpiar
    document.getElementById("limpar").addEventListener("click", cleanSavedInputValues);
    document.getElementById("limpar").addEventListener("click", custoLucroIdeal);

    document.querySelectorAll('input').forEach(function (InputEvent) {
      InputEvent.addEventListener('input', custoLucroIdeal)
      InputEvent.addEventListener('input', saveInputValues)

    })

    // Add event listener to selectedCategoryAmericanas
    selectedCategoryAmericanas.addEventListener('change', custoLucroIdeal);

    // Options
    var selectOption = document.getElementById('selectOption');
    var optionContents = document.getElementsByClassName('option-content');
    var selectedValue = localStorage.getItem('selectedOptionMKT');

    if (localStorage.getItem('selectedOptionMKT') !== null) {
      // Find the index of the option matching the selectedValue
      var selectedIndex = Array.from(selectOption.options).findIndex
        (function (option) {
          return option.value === selectedValue;
        })

      optionsMKT();
    }

    if (selectedIndex !== -1) {
      selectOption.selectedIndex = selectedIndex;
    }

    selectOption.addEventListener('change', function () {

      selectedValue = selectOption.value;


      localStorage.setItem('selectedOptionMKT', selectedValue);


      optionsMKT();

    });

    function optionsMKT() {

      if (selectedValue === 'Option1') {
        for (var i = 0; i < optionContents.length; i++) {
          optionContents[i].style.display = 'block';

        }
      } else {
        for (var i = 0; i < optionContents.length; i++) {
          optionContents[i].style.display = 'none';

        }
        var selectedContent = document.getElementById('content' + selectedValue);
        if (selectedContent) {
          selectedContent.style.display = 'block';
        }
      }
    }

    //Final de filtro de market place


    function custoLucroIdeal() {
      // Base
      var transporte = Number(document.getElementById("transporte").value);
      var custoBaseProduto = Number(document.getElementById("custoBaseProduto").value);
      var custo = custoBaseProduto + transporte;
      document.getElementById("custo").textContent = 'Custo: ' + custo.toFixed(2).replace('.', ',');

      var preçoRecomendado = custo / 0.7
      var lucroIdeal = preçoRecomendado - custo;

      document.getElementById('preco_recomendado_de_venta').textContent = preçoRecomendado.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal').textContent = lucroIdeal.toFixed(2).replace('.', ',');

      //Final base

      // Loja integrada MercadoPago
      var preçoRecomendadoLojaIntegradaMP = (custo / 0.7 + 4.99) / (1 - 0.05);
      var comisaoLojaIntragradaMP = preçoRecomendadoLojaIntegradaMP * 0.05 + 4.99;
      var lucroIdealLojaIntegradaMP = preçoRecomendadoLojaIntegradaMP - custo - comisaoLojaIntragradaMP;

      document.getElementById('preco_recomendado_LojaIntegrada_MP').textContent = preçoRecomendadoLojaIntegradaMP.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_LojaIntegrada_MP').textContent = lucroIdealLojaIntegradaMP.toFixed(2).replace('.', ',');

      var preçoFinalLI = document.getElementById('preçoFinalLI').value;
      var lucroLojaIntegrada_MP = preçoFinalLI - custo - comisaoLojaIntragradaMP;
      document.getElementById('lucroLojaIntegrada_MP').textContent = lucroLojaIntegrada_MP.toFixed(2).replace('.', ',');

      //Final Loja interada Lucro

      // Americanas Lucro

      var commissionPercentageAmericanas;
      if (arrayA12Percent.includes(selectedCategoryAmericanas.value)) {
        commissionPercentageAmericanas = 0.12;
      } else if (arrayA16_5Percent.includes(selectedCategoryAmericanas.value)) {
        commissionPercentageAmericanas = 0.165;
      } else if (arrayA16Percent.includes(selectedCategoryAmericanas.value)) {
        commissionPercentageAmericanas = 0.16;
      } else if (arrayA17Percent.includes(selectedCategoryAmericanas.value)) {
        commissionPercentageAmericanas = 0.17;
      } else if (arrayA19Percent.includes(selectedCategoryAmericanas.value)) {
        commissionPercentageAmericanas = 0.19;
      }


      var preçoRecomendadoAmericanas = (custo / 0.7) / (1 - commissionPercentageAmericanas);
      var comisaoAmericanas = preçoRecomendadoAmericanas * commissionPercentageAmericanas;
      var lucroIdealAmericanas = preçoRecomendadoAmericanas - custo - comisaoAmericanas;

      document.getElementById('preço_recomendado_Americanas').textContent = preçoRecomendadoAmericanas.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_Americanas').textContent = lucroIdealAmericanas.toFixed(2).replace('.', ',');

      var preçoFinalAmericanas = document.getElementById('preçoFinalAmericanas').value;
      var lucroAmericanas = preçoFinalAmericanas - custo - comisaoAmericanas;
      document.getElementById('lucroAmericanas').textContent = lucroAmericanas.toFixed(2).replace('.', ',');

      //Final americanas Lucro


      var envioFreteGratisML = 22.74;
      //Mercado Livre Lucro Premium

      var preço_recomendado_MercadoLivrePM = ((custo / 0.7) + 6) / (1 - 0.195);
      var comisaoMercadoLivrePM = (preço_recomendado_MercadoLivrePM * 0.195) + 6;

      if (preço_recomendado_MercadoLivrePM >= 79) {
        preço_recomendado_MercadoLivrePM = preço_recomendado_MercadoLivrePM + envioFreteGratisML;
        comisaoMercadoLivrePM = comisaoMercadoLivrePM + envioFreteGratisML;

        var lucroIdeal_MercadoLivrePM = preço_recomendado_MercadoLivrePM - custo - comisaoMercadoLivrePM;
        document.getElementById('preço_recomendado_MercadoLivrePM').textContent = preço_recomendado_MercadoLivrePM.toFixed(2).replace('.', ',') + ' | produto acima de 79R$ frete gratis obrigatorio: ' + envioFreteGratisML.toFixed(2).replace('.', ',');
        document.getElementById('lucroIdeal_MercadoLivrePM').textContent = lucroIdeal_MercadoLivrePM.toFixed(2).replace('.', ',');

        var preçoFinalMercadoLivrePM = document.getElementById('preçoFinalMercadoLivrePM').value;
        var lucroMercadoLivrePM = preçoFinalMercadoLivrePM - custo - comisaoMercadoLivrePM;
        document.getElementById('lucroMercadoLivrePM').textContent = lucroMercadoLivrePM.toFixed(2).replace('.', ',');

      } else {
        var lucroIdeal_MercadoLivrePM = preço_recomendado_MercadoLivrePM - custo - comisaoMercadoLivrePM;
        document.getElementById('preço_recomendado_MercadoLivrePM').textContent = preço_recomendado_MercadoLivrePM.toFixed(2).replace('.', ',');
        document.getElementById('lucroIdeal_MercadoLivrePM').textContent = lucroIdeal_MercadoLivrePM.toFixed(2).replace('.', ',');

        var preçoFinalMercadoLivrePM = document.getElementById('preçoFinalMercadoLivrePM').value;
        var lucroMercadoLivrePM = preçoFinalMercadoLivrePM - custo - comisaoMercadoLivrePM;
        document.getElementById('lucroMercadoLivrePM').textContent = lucroMercadoLivrePM.toFixed(2).replace('.', ',');
      }

      //Final Mercado Livre Lucro PM

      //Mercado Livre Lucro Classica

      var preço_recomendado_MercadoLivreC = ((custo / 0.7) + 6) / (1 - 0.15);
      var comisaoMercadoLivreC = (preço_recomendado_MercadoLivreC * 0.15) + 6;

      if (preço_recomendado_MercadoLivreC >= 79) {
        preço_recomendado_MercadoLivreC = preço_recomendado_MercadoLivreC + envioFreteGratisML;
        comisaoMercadoLivreC = comisaoMercadoLivreC + envioFreteGratisML;

        var lucroIdeal_MercadoLivreC = preço_recomendado_MercadoLivreC - custo - comisaoMercadoLivreC;
        document.getElementById('preço_recomendado_MercadoLivreC').textContent = preço_recomendado_MercadoLivreC.toFixed(2).replace('.', ',');
        document.getElementById('lucroIdeal_MercadoLivreC').textContent = lucroIdeal_MercadoLivreC.toFixed(2).replace('.', ',');

        var preçoFinalMercadoLivreC = document.getElementById('preçoFinalMercadoLivreC').value;
        var lucroMercadoLivreC = preçoFinalMercadoLivreC - custo - comisaoMercadoLivreC;
        document.getElementById('lucroMercadoLivreC').textContent = lucroMercadoLivreC.toFixed(2).replace('.', ',');

      } else {

        var lucroIdeal_MercadoLivreC = preço_recomendado_MercadoLivreC - custo - comisaoMercadoLivreC;
        document.getElementById('preço_recomendado_MercadoLivreC').textContent = preço_recomendado_MercadoLivreC.toFixed(2).replace('.', ',');
        document.getElementById('lucroIdeal_MercadoLivreC').textContent = lucroIdeal_MercadoLivreC.toFixed(2).replace('.', ',');

        var preçoFinalMercadoLivreC = document.getElementById('preçoFinalMercadoLivreC').value;
        var lucroMercadoLivreC = preçoFinalMercadoLivreC - custo - comisaoMercadoLivreC;
        document.getElementById('lucroMercadoLivreC').textContent = lucroMercadoLivreC.toFixed(2).replace('.', ',');
      }
      //Final Mercado Livre Lucro Classica

      //Lucro Magalu

      var preço_recomendado_Magalu = ((custo / 0.7) + 3) / (1 - 0.18);
      var comisaoMagalu = (preço_recomendado_Magalu * 0.18) + 3;
      var lucroIdeal_Magalu = preço_recomendado_Magalu - custo - comisaoMagalu;

      document.getElementById('preço_recomendado_Magalu').textContent = preço_recomendado_Magalu.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_Magalu').textContent = lucroIdeal_Magalu.toFixed(2).replace('.', ',');

      var preçoFinaMagalu = document.getElementById('preçoFinaMagalu').value;
      var lucroMagalu = preçoFinaMagalu - custo - comisaoMagalu;
      document.getElementById('lucroMagalu').textContent = lucroMagalu.toFixed(2).replace('.', ',');


      //Lucro Amazon

      var preço_recomendado_Amazon = ((custo / 0.7) + cAValue) / (1 - percentageAmazon);
      var comisaoAmazon = (preço_recomendado_Amazon * percentageAmazon) + cAValue;
      var lucroIdeal_Amazon = preço_recomendado_Amazon - custo - comisaoAmazon;

      document.getElementById('preço_recomendado_Amazon').textContent = preço_recomendado_Amazon.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_Amazon').textContent = lucroIdeal_Amazon.toFixed(2).replace('.', ',');

      var preçoFinalAmazon = document.getElementById('preçoFinalAmazon').value;
      var lucroAmazon = preçoFinalAmazon - custo - comisaoAmazon;
      document.getElementById('lucroAmazon').textContent = lucroAmazon.toFixed(2).replace('.', ',');

      //Final lLucro Amazon

      //Shopee padrão

      var preço_recomendado_ShopeeP = (custo / 0.7) / (1 - 0.14);
      var comisaoShopeeP = (preço_recomendado_ShopeeP * 0.14);
      var lucroIdeal_ShopeeP = preço_recomendado_ShopeeP - custo - comisaoShopeeP;

      document.getElementById('preço_recomendado_ShopeeP').textContent = preço_recomendado_ShopeeP.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_ShopeeP').textContent = lucroIdeal_ShopeeP.toFixed(2).replace('.', ',');

      var preçoFinalShopeeP = document.getElementById('preçoFinalShopeeP').value;
      var lucroShopeeP = preçoFinalShopeeP - custo - comisaoShopeeP;
      document.getElementById('lucroShopeeP').textContent = lucroShopeeP.toFixed(2).replace('.', ',');

      //Final Shopee padrão

      //Shopee Fretes Gratis

      var preço_recomendado_ShopeeF = (custo / 0.7) / (1 - 0.20);
      var comisaoShopeeF = (preço_recomendado_ShopeeF * 0.20);
      var lucroIdeal_ShopeeF = preço_recomendado_ShopeeF - custo - comisaoShopeeF;

      document.getElementById('preço_recomendado_ShopeeF').textContent = preço_recomendado_ShopeeF.toFixed(2).replace('.', ',');
      document.getElementById('lucroIdeal_ShopeeF').textContent = lucroIdeal_ShopeeF.toFixed(2).replace('.', ',');

      var preçoFinalShopeeF = document.getElementById('preçoFinalShopeeF').value;
      var lucroShopeeF = preçoFinalShopeeF - custo - comisaoShopeeF;
      document.getElementById('lucroShopeeF').textContent = lucroShopeeF.toFixed(2).replace('.', ',');

      //Final Shopee Fretes Gratis

    }
    // Add event listener to selectedCategoryAmazon
    selectedCategoryAmazon.addEventListener('change', function () {
      var selectedCategory = this.options[this.selectedIndex].text;

      if (categories.hasOwnProperty(selectedCategory)) {
        categoryInfoAmazon = categories[selectedCategory];
        percentageAmazon = categoryInfoAmazon.percentage / 100;
        cAValue = categoryInfoAmazon.value;
        console.log(`${selectedCategory}`);
        console.log(percentageAmazon);
        console.log(cAValue);

        custoLucroIdeal();

      }
    });
  }
});
