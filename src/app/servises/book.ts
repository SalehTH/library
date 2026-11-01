import { Service } from '@angular/core';

@Service()
export class BookServise {
    public books: Book[] = [
        { id: 0, titel: 'test', grouping: 'test', name: 'test' },
        { id: 1, titel: 'test1', grouping: 'test1', name: 'test1' },
        { id: 2, titel: 'test2', grouping: 'test2', name: 'test2' },
        { id: 3, titel: 'test3', grouping: 'test3', name: 'test3' },
    ];
    add(Book: Book) {
        this.books.push(Book)
    }
    update(Book: Book) {
        let add = this.books.find(u => u.id == Book.id);
        if (add) {
            add.titel = Book.titel;
            add.name = Book.name;
            add.grouping = Book.grouping;
        }
    }
    remove(id: number) {
        this.books = this.books.filter(m => m.id != id)
    }
    list() {
        return [...this.books]
    }

}
export interface Book {
    id: number
    name: string
    titel: string
    grouping: string
}


