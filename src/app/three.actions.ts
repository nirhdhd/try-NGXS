import { stateThreeModel } from './three.state'

export class updateFormState {
    static readonly type = 'UPDATE FORM STATE';
    constructor(public formState: stateThreeModel) { }
}