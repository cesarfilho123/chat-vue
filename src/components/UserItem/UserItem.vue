<template>
  <div class="d-flex border-bottom pb-2 align-items-center justify-content-between">
    <div class="d-flex">
      <img
        src="https://via.placeholder.com/80"
        alt=""
        class="img-fluid rounded-circle"
      />
      <div class="pl-3">
        <h5>
          {{ userName }}
        </h5>
        <p>
          {{ email }}
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-end">
        <a href="">
            Iniciar conversar
        </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserItem",
  props: {
    userName: String,
    email: String,
    image: String,
  },
};
</script>
