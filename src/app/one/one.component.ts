import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { addToCounter } from '../one.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private store: Store) { }
  myState: any;

  ngOnInit() {


  }

  @Select(state => state) one$: Observable<any>;

  add() {
    this.store.dispatch(new addToCounter()).subscribe();
    this.one$.subscribe(val =>
      this.myState = val.state_of_component_one.counterOfCommponentOne
    )
  }



}
