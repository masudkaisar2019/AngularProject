import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  constructor() { }

  ngOnInit() {
  }

  get status() {
    return this.winner ? `Winner: ${this.winner}` :
    `Player: ${this.player}`;
  }


  // ----------------------------------------------

  getTheValue(value) {

    if (!this.winner && !this.squares[value]) {
      this.squares[value] = this.player;

      if (this.winnerFunc()) {
        this.winner = this.player;

      }

      this.player = this.player === 'X' ? 'O' : 'X';

    }
  }


// ---------------------------------------


  winnerFunc(): boolean {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
       [0, 3, 6], [1, 4, 7], [2, 5, 8],
       [0, 4, 8], [2, 4, 6]
    ];

    for (const line of lines) {
      // console.log(this.squares[line[2]]);
      if (this.squares[line[0]]
        && this.squares[line[0]] === this.squares[line[1]]
        && this.squares[line[1]] === this.squares[line[2]]
      ) {
        return true;
      }
    }
    return false;
  }

// -----------------------------------------------


  newGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
  }



}
