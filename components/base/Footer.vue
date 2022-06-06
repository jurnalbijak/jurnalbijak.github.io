<template>
    <footer class="p-4 bg-white shadow md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div>
                <a
                    href="https://jurnalbijak.com"
                    class="flex items-center mb-4 sm:mb-0"
                >
                    <img
                        :src="require('~/assets/img/logo/jurnalbijak.svg')"
                        class="mr-3 h-8"
                        alt="Jurnalbijak Logo"
                    />
                </a>
                <div class="mt-3">
                    PT. Jurnalbijak Indonesia
                    <p class="text-xs">
                        Villa Harmony Banguntapan R-1, Jl. Pleret, Banjardadap,
                        Potorono, Kec. Banguntapan, Kabupaten Bantul, Daerah
                        Istimewa Yogyakarta 55194
                    </p>
                </div>
            </div>
            <ul
                class="flex flex-wrap items-center mb-6 text-sm sm:mb-0"
            >
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6"
                        >Syarat & Ketentuan</a
                    >
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr
            class="my-6 border-gray-200 sm:mx-auto lg:my-8"
        />
        <span
            class="block text-sm text-gray-500 sm:text-center"
            >© 2022 Jurnalbijak. All Rights Reserved.
        </span>
    </footer>
</template>

<script>
export default {
    name: "BaseFooter",
};
</script>

<style></style>
