import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export class GenericDataSource<T> extends MatTableDataSource<T> {
    private collection$: Subscription;
    isLoading: boolean = true;

    constructor(collection: Observable<T[]>){
        super();
        this.collection$ = collection.subscribe(data => {
            this.data = data;
            this.isLoading = false;
        });
    }

    override disconnect(){
        this.collection$.unsubscribe();
        super.disconnect();
    }
}