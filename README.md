# Data Lovers

## Índice

* [1. Introdução](#1-preâmbulo)
* [2. Histórias de usuário](#2-Histórias-de-usuário)
* [3. Desenho de interface do usuário](#3-Desenho-de-interface-do-usuário)
* [4. Protótipo de baixa fidelidade](#4-Protótipo-de-baixa-fidelidade)
* [5. Problemas detectados](#5-Problemas-detectados)

***

## 1. Introdução

Bem vindo(a) ao database de personagens da série **Rick e Morty**!

A série trata das aventuras de Rick Sanchez, um cientista brilhante (com sérios problemas de alcoolismo) e seu sobrinho Morty Smith (não tão brilhante) através de galáxias e realidades paralelas onde encontram todos os tipos de personagens estranhos e, inclusive, outras versões de si mesmos.
Após apenas 31 episódios de aventuras (até a entrega desse projeto) foram introduzidos 493 personagens diferentes na série e, vamos ser sinceros, fica difícil acompanhar o destino de cada personagem - especialmente quando vários também se chamam Rick e Morty e acontecem inusitadas trocas de realidades!

Com isso em mente, criamos um banco de dados que usa informações fornecidas pela (Rick and Morty API)[https://rickandmortyapi.com/] para facilitar a busca de personagens da série e obter informações dos mesmos através de cards e opções de busca.

## 2. Histórias de usuário

A aplicação foi criada com base nas necessidades das próprias desenvolvedoras como fãs da série, além de uma breve pesquisa com outros fãs para descobrir algumas de suas necessidades.
Identificamos que com tantos episódios onde são introduzidos dezenas de personagens (como TV intergalática e a Cidadela dos Ricks, por exempo) não é fácil saber o paradeiro de, até mesmo, alguns dos personagens principais. Nossa aplicação busca esclarecer essas dúvidas e permite ao usuário que identifique onde cada personagem está, se está vivo ou morto e de onde ele vem, quando as informações foram, de alguma forma, explicadas pela série.

Definimos as seguintes histórias de usuário para conclusão dessa aplicação:

#### História 1 - Como usuário, eu quero ter visibilidade de todos os personagens da série

#### História 2 - Como usuário, eu gostaria de filtrar as informações principais dos personagens através de um link rápido ou um campo de busca

#### História 3 - Como usuário, eu gostaria de acessar o site do meu dispositivo móvel

#### História 4 - Como usuário, eu gostaria de receber uma estatística ao aplicar um filtro

## 3. Desenho de interface do usuário

No primeiro rascunho da aplicação, optamos por exibir apenas as informações mais relevantes para acompanhamento da saga dos personagens ao longo da série. São as seguintes: 
- Imagem
- Nome
- Status
- Origem 
- Localização atual

O usuário poderia filtrar os cards pelas seguintes opções por menus dropdown:
- Status (vivo, morto, indefinido)
- Origem
- Localização atual

Também incluímos um campo de busca para o usuário inserir qualquer informação disponível dos cards, e exibir os cards que possuiam parte da informação imputada.

### Por que cards?
Optamos por exibir as informações em cards por 2 motivos:

#### Alta quantidade de personagens
Dessa forma podermos exibir as fotos e informações individualmente para facilitar a visualização do usuário, dado que alguns dos personagens podem parecer "novos" pois são exibidos por um curto período de tempo.

#### Visualização das opções de filtro
Quando uma opção de filtro é selecionada, ou um texto inserido no campo de busca, são exibidos apenas os cards que fazem parte daquela categoria, e dessa forma o usuário pode ter uma visão mais ampla sobre o filtro aplicado.

## 4. Protótipo de baixa fidelidade
Você pode [ver aqui](https://marvelapp.com/ce7e2d7/screen/61254595) o primeiro protótipo da aplicação, que segue o desenho de interface de usuário descrito acima.

## 5. Problemas detectados

Durante a etapa de testes de usabilidade, percebemos que a ordem dos cards aparecia de forma confusa e era uma necessidade do usuário de organiza-las de alguma forma, portanto adicionamos um checkbox no menu superior para ordenar os cards apresentados na tela por ordem alfabética dos nomes dos personagens.

Inicialmente, pensamos em deixar disponível na tela inicial os cards de todos os 493 personagens. Identificamos, mais tarde, que era indesejável para o usuário que estivesse utilizando internet móvel ou de baixa velocidade carregar localmente todas essas informações, incluindo imagens. Portanto, atualmente, a tela inicial da aplicação carrega as imagens de 8 personagens aleatórios e há um botão que permite exibir todos os personagens, se assim o usuário desejar.

Também percebemos que era desnecessário ter um menu de busca que fosse aberto para todas as informações disponíveis nos cards. É mais interessante para o usuário navegar pelos menus dropdown para analisar as opções de filtro, e fica faltando somente a busca pelo nome. Portanto o campo de busca filtra apenas as informações contidas no campo "nome" dos cards.
