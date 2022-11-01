import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success:boolean = false;
  
  randomText = lorem.sentence();
  enteredText = '';

  onInput(target:EventTarget){
    const value  = (<HTMLInputElement>target).value;
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    
    return randomLetter === enteredLetter? 'correct' : 'incorrect';
  }
}
