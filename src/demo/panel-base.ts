import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";
import Rectangle from "../elements/base/rectangle";
import RoundedRectangle from "../elements/base/rounded-rectangle";
import HueRotatingRectangle from "./hue-rotating-rectangle";

class PanelBase extends Panel {
    constructor() {
        super(0, 50, screen.width, screen.height - 50, "#222222");

        let header = new Label(25, 25, "Base Elements", "#ffffff", 18, FONT_SYSTEM_UI);
        this.addElement(header);

        this.addElement(new Rectangle(25, 75, 50, 50, "white"));
        this.addElement(new RoundedRectangle(100, 75, 50, 50, "white", 10));
        this.addElement(new HueRotatingRectangle(175, 75, 50, 50));
    }
}

export default PanelBase;