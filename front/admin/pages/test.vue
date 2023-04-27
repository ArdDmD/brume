<template>
  <div class="test">
    <ListingComponent
        :columns="columns"
        :list="list"
    >
      <template #actions>
        <AddButton/>
      </template>

      <template #cols="{item}">
        <TextColumn
            :item="item"
            field="name"
        />
        <TextColumn
            :item="item"
            field="surname"
        />
        <TextColumn
            :item="item"
            field="patronymic"
        />
        <TextColumn
            :item="item"
            field="email"
        />
      </template>
    </ListingComponent>
  </div>
</template>
<script>
import {ListingComponent} from '~/widgets'
import {AddButton, getField} from '~/shared'
import {TextColumn} from "~/features";

import {ref, onMounted} from "vue";
definePageMeta({ layout: 'default' });
export default {
  components: {
    TextColumn,
    ListingComponent,
    AddButton
  },
  setup() {
    const columns = ref([
      {title: 'Имя', field: 'name', size: '100px', notGrow: true},
      {title: 'Фамилия', field: 'surname', size: '150px'},
      {title: 'Отчество', field: 'patronymic', size: '180px'},
      {title: 'Почта', field: 'email', size: '200px'},
    ])
    const obj = ref({
      da:{
        kak: '111',
        dssss: '1112222',
        net:{
          asd:' ffff',
          ddd:{
            aaaa:'ooo',
          },
          kak: 'aaaa'
        }
      }
    })
    onMounted(() => {
      const dacc = getField('da.nest.ddd.aaaa', obj.value)
      console.log(dacc, 'tyt')
    })
    const list = ref([
      {id:1,name:'Денис', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:2,name:'Денис2', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:3,name:'Денис1', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:4,name:'Денис3', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:5,name:'Денис4', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:6,name:'Денис5', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
      {id:7,name:'Денис5', surname: 'Скудило', patronymic:'Кто', email:'d@m.ru'},
    ])
    return {
      columns,
      list
    }
  },
}
</script>
<style lang="scss">
.test {
  height: 100vh;
}
</style>
