<template>
    <div>

        <select v-model="language" >
            <option v-for="item in locales" 
            :key="typeof item == 'object' ? item.code : item"
            :value="typeof item == 'object' ? item.code : item">
            {{ typeof item === "object"? item.name : item }}
            </option>
        </select>
    </div>
</template>

<script setup>
    const {locales, locale, setLocale } = useI18n()

    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value)
        }
    })
</script>

<style scoped>

</style>