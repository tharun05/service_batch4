import { Component, OnInit, Input } from '@angular/core';
import { AccountService} from '../accounts.service'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
@Input() account:{name:string,status:string};
singleAccount:any
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    console.log(this.account)
    this.singleAccount = this.account;
  }

}
