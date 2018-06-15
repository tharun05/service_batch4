import { Component } from '@angular/core';
import {AccountService} from './accounts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  accounts:{name:string,status:string}[] = [];
  constructor(private accountService:AccountService){

  }

  ngOnInit(){
    this.accounts = this.accountService.accounts;
    console.log(this.accounts)
  }
}
