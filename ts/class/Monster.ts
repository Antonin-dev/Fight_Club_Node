export class Monster {

    private _name: string;
    private _strength: number;

    constructor(name: string, strength: number){
        this._name = name;
        this._strength = strength;
    }

    get name(): string {
        return this._name;
    }

    get strength(): number {
        return this._strength;
    }

}
