<template>
  <div class="form__group field">
    <input type="input" class="form__field" placeholder="Поиск" name="name" id='name' required />
    <label for="name" class="form__label">Поиск</label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.form__group {
  position: relative;
  padding: 15px 0 0 0;
  width: 10%;
  height: 50px;
}

.form__field {
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  color: $black-color;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 20px;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 15px;
  color: $black-color;
  font-weight: 500;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 20px;
    color: $black-color;
    font-weight:500;
  }
  padding-bottom: 6px;
  font-weight: 500;
  border-width: 2px;
  border-color: $black-color;
  border-image-slice: 2;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
</style>
