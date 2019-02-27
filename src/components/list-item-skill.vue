<template>
    <ListItem class="list-item-skill" render-type="canvas">
        <input class="title" type="text" name="percent" v-model="dataTitle">
        <span class="line">
            <span class="show" :style="{ width: dataPercent + '%', background: selectColor }"/>
        </span>
        <span class="input">
            <input class="percent" type="text" name="percent" maxlength="2" v-model.number="dataPercent">%  
        </span>
    </ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
    name: 'ListItemSkill',
    components: {
        ListItem
    },
    props: {
        title: {
            type: String,
            default: 'JavaScript'
        },
        percent: {
            type: Number,
            default: 80
        }
    },
    data () {
        return {
            dataTitle: this.title,
            dataPercent: this.percent,
            colors: ['#41b883', '#2883c6', '#f49b16', '#e62120', '#33475c', '#cc146f']
        }
    },
    computed: {
        selectColor () {
            let index = Math.floor(Math.random() * this.colors.length)
            return this.colors[index]
        }
    }
}

</script>
<style lang="less">
.list-item-skill {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    font-size: 20px;

    input {
        border: none;
        font-size: 20px;
    }

    input.title {
        width: 120px;
    }

    input.percent {
        width: 30px;
        text-align: right;
    }

    span.line {
        position: relative;
        display: inline-block;
        width: 520px;
        height: 8px;
        background-color: #c2c2c2;

        .show {
            content: '';
            position: absolute;
            height: 100%;
        }
    }
}

</style>
