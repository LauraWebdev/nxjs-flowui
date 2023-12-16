import Element from "./elements/element";
import Rectangle from "./elements/base/rectangle";
import LabelButton from "./elements/button/label-button";
import SelectableElement from "./elements/selectable-element";
import ConsolePanel from "./console/console-panel";
import PanelMain from "./demo/panel-main";
import Panel from "./elements/panel";

const ctx = screen.getContext('2d');

let elements: Element[] = [];
let focussedElement: SelectableElement|null = null;

(window as any).debugConsole = new ConsolePanel();
declare var debugConsole: any;

let consoleButton = new LabelButton(screen.width - 20, screen.height - 20, 20, 20, "c");
consoleButton.addEventListener("click", () => {
    debugConsole.isOpen = !debugConsole.isOpen;
});
let debugFocusSquare = new Rectangle(screen.width - 40, screen.height - 20, 20, 20, "white");


elements.push(new PanelMain());

elements.push(debugFocusSquare);
elements.push(debugConsole);
elements.push(consoleButton);

function getSelectableElementFromElement(element: any, x: number, y: number): SelectableElement | null {
    if(element instanceof SelectableElement && element.isInsideBoundingBox(x, y)) {
        return element;
    }

    // If element is of type Panel, also check its subelements.
    if(element instanceof Panel) {
        for(let subElement of element.elements) {
            let foundSelectable = getSelectableElementFromElement(subElement, x, y)

            if (foundSelectable !== null) {
                return foundSelectable;
            }
        }
    }

    return null;
}

/**
 * Retrieves a selectable element at a given point.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 *
 * @return {Element | null} - The selectable element at the given point, or null if no selectable element is found.
 */
function getSelectableElementAtPoint(x: number, y: number): SelectableElement | null {
    let reversedElements = [...elements].reverse();
    for(let el of reversedElements) {
        let foundSelectable = getSelectableElementFromElement(el, x, y);

        if (foundSelectable !== null) {
            return foundSelectable;
        }
    }
    return null;
}

/**
 * Main render loop
 */
const render = () => {
    ctx.clearRect(0, 0, screen.width, screen.height);

    for(let e of elements) {
        ctx.save();

        e._update();
        e._draw(ctx);

        if(e instanceof Panel) {
            for (let panelElement of e.elements) {
                ctx.save();

                panelElement._update();
                panelElement._draw(ctx);

                ctx.restore();
            }
        }

        ctx.restore();
    }

    window.requestAnimationFrame(render);
};

screen.addEventListener('touchstart', (e) => {
    e.preventDefault();
    let touch = e.touches[0];

    let selectableElement: SelectableElement|null = getSelectableElementAtPoint(touch.clientX, touch.clientY);
    if(selectableElement) {
        focussedElement = selectableElement;
        focussedElement._click();
        debugFocusSquare.color = "green";
    } else {
        focussedElement = null;
        debugFocusSquare.color = "red";
    }
});

window.requestAnimationFrame(render);