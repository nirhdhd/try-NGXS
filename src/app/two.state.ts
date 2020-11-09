import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { addToArray } from './two.actions'

interface stateTwoModel {
    array_of_words: string[];
    booleanParmeter: boolean
}

@State<stateTwoModel>({
    name: 'state_of_component_two',
    defaults: {
        array_of_words: [],
        booleanParmeter: false
    }
})


@Injectable()
export class ComponentTwoState {

    @Action(addToArray)
    addToArray(ctx: StateContext<stateTwoModel>, { word }: addToArray) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            array_of_words: [...state.array_of_words, word]
        })
    }
}
