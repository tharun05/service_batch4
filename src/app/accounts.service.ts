import {Injectable} from '@angular/core';

@Injectable()
export class AccountService{
    accounts = [
        {
            name:'Master Account',
            status:'active'
        },
        {
            name:'joint Account',
            status:'inactive'
        },
        {
            name:'Hidden Account',
            status:'unknown'
        },
    ]


    addAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});
        console.log(this.accounts)
    }


}