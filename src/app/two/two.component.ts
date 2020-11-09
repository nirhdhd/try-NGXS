import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { addToArray } from '../two.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  constructor(private store: Store) { }
  myState: any;

  @Select(state => state.state_of_component_two) two$: Observable<any>;

  ngOnInit() {
  }

  add() {
    this.store.dispatch(new addToArray("hay")).subscribe();
    this.two$.subscribe(val =>
      //console.log(val)
      this.myState = val.array_of_words
    )

  }



}
