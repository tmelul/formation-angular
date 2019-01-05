import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean;

  constructor(spinner: SpinnerService) {
    spinner.isLoading.subscribe(state => {
      this.isLoading = state;
    });
  }
}
