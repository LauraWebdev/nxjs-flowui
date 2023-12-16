import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";
import InputNormal from "../elements/input/input-normal";

class PanelInput extends Panel {
    inputNormal: InputNormal;
    inputNormalValueLabel: Label;

    constructor() {
        super(0, 50, screen.width, screen.height - 50, "#222222");

        let header = new Label(25, 25, "Input Elements", "#ffffff", 18, FONT_SYSTEM_UI);
        this.addElement(header);

        this.inputNormalValueLabel = new Label(550, 45, "", "#ffffff", 18, FONT_SYSTEM_UI);
        this.addElement(this.inputNormalValueLabel);

        this.inputNormal = new InputNormal(25, 25, 500, 50, "Enter your name...");
        this.inputNormal.addEventListener("change", () => {
            this.inputNormalValueLabel.text = `Value: ${this.inputNormal.value}`;
        });
        this.inputNormal.addEventListener("submit", () => {
            this.inputNormalValueLabel.text = `Final Value: ${this.inputNormal.value}`;
        });
        this.addElement(this.inputNormal);
    }
}

export default PanelInput;