<template>
  <div class="listing-header">
    <div class="listing-header__search pl-2 pr-2">
      <input
          type="text"
          v-model="searchValue"
          placeholder="Поиск"
          class="listing-header__input"
          @keydown.enter="searcHandler"
          v-if="!isSearching"
      >
      <v-chip
          v-else
          color="primary"
          closable
          @click:close="searcReset"
      >
        {{ searchValue }}
      </v-chip>
    </div>
    <div class="listing-header__actions pl-2 pr-2">
      <slot/>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'
export default {
  name:'ListingHeader',
  setup() {
    const isSearching = ref(false)
    const searchValue = ref('')

    const searcHandler = () => {
      isSearching.value = true
    }
    const searcReset = () => {
      searchValue.value = ''
      isSearching.value = false
    }

    return {
      searchValue,
      isSearching,
      searcHandler,
      searcReset
    }
  },
}
</script>
<style lang="scss" scoped>
$row-height: 44px;
.listing {
  &-header {
    height: $row-height;
    background: $white;
    border: $border;
    display: grid;
    grid-template-columns: 1fr minmax($row-height,max-content);
    //display: flex;
    //align-items: center;
    //justify-content: space-between;
    //padding: 0px 10px ;
    &__search {
      height: 100%;
      flex: 1 auto;
      box-shadow: 1px 0px 0px 0px rgba(218, 218, 218, 1);
      display: flex;
      align-items: center;
    }
    &__actions {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__input {
      border: none;
      outline: none;
      display: block;
      width: 100%;
      font-size: 14px;
      color: $dark;
    }
  }
}
</style>
