# Lanchonete

Este software é uma solução proposta para para uma _startup_ de lanchonete. Para desenvolvê-la foram utilizadas as tecnologias de .net Core para o _Backend_ e Angular 7 para o _Frontend_.


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

* Spring

* Java 11

* Gradle

A aplicação frontend foi desenvolvida em Angular e é responsável por exibir os lanches de forma intuitiva, permitindo a customização dos mesmos e, finalmente, comunicando-se com o backend para persistir os dados. O desenvolvimento do frontend foi feito no Visual Studio Code.

### Frontend

1) git clone https://github.com/BrunoGabriel123/iglu-soft.git
2) cd iglu-soft
3) cd pedido-ui
4) npm install
5) npm start

 sistema frontend possui duas telas: Lanche e Pedido.

Na tela de Lanche, são listados todos os lanches disponíveis no sistema. Ao selecionar um lanche, são exibidos seus ingredientes, permitindo que o usuário modifique a quantidade de cada ingrediente. O cliente pode então finalizar ou cancelar o pedido.

Também é possível criar um lanche personalizado. Nessa opção, são exibidos todos os ingredientes para que o cliente possa modificar a quantidade de cada um.

Ao finalizar o pedido, o sistema frontend envia o lanche criado pelo cliente para o backend, que realiza os cálculos. Após a conclusão dos cálculos, o cliente é redirecionado para a tela de Pedido.

Na tela Pedido, são listados todos os pedidos feitos pelos clientes.
