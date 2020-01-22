<template>
    <ListItem class="list-item-experience">
        <div class="heading">
            <div class="company">
                <span contenteditable="true" v-html="data.company"/>
            </div>
            <div class="job">
                <span contenteditable="true" v-html="data.position"/>
            </div>
            <div class="date">
                <span contenteditable="true" v-html="data.date"/>
            </div>
        </div>
        <p contenteditable="true" v-html="data.description"/>
    </ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
    name: 'ListItemExperience',
    components: {
        ListItem
    },
    props: {
        data: {
            type: Object,
            default () {
                return {}
            }
        },
        company: {
            type: String,
            default: 'Google'
        },
        job: {
            type: String,
            default: 'UI Desgner'
        },
        date: {
            type: String,
            default: '2011.9 - 2015.6'
        }
    }
}

</script>
<style lang="less">
.list-item-experience {
    .heading {
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        .company {
            width: 40%
        }

        .job {
            width: 35%;
        }

        .date {
            width: 25%;
            text-align: right;
        }
    }
}

</style>
