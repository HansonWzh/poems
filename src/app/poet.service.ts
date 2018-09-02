import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Poet } from './poet';
import { Poets } from './mock-poets';

@Injectable({ providedIn: 'root' })
export class Poetservice {
    constructor() { }
    getPoets(): Observable<Poet[]> {
        return of(Poets);
    }
    getHero(id: number): Observable<Poet> {
        return of(Poets.find(poet => poet.id === id));
    }
}
