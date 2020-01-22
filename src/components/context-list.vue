<template>
    <div class="context-list" :class="{ 'icon-margin-bottom': icon }">
        <div class="list-heading" :class="{ 'icon-class': icon }">
            <div class="title">
                <EditImage v-if="icon" :src="icon" height="20" width="20" class="img"/>
                <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
            </div>
            <div class="button add" @click="add" :class="{ 'icon-margin-right': icon }">+</div>
        </div>
        <ul id="luo">
            <ListItemAbout v-if="title === 'About me'" v-for="item in arry" :key="item.id"/>
            <!-- <ListItemSkill v-if="title === 'Skill'" v-for="item in arry" :key="item.id"/> -->
            <ListItemEducation v-if="title == 'Education'" v-for="item in arry" :key="item.id"/>
            <ListItemExperience v-if="title == 'Working Experience'" v-for="item in arry" :key="item.id"/>
            <ListItemInfo v-if="icon" v-for="item in arry" :key="item.id"/>
            <slot name="listItem"></slot>
        </ul>
    </div>
</template>
<script>
import EditImage from '@/components/edit-image'
import ListItemAbout from '@/components/list-item-about'
import ListItemSkill from '@/components/list-item-skill'
import ListItemEducation from '@/components/list-item-education'
import ListItemExperience from '@/components/list-item-experience'
import ListItemInfo from '@/components/list-item-info'
export default {
    name: 'ContextList',
    components: {
        EditImage,
        ListItemAbout,
        ListItemSkill,
        ListItemEducation,
        ListItemExperience,
        ListItemInfo
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        titleSize: {
            type: String,
            default: '16px'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            arry: []
        }
    },
    methods: {
        showAdd () {
            this.add = true
        },
        add () {
            this.arry.push(1)
        }
    }
}
</script>
<style lang="less">
.context-list {
    width: 100%;
    margin-bottom: 0px;

    .list-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            display: flex;
            align-items: center;

            .img {
                margin: 0 20px 0 15px;
            }

            span.name {
                margin: 10px 0;
                font-weight: bold;
            }
        }

        &:hover .add {
            display: block;
        }

        .add {
            display: none;
        }

        .button {
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            border-radius: 50%;
            background: none;
            border: 1px solid #dad8d7;
            cursor: pointer;

            &:hover {
                background: #f2f2f2;
            }
        }
    }
}

.icon-class {
    background-color: #f6f7f7;
    border-bottom: 1px solid #e9e8e8;
}

.icon-margin-bottom {
    margin-bottom: 0;
}

.icon-margin-right {
    margin-right: 15px;
}
</style>
