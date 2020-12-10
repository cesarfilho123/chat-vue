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
          César Filho Lima
        </h5>
        <p>
          cesarfilho078@gmail.com
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-end">
    </div>
  </div>
</template>
<script>
export default {
  name: "UserItem",
  props: {
    name: String,
    email: String,
    image: String,
  },
};
</script>
