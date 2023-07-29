<template>
    <div class="w-full px-4 flex-1 flex flex-col sm:px-12">
        <div class="w-full max-w-7xl mx-auto">
            <div class="pb-2 flex justify-between sm:items-center items-center pb-4 mb-4 sm:mb-0" dusk="page_header">
                <h1 class="flex-1 leading-tight text-3xl text-emerald-700 sm:truncate mb-4 sm:mb-0 sm:self-start ">
                    Your Forms
                </h1>
                <a href="/forms/create" class="ease-in-out duration-200 text-white text-md bg-emerald-700 hover:bg-emerald-950 font-bold hidden sm:block sm:mx-3 md:mx-6 rounded-md uppercase px-4 py-2">New Form</a>
            </div>

            <div v-if="!forms.length" class="flex flex-col items-center px-4 py-16 w-full bg-white border-t-2 border-gray-dark shadow rounded-2xl sm:rounded-b-lg sm:rounded-t-none text-center sm:py-24">
                <svg class="fill-current text-emerald-700 mb-5 text-blue-lightest" width="72px" height="82px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 85">
                    <path d="M64 75h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2zm-2-7.95V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v69c0 1.1.9 2 2 2h50.05A9 9 0 0 1 62 67.05zM54.05 77H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v63.05A9 9 0 1 1 54.05 77zM63 83a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 19h44a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h44a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H10zm-1.5-4h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1zM23 8h18a1 1 0 1 1 0 2H23a1 1 0 1 1 0-2zM10 57h44a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0-21h44a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h44a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H10zM9 48h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm0 1v3h3v-3H9zm-.5-16h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1zm7 17h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1zm26 0h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1z"></path>
                </svg>
                <span class="block text-gray-800 text-lg">There doesn’t seem to be anything here!</span>
                <a class="classic-link text-emerald-950 font-semibold" href="/forms/create">Get started by adding your first form</a>
            </div>
            <div v-if="forms.length" class="flex flex-col items-center w-full bg-white border-t-2 border-gray-dark shadow rounded-2xl sm:rounded-b-lg sm:rounded-t-none text-center">
                <li v-for="form in forms" class="flex flex-col w-full">
                    <div class="flex items-center justify-between px-8 py-6 w-full">
                        <div>
                            <a class="block font-bold text-start mb-2 no-underline text-emerald-950 hover:underline" href="/forms/1">
                                {{ form.name }}
                            </a>
                            <span class="break-all text-sm text-emerald-900">{{ form.url }}</span>
                        </div>
                        <div class="hidden sm:block">
                            <button class="copy-link text-blue-light text-sm hover:underline text-emerald-900">
                                <span class="text-blue-light text-sm hover:underline hidden">Copied!</span>
                                <span class="text-blue-light text-sm hover:underline">Copy Embed Code</span>
                            </button>
                        </div>
                    </div>
                    <hr class="text-gray-900 w-full"/>
                </li>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { forms } from "~/pages/data.js";
    
    definePageMeta({ layout: 'dashboard' })

</script>