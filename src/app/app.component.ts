import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { pipe } from 'rxjs';

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
  public studentList:any[] = [];

  constructor(private rickAndMortyService: AppServiceService) {}

  changeName() {
    this.nameModified = this.name + 'Modified'
  }

  // populateStudentList() {
  //   this.studentList = [

  //   ]
  // }


  returnCharacters() {
    this.rickAndMortyService.getCharacters().subscribe(
      pipe(data => {
        this.studentList = data
      })
    )
  }

}
