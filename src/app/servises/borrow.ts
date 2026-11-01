import { Service } from '@angular/core';
import { User } from './user';
import { Member } from './member';
import { Book } from './book';

@Service()
export class BorrowServise {
    private borrows:Borrow[]=[
        {id:1,givingTimeBack:new(Date),takeBakeTime:new(Date),book:{id:1,titel:'test',grouping:'test',name:'test'},member:{id:1,fullname:'test',gender:'female',pasword:'test',phoneNamber:'test'}},
        {id:2,givingTimeBack:new(Date),takeBakeTime:new(Date),book:{id:2,titel:'test',grouping:'test',name:'test'},member:{id:2,fullname:'test',gender:'female',pasword:'test',phoneNamber:'test'}},
        {id:3,givingTimeBack:new(Date),takeBakeTime:new(Date),book:{id:3,titel:'test',grouping:'test',name:'test'},member:{id:3,fullname:'test',gender:'female',pasword:'test',phoneNamber:'test'}},
    ]
    add(member:Member,user:User,borrow:Borrow){
        this.borrows.push(borrow)                     
    }
    update(borrow:Borrow,book:Book){
        let add=this.borrows.find(u=>u.id==borrow.id);
        if(add)
        {
            add.givingTimeBack=borrow.givingTimeBack;
            add.takeBakeTime=borrow.takeBakeTime;
        }
        return undefined
    }
    list(){
        return[...this.borrows]
    }
    remove(id:number){
         this.borrows=this.borrows.filter(m=>m.id!=id)
    }
}
export interface Borrow {
    book:Book
    member:Member
    id:number
    givingTimeBack:Date
    takeBakeTime:Date
}
