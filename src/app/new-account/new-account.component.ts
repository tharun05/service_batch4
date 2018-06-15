import { Component, OnInit } from '@angular/core';
import { AccountService} from '../accounts.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  createAccount(accountName,status){
    console.log(accountName +' '+status)
    this.accountService.addAccount(accountName,status);
  } 

}
