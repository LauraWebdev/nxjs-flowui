abstract class Element {
    public x: number = 0;
    public y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    abstract _draw(context: CanvasRenderingContext2D): void;

    _update(): void {
    }
}

export default Element;