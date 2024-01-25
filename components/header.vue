<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink :to="localePath('/')" class="font-bold"> Blogs </NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink :to="localePath('/')">{{ $t('blogs') }}  </NuxtLink> </li>
                    <li> <LangSwatcher />  </li>                   
                </ul> 
            </nav>
        </header>
    </div>
</template>

<script setup>

</script>

<style   scoped>
    .router-link-exact-active {
        color: green;
    }
</style>