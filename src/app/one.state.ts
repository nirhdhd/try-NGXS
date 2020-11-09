import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { addToCounter } from './one.actions'

@State<any>({
    name: 'state_of_component_one',
    defaults: {
        counterOfCommponentOne: 0
    }

})

@Injectable()
export class ComponentOneState {

    @Selector()
    static getStateOfComponentOne(state: any) {
        return state;
    }

    @Action(addToCounter)
    addToCounter(ctx: StateContext<any>, action: addToCounter) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            counterOfCommponentOne: state.counterOfCommponentOne + 1
        })
    }



}