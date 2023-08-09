export class Toast {
    #timer: NodeJS.Timer | null = null;
    #element: HTMLDivElement | null = null;
    
    message: string = '';

    constructor (message: string) {
        this.message = message;
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
        close.innerText = 'x';
        close.onclick = () => {
            this.#delete();
        }

        const p = document.createElement('p');
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

    activate(duration?: number): Boolean {
        return this.#toast(duration)
    }

    kill() {
        this.#delete();
        this.#stop();
    }
}