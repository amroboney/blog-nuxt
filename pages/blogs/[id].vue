<template>
    <div>
        <h3>
            the details of blog number {{ id }}
        </h3>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>