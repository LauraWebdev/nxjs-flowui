import Element from "../element";

export enum Border {
    None = 0b0000,
    Top = 0b0001,
    Right = 0b0010,
    Bottom = 0b0100,
    Left = 0b1000,
    All = 0b1111
}

/**
 * Represents a Rectangle element.
 * @extends Element
 */
class Rectangle extends Element {
    public width: number = 0;
    public height: number = 0;
    public color: string = "transparent";
    public borderColor: string = "transparent";
    public borderWidth: number = 0;
    public border: Border = Border.None;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string = "transparent",
        borderColor: string = "transparent",
        borderWidth: number = 0,
        border: Border = Border.None
    ) {
        super(x, y);

        this.width = width;
        this.height = height;
        this.color = color;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.border = border;
    }

    _draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        context.lineWidth = this.borderWidth;

        if (this.border & Border.Top) {
            this.drawLine(context, this.x, this.y, this.x + this.width, this.y);
        }
        if (this.border & Border.Right) {
            this.drawLine(context, this.x + this.width, this.y, this.x + this.width, this.y + this.height);
        }
        if (this.border & Border.Bottom) {
            this.drawLine(context, this.x, this.y + this.height, this.x + this.width, this.y + this.height);
        }
        if (this.border & Border.Left) {
            this.drawLine(context, this.x, this.y, this.x, this.y + this.height);
        }
    }

    drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = this.borderColor;
        context.stroke();
    }
}

export default Rectangle;