import { Component, NgZone, OnInit } from '@angular/core';
import { CallbackID, Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {


  message = '';
  messages = [];
  currentUser = '';

  constructor() { }

  ngOnInit() {
  
  }



 
}
