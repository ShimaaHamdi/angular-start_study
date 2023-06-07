import { Component } from "@angular/core";
import { environment } from "src/environments/environment.development";


@Component({
  selector: 'app-root',
  // templateUrl:'./app.component.html',
  template: `
    <button type="button" (click)="dosomthing();">do somthing</button>
    <!-- two way databinding -->
    <input value="some data" [value]="userName" (input) = "$event" />
    <p> user name is {{userName}}</p>
    <!-- Property Binding -->
    <img src="{{imgURL}}" alt="">
    <br>
    <img [src]="imgURL" alt="">
    <br>
    <img bind-src="imgURL" alt="">
    `



})
export class AppComponent {
  imgURL:string = 'https://fakeimg.pl/300/'
  userName: string = '';
  constructor() {
    console.log(`i'm in ${environment.x} mode`);
  }
  dosomthing() {
    document.write('welcome')
  }
}
