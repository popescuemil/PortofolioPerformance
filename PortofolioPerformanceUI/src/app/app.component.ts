import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  data: any;

  sendData(data: any){
    //create new reference of array upon change so it is dectected in chart component
    this.data = [].concat(data);
  }
}