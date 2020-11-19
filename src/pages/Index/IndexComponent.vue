<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-8">
        <div
          class="h-row d-flex justify-content-center align-items-center flex-column"
        >
          <h4 class="font-weight-bold">Bem-vindo ao SpeedChat</h4>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            accusamus eligendi fuga repellendus dolorem soluta, libero quasi
            alias, ut dolor.
          </p>
          <div class="container-buttons mb-4">
            <a href="/register" class="btn btn-primary-outline"> Cadastre-se </a>
            <a href="/login" class="ml-4 btn btn-primary"> Entrar </a>
          </div>
          <center>
            <img
              src="../../images/chat.svg"
              alt="SpeedChat"
              class="chat-image img-fluid"
            />
            <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
};
</script>
<style  scoped>
.h-row {
  height: 80vh;
}
.chat-image {
  width: 60%;
}
.container-buttons a {
  min-width: 120px;
}

</style>
