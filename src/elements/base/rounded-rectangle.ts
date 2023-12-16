import Element from "../element";

class RoundedRectangle extends Element {
    public width: number = 0;
    public height: number = 0;
    public color: string;
    public cornerRadius: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string,
        cornerRadius: number
    ) {
        super(x, y);

        this.width = width;
        this.height = height;
        this.color = color;
        this.cornerRadius = cornerRadius;
    }

    _draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.x + this.cornerRadius, this.y);
        context.lineTo(this.x + this.width - this.cornerRadius, this.y);
        context.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.cornerRadius);
        context.lineTo(this.x + this.width, this.y + this.height - this.cornerRadius);
        context.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.cornerRadius, this.y + this.height);
        context.lineTo(this.x + this.cornerRadius, this.y + this.height);
        context.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.cornerRadius);
        context.lineTo(this.x, this.y + this.cornerRadius);
        context.quadraticCurveTo(this.x, this.y, this.x + this.cornerRadius, this.y);
        context.closePath();

        context.fillStyle = this.color;
        context.fill();
    }
}

export default RoundedRectangle;