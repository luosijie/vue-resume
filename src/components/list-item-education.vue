<template>
    <ListItem class="list-item-education">
        <div class="school">
            <span contenteditable="true" v-html="data.school"/>
        </div>
        <div class="major">
            <span contenteditable="true" v-html="data.major"/>
        </div>
        <div class="date">
            <span contenteditable="true" v-html="data.date"/>
        </div>
    </ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
    name: 'ListItemEducation',
    components: {
        ListItem
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        school: {
            type: String,
            default: 'Minjiang University'
        },
        major: {
            type: String,
            default: 'Design'
        },
        date: {
            type: String,
            default: '2011.9 - 2015.6'
        }
    }
}

</script>
<style lang="less">
.list-item-education {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .school {
        width: 40%
    }

    .major {
        width: 35%;
    }

    .date {
        width: 25%;
        text-align: right;
    }
}

</style>
