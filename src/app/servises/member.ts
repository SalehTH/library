import { Service } from '@angular/core';

@Service()
export class MemberServise {
    public members:Member[]=[
        {id:0,fullname: 'test', pasword: '123', phoneNamber:'12345677',gender:'male'},
        {id:1,fullname: 'test1', pasword: '345', phoneNamber:'345364466',gender:'female'},
        {id:2,fullname: 'test2', pasword: '567', phoneNamber: '443657778',gender:'female'},
        {id:3,fullname: 'test3', pasword: '789', phoneNamber: '48790890',gender:'male'},
        {id:4,fullname: 'test4', pasword: '101', phoneNamber: '4327567656',gender:'male'},
    ];
    add(member:Member){
        this.members.push(member)
    }
    update(member:Member){
       let add=this.members.find(u=>u.fullname==member.fullname);
       if(add)
       {
        add.fullname=member.fullname;
        add.gender=member.gender;
        add.phoneNamber=member.phoneNamber;
       }
       return undefined
    }
    remove(id:number){
        this.members=this.members.filter(m=>m.id!=id)
    }
    list(){
        return [...this.members]
    }
}

export interface Member{
    id:number
    fullname:string
    phoneNamber:string
    pasword:string
    gender:string

}
