<template>
  <ListItem class="list-item-education">
    <span class="school" contenteditable="true">{{ school }}</span>
    <span class="major" contenteditable="true">{{ major }}</span>
    <span class="date" contenteditable="true">{{ date }}</span>
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
  .list-item-education{
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .school{
      width: 40%
    }
    .major{
      width: 35%;
    }
    .date{
      width: 25%;
      text-align: right;
    }
  }
</style>
