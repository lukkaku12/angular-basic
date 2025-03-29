import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-app';
  public name:string = 'pepito';
  public nameModified: string = 'whatever';

  changeName() {
    this.nameModified = this.name + 'Modified'
  }
}
