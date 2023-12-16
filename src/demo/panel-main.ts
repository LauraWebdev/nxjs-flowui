import Panel from "../elements/panel";
import Label, {FONT_SYSTEM_UI} from "../elements/text/label";
import PanelBase from "./panel-base";
import PanelText from "./panel-text";
import PanelButton from "./panel-button";
import PanelInput from "./panel-input";
import LabelButton from "../elements/button/label-button";

enum Panels {
    BASE,
    TEXT,
    BUTTON,
    INPUT,
}

class PanelMain extends Panel {
    public currentPanel: Panels = Panels.BASE;

    _panelBase: Panel;
    _panelText: Panel;
    _panelButton: Panel;
    _panelInput: Panel;

    _panelTabBase: LabelButton;
    _panelTabText: LabelButton;
    _panelTabButton: LabelButton;
    _panelTabInput: LabelButton;

    constructor() {
        super(0, 0, screen.width, screen.height, "#111111");

        this._panelBase = new PanelBase();
        this._panelText = new PanelText();
        this._panelButton = new PanelButton();
        this._panelInput = new PanelInput();

        this._panelTabBase = new LabelButton(5, 5, 310, 40, "Base");
        this._panelTabText = new LabelButton(325, 5, 310, 40, "Text");
        this._panelTabButton = new LabelButton(645, 5, 310, 40, "Button");
        this._panelTabInput = new LabelButton(965, 5, 310, 40, "Input");

        this.setPanel(Panels.BASE);

        this._panelTabBase.addEventListener("click", () => {
            this.setPanel(Panels.BASE);
        });
        this._panelTabText.addEventListener("click", () => {
            this.setPanel(Panels.TEXT);
        });
        this._panelTabButton.addEventListener("click", () => {
            this.setPanel(Panels.BUTTON);
        });
        this._panelTabInput.addEventListener("click", () => {
            this.setPanel(Panels.INPUT);
        });

        this.addElement(this._panelTabBase);
        this.addElement(this._panelTabText);
        this.addElement(this._panelTabButton);
        this.addElement(this._panelTabInput);
    }

    setPanel(panel: Panels): void {
        this.elements = [];
        this.addElement(this._panelTabBase);
        this.addElement(this._panelTabText);
        this.addElement(this._panelTabButton);
        this.addElement(this._panelTabInput);

        switch (panel) {
            case Panels.BASE:
                this.addElement(this._panelBase);
                break;
            case Panels.TEXT:
                this.addElement(this._panelText);
                break;
            case Panels.BUTTON:
                this.addElement(this._panelButton);
                break;
            case Panels.INPUT:
                this.addElement(this._panelInput);
                break;

        }

        this.currentPanel = panel;
    }
}

export default PanelMain;