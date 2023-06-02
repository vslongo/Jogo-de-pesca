class Fish {
  constructor(tamanho, peso, forca, velocidade) {
    this.tamanho = tamanho;
    this.peso = peso;
    this.forca = forca;
    this.velocidade = velocidade;
  }

  getTamanho() {
    return this.tamanho;
  }

  setTamanho(tamanho) {
    this.tamanho = tamanho;
  }

  getPeso() {
    return this.peso;
  }

  setPeso(peso) {
    this.peso = peso;
  }

  getForca() {
    return this.forca;
  }

  setForca(forca) {
    this.forca = forca;
  }

  getVelocidade() {
    return this.velocidade;
  }

  setVelocidade(velocidade) {
    this.velocidade = velocidade;
  }
}

module.exports = Fish;
