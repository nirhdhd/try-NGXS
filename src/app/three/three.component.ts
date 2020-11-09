import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store, Select } from '@ngxs/store';
import { updateFormState } from '../three.actions'
import { Observable } from 'rxjs';
import { stateThreeModel } from '../three.state'


let templete: stateThreeModel = {
  someText: " ",
  animals: [],
  radio: 0
};

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  constructor(private store: Store) { }
  myState: stateThreeModel;

  formExample: FormGroup = new FormGroup({
    animals: new FormControl([], []),
    someText: new FormControl('', []),
    radio: new FormControl('', [])

  })

  @Select(state => state.state_of_component_three) three$: Observable<any>;

  ngOnInit() {
    this.formExample.valueChanges.subscribe(f => {
      console.log("form:", f)
    })

  }

  animalsList: string[] = ['dog', 'cat', 'shark'];



  onSubmit() {
    console.log('form value:', this.formExample.value);

    templete = {
      animals: this.formExample.value.animals,
      radio: this.formExample.value.radio,
      someText: this.formExample.value.someText
    }

    console.log('templete', templete);

    this.store.dispatch(new updateFormState(templete)).subscribe();
    this.three$.subscribe(val => {
      // console.log(val)
      this.myState = {
        animals: val.animals,
        someText: val.someText,
        radio: val.radio,
      };
      console.log("this.myState", this.myState);
    }


    )

  }



}


