<template>
    <div class="w-full px-4 flex-1 flex flex-col sm:px-12">
        <div class="w-full max-w-7xl mx-auto">
            <div class="pb-2 flex justify-between sm:items-center items-center">
                <h1 class="flex-1 leading-tight text-3xl text-emerald-950 sm:truncate mb-4 sm:mb-0 sm:self-start ">
                    Test Form
                </h1>
            </div>
            <div class="mt-6 sm:flex sm:space-x-4">
                <FormSidebar />
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'dashboard' })
</script>