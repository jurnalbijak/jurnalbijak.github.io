<template>
    <div class="pb-24">
        <section id="hero" class="w-full py-12">
            <div
                class="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"
            >
                <div
                    class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
                >
                    <span
                        data-aos="fade-right"
                        data-aos-once="true"
                        class="text-base text-gray-600 font-semibold uppercase"
                        >Daftar Sekarang</span
                    >
                    <h1
                        data-aos="fade-right"
                        data-aos-once="true"
                        class="font-extrabold text-transparent text-4xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    >
                        Web Aplikasi Akutansi #1
                    </h1>
                    <p
                        data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-delay="300"
                        class="paragraph hidden sm:block"
                    >
                        Gunakan untuk membantu pembukuan diperusahaan Anda
                        terkait dengan transaksi, penjualan, pembelian, dan juga
                        stock produk yang dimiliki.
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="700"
                        class="flex justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-2"
                    >
                        <Button
                            url="https://app.jurnalbijak.com/register"
                            text="Daftar Sekarang"
                        />
                    </div>
                </div>
                <div
                    class="hidden sm:block col-span-12 lg:col-span-6 mt-12 xl:mt-10"
                >
                    <div class="w-full">
                        <img
                            data-aos="fade-up"
                            data-aos-once="true"
                            :src="require('~/assets/img/hero.svg')"
                            class=""
                            alt="Membantu Jurnal Anda - Jurnalbijak.com"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div
                class="relative max-w-screen-xl p-4 mx-auto sm:p-16 overflow-hidden"
            >
                <h1
                    class="text-center w-full font-bold py-8 sm:py-16 text-2xl text-gray-600 uppercase"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    Pilihan Paket <i data-feather="circle"></i>
                </h1>
                <div class="flex flex-col space-y-5">
                    <div
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="300"
                        class="flex items-center justify-between w-full transition duration-500 ease-in-out transform bg-blue-400 border-2 rounded"
                    >
                        <div class="w-full">
                            <div class="relative flex flex-col h-full p-8">
                                <h2
                                    class="mb-4 font-semibold tracking-widest text-white uppercase title-font"
                                >
                                    Silver (Periodik)
                                </h2>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Manajemen Akun dan Kontak
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Jurnal Umum
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Laporan Keuangan, (Laba-rugi, Arus Kas,
                                    Perubahan Ekuitas, Posisi Keuangan)
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Laporan Buku Besar
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Laporan Hutang dan Laporan Piutang
                                </p>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="relative flex flex-col h-full p-8">
                                <p class="line-through text-white text-center">
                                    Rp. 200.000
                                </p>
                                <h1
                                    class="flex items-end mx-auto text-3xl font-black leading-none text-white"
                                >
                                    <span>Rp. 100.000 </span>
                                </h1>
                                <p class="mx-auto mt-6 text-xs text-white">
                                    Gratis masa uji coba 14 hari
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-once="true"
                        data-aos-delay="300"
                        class="flex items-center justify-between w-full transition duration-500 ease-in-out transform bg-blue-400 border-2 rounded"
                    >
                        <div class="w-full">
                            <div class="relative flex flex-col h-full p-8">
                                <h2
                                    class="mb-4 font-semibold tracking-widest text-white uppercase title-font"
                                >
                                    Gold (Perpetual)
                                </h2>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Semua fitur yang tersedia di Paket Silver
                                    (Periodik)
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Manajemen Produk
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Pencatatan Kas dan Bank
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Pencatatan Pembelian
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Pencatatan Penjualan
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Penyesuaian Persediaan
                                </p>
                                <p
                                    class="flex items-center mb-2 text-lg font-normal tracking-wide text-white"
                                >
                                    <span
                                        class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2.5"
                                            class="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg> </span
                                    >Laporan Persediaan
                                </p>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="relative flex flex-col h-full p-8">
                                <p class="line-through text-white text-center">
                                    Rp. 400.000
                                </p>
                                <h1
                                    class="flex items-end mx-auto text-3xl font-black leading-none text-white"
                                >
                                    <span>Rp. 200.000 </span>
                                </h1>
                                <p class="mx-auto mt-6 text-xs text-white">
                                    Gratis masa uji coba 14 hari
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="demo">
            <div class="max-w-screen-lg mx-auto px-3 py-16">
                <div class="mb-12 text-center" data-aos="zoom-in">
                    <h2 class="text-4xl text-gray-900 font-bold">
                        Cara Anda untuk mendapatkan layanan Maksimal
                    </h2>
                    <div class="mt-4 text-xl md:px-20">
                        Sesuaikan paket pada aplikasi kami dengan kebutuhan Anda
                        dalam mengelola bisnis.
                    </div>
                </div>
                <div
                    class="mt-20 flex flex-wrap items-center"
                    data-aos="zoom-in-left"
                >
                    <div class="w-full sm:w-1/2 text-center sm:px-6">
                        <h3 class="text-3xl text-gray-900 font-semibold">
                            Minta Demo (Presentasi)
                        </h3>
                        <div class="mt-6 text-xl leading-9">
                            Sebelum membeli Anda bisa meminta kami untuk
                            melakukan presentasi tentang bagaimana cara terbaik
                            untuk menggunakan fitur-fitur yang tersedia
                            dijurnalbijak.
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 p-6">
                        <img
                            :src="require('~/assets/img/presentation.svg')"
                            alt="Presentation - Jurnalbijak.com"
                        />
                    </div>
                </div>
                <div
                    class="mt-20 flex flex-wrap items-center flex-row-reverse"
                    data-aos="zoom-in-right"
                >
                    <div class="w-full sm:w-1/2 text-center sm:px-6">
                        <h3 class="text-3xl text-gray-900 font-semibold">
                            Buat Kesepakatan
                        </h3>
                        <div class="mt-6 text-xl leading-9">
                            Setelah presentasi Anda bisa memutuskan kembali,
                            untuk berlangganan dengan jurnalbijak dan menikmati
                            fitur yang disediakan oleh kami.
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 p-6">
                        <img
                            :src="require('~/assets/img/deal.svg')"
                            alt="Make a deal - Jurnalbijak.com"
                        />
                    </div>
                </div>
                <div
                    class="mt-20 flex flex-wrap items-center"
                    data-aos="zoom-in-left"
                >
                    <div class="w-full sm:w-1/2 text-center sm:px-6">
                        <h3 class="text-3xl text-gray-900 font-semibold">
                            Konsultasikan
                        </h3>
                        <div class="mt-6 text-xl leading-9">
                            Selama Anda menjadi pelanggan yang baik di
                            jurnalbijak, kami akan selalu membantu Anda jika ada
                            masalah dengan aplikasi kami.
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 p-6">
                        <img
                            :src="require('~/assets/img/ask.svg')"
                            alt="Customer Support - Jurnalbijak.com"
                        />
                    </div>
                </div>
            </div>
        </section>

        <div class="bg-blue-400 rounded max-w-screen-lg mx-auto px-3">
            <div
                class="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md"
            >
                <div class="text-2xl">
                    <div class="text-white font-semibold">
                        Ayo, Gunakan sekarang sebelum kiamat.
                    </div>
                    <div class="text-base">Mulai Uji Coba Gratis.</div>
                </div>
                <div class="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
                    <Button
                        text="Daftar Sekarang"
                        url="https://app.jurnalbijak.com/register"
                        :outline="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import aosMixin from "@/mixins/aos";
export default {
    mixins: [aosMixin],
};
</script>
