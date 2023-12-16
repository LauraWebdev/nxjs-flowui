import Element from "../element";

export const FONT_SYSTEM_UI = "system-ui";

class Label extends Element {
    public text: string;
    public color: string;
    public size: number;
    public font: string;

    constructor(
        x: number,
        y: number,
        text: string,
        color: string,
        size: number,
        font: string = FONT_SYSTEM_UI
    ) {
        super(x, y);

        this.text = text;
        this.color = color;
        this.size = size;
        this.font = font;
    }

    _draw(context: CanvasRenderingContext2D): void {
        context.textAlign = "left";
        context.textBaseline = "top";
        context.font = `${this.size}px ${this.font}`;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    }
}

export default Label;