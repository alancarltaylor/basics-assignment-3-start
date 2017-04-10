import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
		.blueMode {
			background-color: blue;
			color: white;
		}
	`]
})
export class AppComponent {
	content = 'Calvin and Hobbes is the best comic strip of ALL TIME';
	display = false;
	logs = [];
	moreThanFive = false;
	n = 0;
	serverStatus = 'online';

	constructor(){

	}

	 toggleDisplay(){
	 	this.n++;
	 	this.display = !this.display;
	 	this.logs.push(new Date())
	 	console.log("logs: ", this.logs);
	 	console.log("morethanfive: ", this.moreThanFive);
	 	this.n > 5 ? this.moreThanFive = true : this.moreThanFive = false;
	 }
}
