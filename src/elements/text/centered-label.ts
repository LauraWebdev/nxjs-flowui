import Element from "../element";
import {FONT_SYSTEM_UI} from "./label";

class CenteredLabel extends Element {
    public text: string;
    public color: string;
    public size: number;
    public font: string;
    public width: number;
    public height: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        color: string,
        size: number,
        font: string = FONT_SYSTEM_UI
    ) {
        super(x, y);

        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
        this.size = size;
        this.font = font;
    }

    _draw(context: CanvasRenderingContext2D): void {
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `${this.size}px ${this.font}`;
        context.fillStyle = this.color;
        context.fillText(
            this.text, this.x + this.width / 2,
            this.y + this.height / 2
        );
    }
}

export default CenteredLabel;