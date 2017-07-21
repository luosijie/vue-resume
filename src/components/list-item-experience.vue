<template>
  <ListItem class="list-item-experience">
    <div class="heading">
      <span class="company" contenteditable="true">{{ company }}</span>
      <span class="job" contenteditable="true">{{ job }}</span>
      <span class="date" contenteditable="true">{{ date }}</span>
    </div>
    <p contenteditable="true">
      Hi there! I’m a global citizen passionate about people, stories and technology. You’ll find me creating where they intersect, transforming ideas into digital products that people love to interact with. I’m focused on supporting entrepreneurs, startups and agencies around the world to achieve successful interactive design projects involving Web, Mobile and Responsive experiences. al products that people love to interact with. I’m focused on supporting entrepreneurs
    </p>
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
  .list-item-experience{
    .heading{
      font-size: 18px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      .company{
        width: 40%
      }
      .job{
        width: 35%;
      }
      .date{
        width: 25%;
        text-align: right;
      }
    }
  }
</style>
