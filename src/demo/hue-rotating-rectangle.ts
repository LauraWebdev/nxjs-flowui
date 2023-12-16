import Rectangle from "../elements/base/rectangle";

class HueRotatingRectangle extends Rectangle {
    hue: number = 0;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "transparent");
        this.color = `hsl(${this.hue}, 50%, 50%)`;
    }

    _draw(context: CanvasRenderingContext2D) {
        this.color = `hsl(${this.hue}, 50%, 50%)`;
        super._draw(context);
    }

    _update() {
        this.hue++;
        super._update();
    }
}

export default HueRotatingRectangle;