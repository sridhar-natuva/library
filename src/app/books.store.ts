import { signalStore, withState } from '@ngrx/signals';
import { Book } from './book.model';

type BooksState = {
    books: Book[];
};

const initialState: BooksState = {
    books: [
        { name: 'book 1', catagery: 'science', qty: 5 },
        { name: 'book 2', catagery: 'science', qty: 5 },
        { name: 'book 3', catagery: 'science', qty: 5 },
        { name: 'book 4', catagery: 'science', qty: 5 },
        { name: 'book 5', catagery: 'science', qty: 5 },
        { name: 'book 6', catagery: 'science', qty: 5 },
        { name: 'book 7', catagery: 'science', qty: 5 }
    ]
};

export const BooksStore = signalStore(
    withState(initialState)
);