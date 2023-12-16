import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";

class PanelText extends Panel {
    constructor() {
        super(0, 50, screen.width, screen.height - 50, "#222222");

        let header = new Label(25, 25, "Text Elements", "#ffffff", 18, FONT_SYSTEM_UI);
        this.addElement(header);

        this.addElement(new Label(25, 75, "Lorem Ipsum", "white", 18, FONT_SYSTEM_UI));
        this.addElement(new Label(25, 110, "Lorem Ipsum", "white", 24, FONT_SYSTEM_UI));
        this.addElement(new Label(25, 150, "Lorem Ipsum", "white", 32, FONT_SYSTEM_UI));
    }
}

export default PanelText;