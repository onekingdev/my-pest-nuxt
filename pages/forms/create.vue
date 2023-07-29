<template>
    <div class="w-full px-4 flex-1 flex flex-col sm:px-12">
        <div class="w-full max-w-7xl mx-auto">
            <div class="pb-2 flex justify-between sm:items-center items-center pb-4 mb-4 sm:mb-0" dusk="page_header">
                <h1 class="flex-1 leading-tight text-3xl text-emerald-700 sm:truncate mb-4 sm:mb-0 sm:self-start ">
                    New Form
                </h1>
            </div>
            <div class="py-8 px-8 bg-white rounded-b border-t-2 border-gray-dark shadow" title="Form Details">
                <h4 class="text-xl text-emerald-950 font-semibold mb-4 pb-2 border-b border-gray-50">Form Details</h4>
                <form>
                    <div class="mb-6">
                        <label for="name" class="block font-semibold mb-2 text-sm text-emerald-950">Name</label>
                        <input type="text" class="text-gray-900 text-sm rounded-lg block w-full p-2.5 border-4 border-white" placeholder="Josh's wedding">
                    </div>
                    <div class="form-group ">
                        <div class="flex justify-between">
                            <label for="emails" class="block font-semibold mb-2 text-sm text-emerald-950">Forward to</label>
                            <span class="text-emerald-950 text-sm">One email address per line.</span>
                        </div>
                        <textarea rows="3" cols="50" id="emails" placeholder="jane@example.com" class="text-gray-900 text-sm rounded-lg block w-full p-2.5 border-4 border-white"></textarea>
                    </div>
                    <div class="mt-6 flex items-center justify-end">
                        <button type="submit" class="ease-in-out duration-200 text-white bg-emerald-700 hover:bg-emerald-950 hidden sm:block rounded-lg uppercase px-5 py-3">Create Form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    definePageMeta({ layout: 'dashboard' })

</script>