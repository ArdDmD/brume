<template>
  <div
    class="listing-header__search pl-2 pr-2"
    @click="openModalHandler"
  >
    <input
      type="text"
      v-model="searchValue"
      placeholder="Поиск"
      class="listing-header__input pl-3"
      @keydown.enter="searchHandler"
      @input="$emit('input')"
      v-if="!isSearching"
    >
    <AppChip @close="searchReset" v-else>
      {{searchValue}}
    </AppChip>
  </div>
</template>
<script>
import {ref} from "vue";
import {AppChip} from '~/shared'
export default {
  emits:['search','searchReset','openModal', 'input'],
  name: 'HeaderSearch',
  components:{
    AppChip
  },
  setup(_, {emit}) {
    const searchValue = ref('')
    const isSearching = ref(false)

    const searchHandler = () => {
      isSearching.value = true
      emit('search', searchValue.value)
    }

    const searchReset = () => {
      isSearching.value = false
      searchValue.value = ''
      emit('searchReset', searchValue.value)
    }

    const openModalHandler = () => {
      if (searchValue.value) return
      emit('openModal')
    }

    return {
      searchValue,
      isSearching,
      searchHandler,
      searchReset,
      openModalHandler
    }
  }
}
</script>
<style lang="scss" scoped>
.listing {
  &-header {
    &__search {
      height: 100%;
      overflow-x: scroll;
      flex: 1 auto;
      display: flex;
      align-items: center;
      @include reset-scroll;
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
