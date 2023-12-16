import Element from "../element";
import {FONT_SYSTEM_UI} from "./label";

class TextBox extends Element {
    public text: string;
    public color: string;
    public size: number;
    public font: string;
    public width: number;

    constructor(
        x: number,
        y: number,
        width: number,
        text: string,
        color: string,
        size: number,
        font: string = FONT_SYSTEM_UI
    ) {
        super(x, y);

        this.width = width;
        this.text = text;
        this.color = color;
        this.size = size;
        this.font = font;
    }

    _draw(context: CanvasRenderingContext2D): void {
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.font = `${this.size}px ${this.font}`;
        context.fillStyle = this.color;
        const words = this.text.split(' ');
        let line = '';
        let y = this.y;

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > this.width && n > 0) {
                context.fillText(line, this.x, y);
                line = words[n] + ' ';
                y += this.size;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, this.x, y);
    }
}

export default TextBox;