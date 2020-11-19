<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <form action="">
                <div class="form-group">
                    <label for="nome">
                        Nome
                    </label>
                    <input type="nome" class="form-control" name="nome" 
                    id="nome" 
                    placeholder="Digite seu nome">
                </div>
                <div class="form-group">
                    <label for="email">
                        E-mail
                    </label>
                    <input type="email" class="form-control" name="email" 
                    id="email" 
                    placeholder="Digite seu e-mail">
                </div>
                <div class="form-group">
                    <label for="password">
                        Senha
                    </label>
                    <input type="password" class="form-control" name="password" 
                    id="password" 
                    placeholder="Digite sua senha">
                </div>
                <div class="d-flex justify-content-end">
                   <button class="btn btn-primary">
                       Efetuar Login
                   </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background: #d3e7ff !important;
}
</style>