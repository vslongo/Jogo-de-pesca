class Location {
    constructor(nome, peixesPossiveis) {
      this.nome = nome;
      this.peixesPossiveis = peixesPossiveis;
    }
  
    getnome() {
      return this.nome;
    }
  
    setnome(nome) {
      this.nome = nome;
    }
  
    getPeixesPossiveis() {
      return this.peixesPossiveis;
    }
  
    setPeixesPossiveis(peixesPossiveis) {
      this.peixesPossiveis = peixesPossiveis;
    }
  }
  
  module.exports = Location;
  