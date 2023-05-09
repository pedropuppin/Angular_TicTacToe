import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[]; // vai representar os 9 quadrados do tabuleiro
  xIsNext: boolean; // determina qual jogador é o próximo
  winner: string; // determina o vencedor

  ngOnInit(): void {
    this.newGame(); // life cycle hook que é chamado quando o componente é inicializado
  }

  newGame() {
    this.squares = Array(9).fill(null); // preenche o array com 9 posições vazias
    this.winner = null;
    this.xIsNext = true;
  }

  get player() { // getter que retorna o jogador atual
    return this.xIsNext ? 'X' : 'O';
  }


  makeMove(index: number) {
    if (!this.squares[index] && !this.winner) { // checa se o quadrado não está preenchido e se não há um vencedor
      this.squares.splice(index, 1, this.player); // preenche o quadrado com o jogador atual se o quadrado não estiver preenchido
      this.xIsNext = !this.xIsNext; // alterna o jogador atual
    }
    this.winner = this.calculateWinner(); // checa se há um vencedor
  }

  calculateWinner() {
    const lines = [ // todas as possibilidades de vitória
      [0, 1, 2], // primeira linha
      [3, 4, 5], // segunda linha
      [6, 7, 8], // terceira linha
      [0, 3, 6], // primeira coluna
      [1, 4, 7], // segunda coluna
      [2, 5, 8], // terceira coluna
      [0, 4, 8], // diagonal esquerda
      [2, 4, 6] // diagonal direita
    ];

    for (let i = 0; i < lines.length; i++) { // itera sobre todas as possibilidades de vitória
      const [a, b, c] = lines[i]; // desestrutura o array
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] // checa se há um vencedor
      ) {
        return this.squares[a]; // retorna o vencedor (X ou O)
      }
    }
    return null; // retorna null se não houver um vencedor
  }
}

// smart component
