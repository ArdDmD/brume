<template>
  <div class="test">
    <ListingComponent
        :columns="columns"
        :filters="filters"
        query="product"
    >
      <template #actions>
        <AddButton/>
      </template>

      <template #cols="{item}">
        <TextColumn
            :item="item"
            field="id"
        />
        <TextColumn
            :item="item"
            field="name"
        />
        <TextColumn
            :item="item"
            field="vendorCode"
        />
        <TextColumn
            :item="item"
            field="description"
        />
      </template>
    </ListingComponent>
  </div>
</template>
<script>
import {ListingComponent} from '~/entities'
import {AddButton} from '~/shared'
import {TextColumn} from "~/features";

import {ref} from "vue";

definePageMeta({ layout: 'default' });
export default {
  components: {
    TextColumn,
    ListingComponent,
    AddButton
  },
  async setup() {
    const columns = ref([
      {title: '№', field: 'id', size: '100px', notGrow: true},
      {title: 'Имя', field: 'name', size: '100px', notGrow: true},
      {title: 'Вендор', field: 'vendorCode', size: '150px'},
      {title: 'Описание', field: 'description', size: '180px'},
    ])

    const filters = ref([
      {title: 'Цвет',query: 'color',filterBy:'colors.keyWord'},
      {title: 'Категории',query: 'category',filterBy:'categories.keyWord'}
    ])

    return {
      columns,
      filters
    }
  },
}
</script>
<style lang="scss">
.test {
  height: 100vh;
}
</style>
