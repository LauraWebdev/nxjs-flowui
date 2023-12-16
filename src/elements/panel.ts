import Element from "./element";
import Rectangle, {Border} from "./base/rectangle";

class Panel extends Element {
    public width: number = 0;
    public height: number = 0;
    public elements: Element[] = [];

    bgRectangle: Rectangle;

    constructor(x: number, y: number, width: number, height: number, color: string = "transparent") {
        super(x, y);

        this.width = width;
        this.height = height;
        this.elements = [];

        this.bgRectangle = new Rectangle(x, y, width, height, color);

        for (let element of this.elements) {
            this.addElement(element);
        }
    }

    _draw(context: CanvasRenderingContext2D): void {
        this.bgRectangle._draw(context);

        for (let element of this.elements) {
            element._draw(context);
        }
    }

    public addElement(element: Element): void {
        element.x += this.x;
        element.y += this.y;

        this.elements.push(element);
    }

    public _update() {
        for (let element of this.elements) {
            element._update();
        }
    }
}

export default Panel;