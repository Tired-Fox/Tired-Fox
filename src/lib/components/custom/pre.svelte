<script>
    /** @type {String} */
    export let lang;

    /** @type {HTMLSpanElement | undefined} */
    let pre;
    let copying = false;
    
    function copyText() {
        if (pre && pre.innerText && !copying) {
            copying = true;
            window.navigator.clipboard.writeText(pre.innerText);
            setTimeout(() => {copying = false}, 1500);
        }
    }
</script>

<div class="my-2 rounded-md overflow-hidden shadow-sm shadow-black/30 not-prose">
    <div class="bg-[var(--shiki-color-background)] px-4 pt-2 flex items-center justify-between">
        <span></span>
        <span class="text-sm text-[rgba(var(--shiki-color-text),0.25)]">{lang}</span>
        <button type="button" on:click={copyText} aria-label="Copy code as text" class="text-[rgba(var(--shiki-color-text),0.25)] hover:text-[rgb(var(--shiki-color-text))]">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class={`w-5 h-5${copying ? ' hidden' : ''}`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class={`w-5 h-5${!copying ? ' hidden' : ''}`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
        </button>
    </div>
	<span bind:this={pre}><slot /></span>
</div>
