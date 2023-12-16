import {Swkbd} from "nxjs-constants";
import InputElement from "../input-element";
import CenteredLabel from "../text/centered-label";
import {FONT_SYSTEM_UI} from "../text/label";
import Rectangle, {Border} from "../base/rectangle";

class InputNormal extends InputElement {
    public placeholder: string = "";

    bgRectangle: Rectangle;
    labelValue: CenteredLabel;
    labelPlaceholder: CenteredLabel;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        placeholder: string,
    ) {
        super(x, y, width, height);

        this.placeholder = placeholder;
        this.keyboard.type = Swkbd.Type.Normal;
        this.keyboard.okButtonText = 'Done';

        this.bgRectangle = new Rectangle(x, y, width, height, "#111111", "#333333", 2, Border.All);
        this.labelValue = new CenteredLabel(x, y, width, height, "", "#fff", 18, FONT_SYSTEM_UI);
        this.labelPlaceholder = new CenteredLabel(x, y, width, height, placeholder, "#ffffff", 18, FONT_SYSTEM_UI);
    }

    _draw(context: CanvasRenderingContext2D): void {
        super._draw(context);

        context.save();

        context.globalAlpha = 1;
        this.bgRectangle._draw(context);

        if(this.value.length > 0) {
            this.labelValue._draw(context);
        } else {
            context.globalAlpha = 0.3;
            this.labelPlaceholder._draw(context);
        }

        context.restore();
    }

    _update() {
        super._update();

        if(this.bgRectangle?.x != this.x) this.bgRectangle.x = this.x;
        if(this.bgRectangle?.y != this.y) this.bgRectangle.y = this.y;
        if(this.bgRectangle?.width != this.width) this.bgRectangle.width = this.width;
        if(this.bgRectangle?.height != this.height) this.bgRectangle.height = this.height;

        if(this.labelPlaceholder?.text != this.placeholder) this.labelPlaceholder.text = this.placeholder;
        if(this.labelPlaceholder?.x != this.x) this.labelPlaceholder.x = this.x;
        if(this.labelPlaceholder?.y != this.y) this.labelPlaceholder.y = this.y;
        if(this.labelPlaceholder?.width != this.width) this.labelPlaceholder.width = this.width;
        if(this.labelPlaceholder?.height != this.height) this.labelPlaceholder.height = this.height;

        if(this.labelValue?.text != this.value) this.labelValue.text = this.value;
        if(this.labelValue?.x != this.x) this.labelValue.x = this.x;
        if(this.labelValue?.y != this.y) this.labelValue.y = this.y;
        if(this.labelValue?.width != this.width) this.labelValue.width = this.width;
        if(this.labelValue?.height != this.height) this.labelValue.height = this.height;
    }

    public _change(e: any): void {
        super._change(e);
        this.labelValue.text = this.value;
    }

    public _submit(e: any): void {
        super._submit(e);
        this.labelValue.text = this.value;
    }
}

export default InputNormal;