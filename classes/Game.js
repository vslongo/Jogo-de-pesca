const readlineSync = require('readline-sync');
const Fish = require('./Fish');
const Location = require('./Location');

class Game {
  constructor() {
    this.fish = null;
    this.location = null;
    this.difficulty = 0;
    this.score = 0;
    this.rounds = 0;
    this.successChance = 0;
    this.nextRoundBonus = false;
  }

  start() {
    console.log('Bem-vindo ao jogo de pesca!');
    this.setup();
    this.play();
    this.end();
  }

  setup() {
    // Defina as espécies de peixes e locais aqui
    const fish1 = new Fish('Truta', 50, 30, 20);
    const fish2 = new Fish('Salmão', 70, 40, 30);
    const fish3 = new Fish('Robalo', 60, 35, 25);
    
    const location1 = new Location('Rio', [fish1, fish2]); 
    const location2 = new Location('Lago', [fish1, fish3]); 
    const location3 = new Location('Oceano', [fish2, fish3]);
    

    this.fish = fish1;
    this.location1 = location1;
    this.location2 = location2;
    this.location3 = location3;
    this.location = location1; // Define o local inicial
  }

  play() {
    while (this.rounds < 10) {
      console.log('-------------------'); 
      console.log(`Rodada ${this.rounds + 1}`);
      this.showMenu();

      const action = readlineSync.keyIn('Selecione uma opção:', { hideEchoBack: true, mask: '' });
      console.log('\n');
      if (action === '1') {
        this.selectLocation();
      } else if (action === '2') {
        console.log('Você está esperando...');
        this.nextRoundBonus = true;
      } else if (action === '3') {
        this.pull();
      } else if (action === '4') {
        console.log('Você está largando a linha...');
        this.rounds--;
      } else {
        console.log('Ação inválida. Tente novamente.');
        continue;
      }

      console.log('\n');
      console.log(`Pontuação atual: ${this.score}`);
      console.log(`Chance de captura: ${Math.round(this.successChance)}%`); 
      console.log('\n');


      this.rounds++;
    }
  }

  showMenu() {
    console.log('╔═════════════════════════════╗');
    console.log('║           Opções            ║');
    console.log('╠═════════════════════════════╣');
    console.log('║ 1. Selecionar um novo local ║');
    console.log('║    para pescar              ║');
    console.log('║ 2. Aguardar e observar o    ║');
    console.log('║    ambiente                 ║');
    console.log('║ 3. Puxar a vara de pesca    ║');
    console.log('║ 4. Largar a linha de pesca  ║');
    console.log('╚═════════════════════════════╝');
  }

  selectLocation() {
    console.log('Locais disponíveis:');
    console.log('1. ' + this.location1.nome); 
    console.log('2. ' + this.location2.nome); 
    console.log('3. ' + this.location3.nome); 

    const option = readlineSync.questionInt('Selecione o local desejado: ');

    if (option === 1) {
      this.location = this.location1;
    } else if (option === 2) {
      this.location = this.location2;
    } else if (option === 3) {
      this.location = this.location3;
    } else {
      console.log('Opção inválida. Retornando ao local anterior.');
    }
  }

  pull() {
    this.successChance = this.calculateCaptureChance(); 
    const randomNumber = Math.random() * 100;

    if (randomNumber <= this.successChance) { 
      console.log('Você conseguiu puxar o peixe!');
      const baseScore = 10; 
      const difficultyFactor = this.location.nome.length;
      this.score += Math.round(baseScore + difficultyFactor * (this.successChance / 100));
    } else {
      console.log('O peixe escapou!');
    }
  }

  calculateCaptureChance() {
    const fish = this.fish;
    const location = this.location;

    
    var chance = (Math.random() * fish.forca + Math.random() * fish.velocidade + Math.random() * location.nome.length) * 2; 

    if (this.nextRoundBonus) {
      chance += 20; 
      this.nextRoundBonus = false; 
    }
    return chance;
  }

  end() {
    console.clear();
    const border = "=".repeat(30);
    const message = `
${border}
|      Fim do Jogo       |
${border}
|  Pontuação Final: ${this.score}  |
${border}
`;

    console.log(message);
    process.exit();
  }
}

const game = new Game();
game.start();
