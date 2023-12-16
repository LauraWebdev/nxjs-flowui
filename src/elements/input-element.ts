import SelectableElement from "./selectable-element";

class InputElement extends SelectableElement {
    public value: string = "";
    public isOpen: boolean = false;
    public keyboard: VirtualKeyboard;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        super(x, y, width, height);

        this.keyboard = navigator.virtualKeyboard;

        this.keyboard.addEventListener('change', (e) => this._change(e));
        this.keyboard.addEventListener('submit', (e) => this._submit(e));
    }

    _draw(context: CanvasRenderingContext2D): void {
    }

    public _click(): void {
        this.keyboard.show();
        this.isOpen = true;
        super._click();
    }

    public _change(e: any): void {
        this.value = this.keyboard.value;
        this._dispatchEvent('change', e);
    }

    public _submit(e: any): void {
        this.value = this.keyboard.value;
        this._dispatchEvent('submit', e);
    }
}

export default InputElement;