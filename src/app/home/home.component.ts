import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  protected oldText: string = 'This is old text.';
  protected newText: string = 'This is new text.';

  protected changeText(): void {
    let temp = this.oldText;
    this.oldText = this.newText;
    this.newText = temp;
  }

}
