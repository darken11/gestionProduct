import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionProduct } from './product.state';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {
  sourceEventSubject:Subject<ActionProduct>=new Subject<ActionProduct>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();


  publishEvent(event:ActionProduct){
    this.sourceEventSubject.next(event);
  }
}
