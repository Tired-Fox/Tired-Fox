export class Toast {
    #timer: NodeJS.Timer | null = null;
    #element: HTMLDivElement | null = null;
    
    message: string = '';

    constructor (...messages: string[]) {
        this.message = messages.map(message => `<p>${message}</p>`).join('');
    }

    #delete () {
        this.#element?.remove();
        this.#element = null;
    }

    #stop () {
        if (this.#timer) {
            clearInterval(this.#timer);
        }
        this.#timer = null;
    }

    #generate(container: HTMLElement) {
        const div = document.createElement('div');
        div.classList.add('toast');

        const close = document.createElement('button');
        close.innerHTML = '<span>X</span>';
        close.onclick = () => {
            this.#delete();
        }

        const p = document.createElement('section');
        p.innerHTML = this.message;

        div.append(close);
        div.append(p);
        container.append(div);
        this.#element = div;
    }

    #delay(duration?: number) {
        if (duration) {
            this.#timer = setInterval(
                () => {
                    this.#delete();
                    this.#stop();
                },
                duration
            );
        }
    }

    #toast(duration?: number): Boolean {
        let container = document.getElementById('toasts');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toasts';
            document.body.append(container);
        }

        if (!this.#element && !this.#timer) {
            this.#generate(container);
            this.#delay(duration);
            return true;
        }
        return false;
    }

    activate(duration?: number, successCallback: () => void): Boolean {
        if (this.#toast(duration)) {
            successCallback()
        }
    }

    kill() {
        this.#delete();
        this.#stop();
    }
}