
import type { NuxtLink } from '#build/components';
<template>
    <div>
        <Header>
            <nav>
                <NuxtLink to="/"> Home </NuxtLink>
                <NuxtLink to="/about"> About </NuxtLink>
            </nav>
        </Header>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style   scoped>

</style>