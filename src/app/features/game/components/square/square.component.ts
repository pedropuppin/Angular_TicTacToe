import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls: ['./square.component.scss'],
  template: `
    <button>{{ value }}</button>
  `,
})

export class SquareComponent {
  @Input() value: 'X' | 'O'; // permitindo que propriedades sejam passadas para o componente
}

// dumb component
