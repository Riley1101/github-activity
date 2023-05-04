<script lang="ts">
    import type { Repositories } from "$lib/types/github/repos";
    import Icon from "@iconify/svelte";
    export let load: (name: string) => void;
    export let repo: Repositories;
</script>

<div
    role="button"
    class="rounded-lg blur-bg cursor-pointer"
    on:click={() => load(repo.full_name)}
    tabindex="0"
    on:keydown={() => load(repo.full_name)}
>
    <div class="flex items-center gap-4 p-4 rounded-t-lg md:p-6">
        <div class="p-4 rounded-full text-theme-muted max-w-max bg-theme-dark">
            <Icon icon="iconoir:repository" class="w-6 h-6" />
        </div>
        <div class="flex flex-col">
            <div class="font-bold hover:text-theme-primary text-theme-light">
                {repo.full_name}
            </div>
            {#if repo.description}
                <span class=" mt-2 text-sm text-theme-muted">
                    {repo.description}</span
                >
            {/if}
        </div>
    </div>
</div>
