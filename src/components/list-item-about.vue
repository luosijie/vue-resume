<template>
    <ListItem>
        <p contenteditable="true" v-html="data"/>
    </ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
    name: 'ListItemAbout',
    props: {
        data: {
            type: String,
            default: ''
        }
    },
    components: {
        ListItem
    }
}

</script>
