import { Service } from '@angular/core';

@Service()
export class UserServise {
    private users: User[] = [
        { id: 0, username: 'admin', fullname: 'test', pasword: 'admin', role: 'panel' },
        { id: 1, username: 'test1', fullname: 'test1', pasword: '345', role: 'test1' },
        { id: 2, username: 'test2', fullname: 'test2', pasword: '567', role: 'test2' },
        { id: 3, username: 'test3', fullname: 'test3', pasword: '789', role: 'test3' },
        { id: 4, username: 'test4', fullname: 'test4', pasword: '101', role: 'test4' },
    ];
    add(user: User) {
        this.users.push(user)
    }
    update(user: User) {
        let add = this.users.find(u => u.id == user.id);
        if (add) {
            add.fullname = user.fullname;
            add.username = user.username;
            add.role = user.role;
        }
    }
    remove(id: number) {
        this.users = this.users.filter(m => m.id != id)
    }
    singin(username: string, pasword: string) {
        const user = this.users.find(u => u.username == username && u.pasword == pasword)
        if (user) {
            return user
        }
        return undefined
    }
    singout() {

    }
    list() {
        return [...this.users]
    }
}
export interface User {
    id: number
    fullname: string
    username: string
    pasword: string
    role: string
}
