<template>
    <div :dir="locale == 'en-US' ? 'lrt' : 'rtl'" class="flex flex-col min-h-screen">
        <Header />
        
        <div class="container mx-auto p-4 flex-grow">
            <slot />
        </div>

        <Footer />        
    </div>
</template>

<script setup>
const {locale} = useI18n()
</script>