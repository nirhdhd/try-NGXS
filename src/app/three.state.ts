import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { updateFormState } from './three.actions'

export interface stateThreeModel {
    animals: string[];
    someText: string;
    radio: number;
}

@State<stateThreeModel>({
    name: 'state_of_component_three'
})


@Injectable()
export class ComponentThreeState {

    @Action(updateFormState)
    updateFormState(ctx: StateContext<stateThreeModel>, { formState }: updateFormState) {
        ctx.setState(formState);
    }
}
