import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  	blueMode: {
  		color: white;
  		backgroundColor: blue;
  	}
  `]
})
export class AppComponent {
	content = 'Calvin and Hobbes is the best comic strip of ALL TIME';
	display = false;
	logs = [];
	moreThanFive = false;
	n = 0;

	constructor(){

	}

	 toggleDisplay(){
	 	this.display = !this.display;
	 	this.logs.push(this.n++)
	 	console.log("logs: ", this.logs);
	 }
}
