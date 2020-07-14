import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient, public googleMapsService: GoogleMapsService) {
  }

  ngOnInit(): void {
  }

  title = 'adraba-tst';
}
