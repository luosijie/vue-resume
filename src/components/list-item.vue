<template>
    <li class="list-item" @contextmenu.prevent="showControl" v-if="listItem">
        <slot></slot>
        <div v-if="listControl" class="list-control">
            <span @click="deleteControl">delete</span>
            <span @click="cancelControl">cancel</span>
        </div>
    </li>
</template>
<script>
export default {
    name: 'ListItem',
    data () {
        return {
            listControl: false,
            listItem: true
        }
    },
    methods: {
        showControl () {
            this.listControl = true
        },
        cancelControl () {
            this.listControl = false
        },
        deleteControl () {
            this.listItem = false
        }
    }
}

</script>
<style lang="less">
.list-item {
    position: relative;

    .list-control {
        display: flex;
        position: absolute;
        border: 1px solid #dad8d7;
        border-radius: 4px;
        width: 160px;
        height: 30px;
        left: 50%;
        top: 50%;
        margin-top: -15px;
        margin-left: -80px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;

        &>span {
            width: 50%;
            height: 100%;
            text-align: center;
            line-height: 30px;
            cursor: pointer;

            &:hover {
                color: white;
                background-color: rgba(0, 0, 0, 0.9);
            }
        }

        &>span:first-child {
            // border-right: 1px solid #dad8d7;
            border-radius: 4px 0 0 4px;
        }

        &>span:last-child {
            border-radius: 0 4px 4px 0;
        }
    }
}

</style>
