import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   
 allowNewServer:any = false;
     
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }
    , 2000);
  }
  onClick(){
    this.allowNewServer = " i have been clicked ";
  }
  ngOnInit(): void {
  }

}
