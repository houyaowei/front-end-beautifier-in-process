<template>
    <div class="button-basic">
        <MVuiButton @click="handleClick">点击</MVuiButton>
    </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
    alert('click me');
}
</script>
