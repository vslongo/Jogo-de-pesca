Documentação do Projeto de Jogo de Pesca
Este projeto de jogo de pesca em Node.js foi desenvolvido por Vinícius Slongo e Thiago Trzcinski.

Visão Geral
O projeto consiste em um jogo de pesca em que o jogador pode selecionar diferentes locais e tentar capturar peixes. O objetivo do jogo é acumular a maior pontuação possível.

Arquitetura
O projeto é estruturado em três classes principais:

Game: Responsável pela lógica geral do jogo, controla o fluxo das rodadas, gerencia as interações do jogador e calcula a pontuação.
Fish: Representa os peixes do jogo, com propriedades como tamanho, peso, força e velocidade.
Location: Representa os diferentes locais onde o jogador pode pescar, com um nome e uma lista de peixes possíveis de serem capturados em cada local.

Instalação e Configuração
Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.
Faça o download do código-fonte do projeto.
Abra um terminal e navegue até o diretório raiz do projeto.
Execute o comando npm install para instalar as dependências do projeto.

Funcionalidades
O jogo oferece as seguintes funcionalidades:

Iniciar o jogo e exibir uma mensagem de boas-vindas.
Permitir ao jogador selecionar um local para pescar.
Permitir ao jogador esperar e observar o ambiente.
Permitir ao jogador puxar a vara de pesca.
Permitir ao jogador largar a linha de pesca.
Calcular a pontuação do jogador com base no sucesso da captura.
Encerrar o jogo e exibir a pontuação final.

Fluxo de Execução
Ao iniciar o jogo, o jogador é recebido com uma mensagem de boas-vindas.
O jogo é configurado com os peixes disponíveis e os locais de pesca.
O jogador inicia uma série de rodadas (10 no total).
Em cada rodada, o jogador pode selecionar uma opção do menu: selecionar um novo local, esperar, puxar a vara ou largar a linha.
Após cada ação, a pontuação atual e a chance de captura são exibidas.
Ao final das 10 rodadas, o jogo é encerrado e a pontuação final é exibida.
API e Interfaces
Não há API externa ou interfaces com outros sistemas neste projeto.

Testes
Foram realizados testes manuais neste projeto para garantir o seu funcionamento adequado. Os testes envolveram a execução do jogo em diferentes cenários, interagindo com as opções do menu, selecionando diferentes locais e verificando a pontuação final.

Solução de Problemas
Não há problemas conhecidos ou erros documentados para este projeto.

Contribuição e Colaboração
Este projeto não foi descrito como um projeto de código aberto, portanto, não há informações sobre contribuições externas ou fluxo de trabalho de desenvolvimento.

Durante o desenvolvimento deste projeto, foram utilizadas as seguintes referências:

Documentação oficial do Node.js: https://nodejs.org/en/docs
DevMedia - JavaScript: https://www.devmedia.com.br/javascript/
Essas referências foram consultadas para obter informações sobre a linguagem JavaScript e a plataforma Node.js, além de obter detalhes sobre recursos específicos utilizados no projeto.