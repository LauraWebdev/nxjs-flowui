import SelectableElement from "../selectable-element";
import {FONT_SYSTEM_UI} from "../text/label";
import RoundedRectangle from "../base/rounded-rectangle";
import CenteredLabel from "../text/centered-label";

class LabelButton extends SelectableElement {
    public text: string = "";

    bgRectangle: RoundedRectangle;
    label: CenteredLabel;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
    ) {
        super(x, y, width, height);

        this.text = text;

        this.bgRectangle = new RoundedRectangle(x, y, width, height, "#333333", 5);
        this.label = new CenteredLabel(x, y, width, height, text, "#fff", 18, FONT_SYSTEM_UI);
    }

    _draw(context: CanvasRenderingContext2D): void {
        this.bgRectangle._draw(context);
        this.label._draw(context);

        super._draw(context);
    }

    _update() {
        super._update();

        if(this.bgRectangle?.x != this.x) this.bgRectangle.x = this.x;
        if(this.bgRectangle?.y != this.y) this.bgRectangle.y = this.y;
        if(this.bgRectangle?.width != this.width) this.bgRectangle.width = this.width;
        if(this.bgRectangle?.height != this.height) this.bgRectangle.height = this.height;

        if(this.label?.text != this.text) this.label.text = this.text;
        if(this.label?.x != this.x) this.label.x = this.x;
        if(this.label?.y != this.y) this.label.y = this.y;
        if(this.label?.width != this.width) this.label.width = this.width;
        if(this.label?.height != this.height) this.label.height = this.height;
    }

    public _click(): void {
        this.bgRectangle.color = "#444444";
        setTimeout(() => {
            this.bgRectangle.color = "#333333";
        }, 50);

        super._click();
    }
}

export default LabelButton;