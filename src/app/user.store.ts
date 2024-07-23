import { signalStore, withState } from '@ngrx/signals';
import { Book } from './book.model';

type UserState = {
    booksBorrowed: Book[];
};

const initialState: UserState = {
    booksBorrowed: [
        { name: 'book 1', catagery: 'science', qty: 1 }
    ]
};

export const UserStore = signalStore(
    withState(initialState)
);