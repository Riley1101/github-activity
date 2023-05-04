<script lang="ts">
    import type { CommitData } from '$lib/types/github/commits';
    import moment from 'moment';
    import Icon from '@iconify/svelte';
    export let commit:CommitData;
</script>
<fieldset class="flex gap-4 p-4 my-4 border border-gray-900 rounded-lg cursor-pointer">
    <legend class="flex items-center gap-4 p-2 px-4 border border-gray-900 rounded-full ">
        <Icon
            icon="material-symbols:arrow-circle-up-outline-rounded"
            class="w-6 h-6 text-green-300"
        />
        <span class="pr-2 text-sm font-bold"> Push Event </span>
    </legend>
    <div class="flex flex-col gap-2">
        <span class="text-theme-light text-sm"> {moment(commit?.commit.author?.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <p class="text-theme-muted leading-[1.5] text-lg">
            {commit.commit.message}
        </p>
    </div>
</fieldset>
