import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";
import element from "../elements/element";

class ConsolePanel extends Panel {
    isOpen: boolean = false;

    constructor() {
        super(0, 0, 550, screen.height, "#111111");
    }

    _draw(context: CanvasRenderingContext2D): void {
        if(!this.isOpen) return;

        context.save();

        context.globalAlpha = 0.75;
        this.bgRectangle._draw(context);

        context.globalAlpha = 1;
        for (let element of this.elements) {
            element._draw(context);
        }

        context.restore();
    }

    public _update() {
        if(this.elements.length > 31) {
            this.elements.splice(0, 1);

            // Rearrange
            this.elements.forEach((element, index) => {
                element.y = 5 + index * 22;
            });
        }

        super._update();
    }

    public log(text: string): void {
        const currentTime = new Date().toLocaleTimeString();
        this.elements.push(new Label(
            5,
            5 + this.elements.length * 22,
            `[${currentTime}] ${text}`,
            "#fff",
            14,
            FONT_SYSTEM_UI
        ));
    }

    public clear(): void {
        this.elements = [];
    }
}

export default ConsolePanel;