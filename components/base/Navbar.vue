<template>
    <nav class="bg-white px-6">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div
                    class="flex-1 flex items-center justify-between sm:items-stretch"
                >
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/">
                            <img
                                class="block lg:hidden h-8 w-auto"
                                :src="require('~/assets/img/logo/jurnalbijak.svg')"
                                alt="Jurnalbijak"
                            />
                            <img
                                class="hidden lg:block h-8 w-auto"
                                :src="require('~/assets/img/logo/jurnalbijak.svg')"
                                alt="Jurnalbijak"
                            />
                        </a>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex justify-between space-x-10">
                            <!-- <a
                                href="#"
                                class="text-gray-400 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                                >Blog</a
                            > -->
                            <a
                                href="/#demo"
                                class="text-gray-400 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                                >Demo</a
                            >
                            <!-- <a
                                href="#"
                                class="text-gray-400 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                                >Docs</a
                            > -->
                            <Button
                                text="Masuk"
                                url="https://app.jurnalbijak.com"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center sm:hidden"
                >
                    <button
                        @click="open = !open"
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="h-6 w-6"
                            :class="[open ? 'hidden' : 'block']"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            class="h-6 w-6"
                            :class="[open ? 'block' : 'hidden']"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="sm:hidden" v-if="open">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-700 block py-2 rounded-md text-base font-medium"
                    >Blog</a
                >
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-700 block py-2 rounded-md text-base font-medium"
                    >Demo</a
                >
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-700 block pt-2 pb-4 rounded-md text-base font-medium"
                    >Docs</a
                >
                <Button url="#" text="Masuk" />
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'BaseNavbar',
    data() {
        return {
            open: false,
        };
    },
};
</script>
