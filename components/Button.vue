<template>
    <a
        type="button"
        class="block px-3 py-2 rounded-md text-base font-medium hover:scale-110" :class="[outline ? 'bg-white border border-blue-400 text-blue-400' : 'bg-blue-400 text-white']"
        :href="url"
    >
        {{ text }}
    </a>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        outline: {
            type: Boolean,
            default: false,
        }
    },
};
</script>
