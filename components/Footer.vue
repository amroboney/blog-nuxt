<template>
    <div>
        <footer class=" g-gray-800 text-white p-4 mt-auto sticky bottom-0 bg-gray-50 dark:bg-gray-800 antialiased ">
            
            <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
                
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                
                <div class="text-center">
                    <a href="#" class="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        Blog
                    </a>
                    <ul class="text-center flex justify-center gap-2     ">
                        <li> <NuxtLink :to="localePath('/')"> {{ $t('home') }} </NuxtLink> </li>
                        <li> <NuxtLink :to="localePath('/about')"> {{ $t('about') }} </NuxtLink> </li>
                    </ul>   
                    <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 <a href="#" class="hover:underline">{{ $t('createdBy')}}</a>. {{ $t('createdName') }}
                    </span>
                </div>
            </div>
          </footer>

    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: green;
    }
</style>