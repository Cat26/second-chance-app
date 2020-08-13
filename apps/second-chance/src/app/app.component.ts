import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@f-society/api-interfaces';

@Component({
  selector: 'f-society-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
