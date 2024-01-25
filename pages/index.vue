<template>

    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

        <div class="flex items-center justify-between pb-10">
            <h1 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{$t('blogs')}}</h1>
            
            <NuxtLink :to="localePath('/blog/create')"> 

                <button  class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"> + </button>
            </NuxtLink> 
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
            <div v-for="(blog, index) in blogs" :key="index">
                <BlogCard :blog="blog" />
            </div>
        </div>
    </div>
    
</template>

<script setup>


    import { useStore } from 'vuex'
    const store = useStore()
    const blogs = computed(() => store.getters.getBlogs)    
</script>

<style  scoped>

</style>