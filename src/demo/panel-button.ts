import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";
import LabelButton from "../elements/button/label-button";

class PanelButton extends Panel {
    clicked: number = 0;

    buttonClicked: LabelButton;
    buttonMoving: LabelButton;

    constructor() {
        super(0, 50, screen.width, screen.height - 50, "#222222");

        let header = new Label(25, 25, "Button Elements", "#ffffff", 18, FONT_SYSTEM_UI);
        this.addElement(header);

        this.buttonClicked = new LabelButton(25, 75, 200, 50, "Clicked 0 times!");
        this.buttonClicked.addEventListener("click", () => {
            this.clicked++;
            this.buttonClicked.text = `Clicked ${this.clicked} times!`;
        });
        this.addElement(this.buttonClicked);

        this.buttonMoving = new LabelButton(200, 200, 150, 50, "Shmovin'!");
        this.addElement(this.buttonMoving);
    }

    _update() {
        this.buttonMoving.x = 300 + Math.sin(Date.now() / 150) * 15;
        this.buttonMoving.y = 300 + Math.cos(Date.now() / 150) * 15;

        super._update();
    }
}

export default PanelButton;