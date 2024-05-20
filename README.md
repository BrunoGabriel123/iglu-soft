# Lanchonete

Este software é uma solução proposta para para uma _startup_ de lanchonete. Para desenvolvê-la foram utilizadas as tecnologias de .net Core para o _Backend_ e Angular 7 para o _Frontend_.

## Instruções para rodar o sistema com docker

O sistema foi desenvolvido utilizando containers no docker. Com o docker devidamente instalado siga as seguintes instruções:

Para iniciar o sistema bastar entra na pastas Lanchonete e executar o appstart.bat. Depois de iniciado todos os serviços do docker, o sistema de _Frontend_ vai responder em [http://localhost](http://localhost) (está utilizando a porta 80). O backend irá responder em [http://localhost:5000/api/values](http:localhost:5000/api/values).

Para desligar o sistema use o appstop.bat.

## Instruções para rodar o front-end sem docker

1) git clone https://github.com/BrunoGabriel123/iglu-soft.git
2) cd iglu-soft
3) cd pedido-ui
4) npm install
5) npm start

## Instruções para rodar o back-end sem docker

1) git clone https://github.com/BrunoGabriel123/iglu-soft.git
2) Abra o Visual Studio na solution, de um clean e um build

## Problema proposto

Somos uma _startup_ do ramo de alimentos e precisamos de uma aplicação web para gerir nosso negócio. Nossa especialidade é a venda de lanches, de modo que alguns lanches são opções de cardápio e outros podem conter ingredientes personalizados.

A seguir, apresentamos a lista de ingredientes disponíveis:

### INGREDIENTE VALOR
Alface R$ 0.40
Bacon R$ 2,00
Hambúrguer de carne R$ 3,00
Ovo R$ 0,80
Queijo R$ 1,50

Segue as opções de cardápio e seus respectivos ingredientes:

### LANCHE INGREDIENTES
X-Bacon Bacon, hambúrguer de carne e queijo
X-Burger Hambúrguer de carne e queijo
X-Egg Ovo, hambúrguer de carne e queijo
X-Egg Bacon Ovo, bacon, hambúrguer de carne e queijo

O valor de cada opção do cardápio é dado pela soma dos ingredientes que compõe o lanche. Além destas opções, o cliente pode personalizar seu lanche e escolher os ingredientes que desejar. Nesse caso, o preço do lanche também será calculado pela soma dos ingredientes.

Existe uma exceção à regra para o cálculo de preço, quando o lanche pertencer à uma promoção. A seguir, apresentamos a lista de promoções e suas respectivas regras de negócio:

### PROMOÇÃO REGRA DE NEGÓCIO
Light Se o lanche tem alface e não tem bacon, ganha 10% de desconto.
Muita carne A cada 3 porções de carne o cliente só paga 2. Se o lanche tiver 6 porções, o cliente pagará 4. Assim por diante...
Muito queijo A cada 3 porções de queijo o cliente só paga 2. Se o lanche tiver 6 porções, o cliente pagará 4. Assim por diante...
Inflação Os valores dos ingredientes são alterados com frequência e não gastaríamos que isso influenciasse nos testes automatizados.

## Solução implementa

A solução foi desenvolvida utilizando um backend em .NET Core. O backend é uma API REST que recebe as solicitações do frontend, realiza os cálculos dos lanches e persiste as informações. Para o desenvolvimento da API, foi utilizado o Visual Studio 2017 Community.

A aplicação frontend foi desenvolvida em Angular e é responsável por exibir os lanches de forma intuitiva, permitindo a customização dos mesmos e, finalmente, comunicando-se com o backend para persistir os dados. O desenvolvimento do frontend foi feito no Visual Studio Code.

### Backend

O backend foi projetado com uma arquitetura semelhante à de microserviços. Devido à simplicidade e à ausência de persistência, o sistema foi dividido em duas camadas: API e Domínio.

#### Camada API

A camada de API é utilizada principalmente para a comunicação do mundo externo com o Domínio. Outra responsabilidade da camada é converter os tipos enviados pelo cliente para os tipos conhecidos pelo Domínio. As classes responsáveis por essa conversão estão na pasta Factory. Os tipos usados para comunicação externa são chamados de ViewModel.

#### Camada Domínio

A camada de Domínio foi projetada para seguir um modelo de domínio rico. Dentro desse projeto, foram adicionadas as classes de Domínio que representam os objetos do sistema, incluindo lanches, pedidos, ingredientes, etc.

Este modelo está organizado na pasta Model. Abaixo, uma lista das classes e suas funções:

Inflação: Classe que representa a inflação do lanche, contendo o valor da inflação e a regra de cálculo.
Ingrediente: Representa um ingrediente do lanche, com valor e nome.
Lanche: Representa os lanches oferecidos pela startup Lanchonete.
LancheItem: Cada lanche pode ter ingredientes diferentes e em quantidades variadas. Esta classe permite aumentar ou diminuir a quantidade de um ingrediente.
Pedido: Classe responsável por agrupar todos os itens de um lanche e registrar as promoções válidas. Calcula o valor final do lanche após todas as modificações.
PromocaoItemLight, PromocaoItemMuitaCarne, PromocaoItemMuitoQueijo: Verificam se um pedido pode receber o desconto da promoção e calculam o valor do desconto.
As classes de comunicação com a API são os Services, responsáveis por orquestrar os processos de negócio. Abaixo, uma breve descrição das principais classes:

PedidoService: Orquestra o processo de negócio do pedido, aplicando as promoções válidas, realizando o cálculo do pedido e, finalmente, delegando a persistência do pedido.
PromocaoService: Funciona como um composite, onde todas as promoções são listadas e aplicadas ao pedido.
Para simular o banco de dados, foram criadas factories, localizadas na pasta Factory.

#### Projeto de teste

O projeto de teste foi criado para facilitar o refatoramento do código e garantir a segurança no desenvolvimento. Foram criados testes para as principais funcionalidades do sistema. Para o desenvolvimento dos testes, foi utilizado o xUnit.

### Frontend

 sistema frontend possui duas telas: Lanche e Pedido.

Na tela de Lanche, são listados todos os lanches disponíveis no sistema. Ao selecionar um lanche, são exibidos seus ingredientes, permitindo que o usuário modifique a quantidade de cada ingrediente. O cliente pode então finalizar ou cancelar o pedido.

Também é possível criar um lanche personalizado. Nessa opção, são exibidos todos os ingredientes para que o cliente possa modificar a quantidade de cada um.

Ao finalizar o pedido, o sistema frontend envia o lanche criado pelo cliente para o backend, que realiza os cálculos. Após a conclusão dos cálculos, o cliente é redirecionado para a tela de Pedido.

Na tela Pedido, são listados todos os pedidos feitos pelos clientes.
