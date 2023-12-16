import Element from "./element";

class SelectableElement extends Element {
    private _listeners: Map<string, ((...args: any[]) => void)[]> = new Map();

    public width: number = 0;
    public height: number = 0;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        super(x, y);

        this.width = width;
        this.height = height;
    }

    _draw(context: CanvasRenderingContext2D): void {
    }

    isInsideBoundingBox(x: number, y: number): boolean {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    public _click(): void {
        this._dispatchEvent('click');
    }

    public focusStart(): void {
        this._dispatchEvent('focusStart');
    }
    public focusEnd(): void {
        this._dispatchEvent('focusEnd');
    }

    /**
     * Adds an event listener for the specified event name.
     *
     * @param {string} eventName - The name of the event to listen for.
     * @param {function} handler - The handler function to be called when the event is triggered.
     *                            The handler function takes any number of arguments.
     * @return {void}
     */
    public addEventListener(eventName: string, handler: (...args: any[]) => void): void {
        let handlers = this._listeners.get(eventName);
        if (handlers === undefined) {
            this._listeners.set(eventName, handlers = []);
        }

        handlers.push(handler);
    }

    /**
     * Removes an event listener from the specified event.
     *
     * @param {string} eventName - The name of the event.
     * @param {(args: any[]) => void} handler - The event handler function to remove.
     *
     * @return {void}
     */
    public removeEventListener(eventName: string, handler: (...args: any[]) => void): void {
        const handlers = this._listeners.get(eventName);
        if (handlers !== undefined) {
            const idx = handlers.indexOf(handler);
            if (idx !== -1)
                handlers.splice(idx, 1);
        }
    }

    /**
     * Dispatches the specified event to all registered listeners.
     *
     * @param {string} eventName - The name of the event to dispatch.
     * @param {...any} args - The arguments to pass to the event handlers.
     *
     * @protected
     *
     * @return {void}
     */
    protected _dispatchEvent(eventName: string, ...args: any[]): void {
        const handlers = this._listeners.get(eventName);
        if (handlers !== undefined) {
            for (const handler of handlers) {
                handler(...args);
            }
        }
    }
}

export default SelectableElement;