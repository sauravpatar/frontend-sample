import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restapi';
  title1= 'aniket';
  title2= 'anik';
  title3= 'an';
  constructor( private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apicall().subscribe((data)=>{
     console.warn("get api data",data);
     this.title=data[0]['ID'];
     this.title1=data[0]['Movie'];
     this.title2=data[1]['ID'];
     this.title3=data[1]['Movie'];
    })
  }
}
