<template>
  <div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { isArray } from "javascript-validate-utils"

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const submit = () => {
  const arr = [formState.username]
  console.log("arr is :", arr)

  if(isArray(arr)) {
    console.log("test successfully!")
  } else {
    alert('test Failed!');
  }
};

</script>