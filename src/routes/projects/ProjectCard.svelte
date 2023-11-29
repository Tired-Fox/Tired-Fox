<script>
    /** @type {Record<String, String>} */
    const LTC = {
        rust: '253 186 116',
        typescript: '96 165 250',
        python: '2 132 199',
        html: '234 88 12',
    };

    /** @type {String} */
    export let name;
    /** @type {{
        description: String,
        longDescription?: String,
        languages?: String[],
        link?: String
    }} */
    export let info;
</script>

<div class="flex items-center gap-2">
    <div class="w-[300px] h-[200px] rounded-md overflow-hidden shadow-sm shadow-black/30 mb-1">
        <img src="https://picsum.photos/300/200" alt="Cypress visual example"/>
    </div>
    <div class="flex-1 bg-zinc-100 dark:bg-zinc-800 p-2 shadow-sm shadow-black/30 rounded-md">
        <p class="flex" data-line="1">
            <span class="punctuation">&lt;</span>
            <span class="tag-name">{name}</span>
        </p>
        <p class="flex" data-line="2">
            <span class="mr-8"></span>
            <span class="attr-name">description</span>
            <span class="punctuation">=</span>
            <span class="attr-value">"{info.description}"</span>
        </p>
        <p class="flex" data-line="3">
            <span class="mr-8"></span>
            <span class="attr-name break-keep">long&#x2011;description</span>
            <span class="punctuation">=</span>
            <span class="attr-value">"{info.longDescription}"</span>
        </p>
        <p class="flex" data-line="4">
            <span class="mr-8"></span>
            <span class="attr-name">languages</span>
            <span class="punctuation">=</span>
            <span class="attr-value">"{info.languages?.join(' ')}"</span>
        </p>
        <p class="flex" data-line="5">
            <a href={info.link}>
                <span class="mr-8"></span>
                <span class="attr-name">see&#x2011;more</span>
            </a>
        </p>
        <p class="punctuation" data-line=6>/&gt;</p>
    </div>
</div>

<style>
    .tag-name {
        color: #F44747;
    }

    .attr-value {
        color: #CE9178
    }

    .attr-name { 
        color: #9CDCFE;
    }

    .punctuation {
        color: #808080;
    }

    [data-line]::before {
        content: attr(data-line);
        margin-right: 1rem;
        @apply text-zinc-800 dark:text-zinc-100;
    }
</style>