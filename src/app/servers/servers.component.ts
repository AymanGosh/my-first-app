import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   
 allowNewServer:any = false;
 isServerCreated:boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }
    , 2000);
  }
  onClick(){
    this.isServerCreated = true;
  }
  ngOnInit(): void {
  }

  onUpdateServerName(event: Event){
    this.allowNewServer = (<HTMLInputElement>event.target).value;
  }

}
