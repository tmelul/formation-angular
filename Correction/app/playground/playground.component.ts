import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  counter = 0;
  text = '';
  values: string[] = [];

  inc(): void {
    this.counter += 1;
  }

  push(): void {
    this.values.push(this.text);
  }

  sum(): number {
    return this.values.reduce((acc, v) => {
      return acc + v.length;
    }, 0);
  }
}
