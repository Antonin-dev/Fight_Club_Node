export class Personnage {
    private _name: string;
    private _age: number;
    private _type: string;
    private _life: number;


    constructor(name: string, age: number, type: string, life: number) {
        this._name = name;
        this._age = age
        this._type = type;
        this._life = life;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get type(): string {
        return this._type;
    }

    get life(): number {
        return this._life;
    }

    public fight(value: number): void {
        this._life -= value;
    }

    public rest (life: number) : string {
        this._life = this._life + 10
        const text : string = `tu as recuperer ${life} de vie tu as ${this._life} de santé`
        return text;
    }

}
