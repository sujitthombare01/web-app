import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.rest.getResponseFromServiceOne().subscribe((res)=>{
      this.result = res;
    });
    
  }


  title = 'Micro Frontend 2';
  result:any;

  
}
