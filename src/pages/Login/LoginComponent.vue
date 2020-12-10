<template>
<section class="section-center-bg">
  <div class="container-fluid">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <center>
                <a href="/">
                    <img src="https://via.placeholder.com/120" class="rounded-circle" alt="" />
                </a>
            </center>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">
                        E-mail
                    </label>
                    <input type="email" class="form-control" name="email" 
                    id="email" 
                    placeholder="Digite seu e-mail" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="password">
                        Senha
                    </label>
                    <input type="password" class="form-control" name="password" 
                    id="password" 
                    placeholder="Digite sua senha" v-model="user.password">
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
</section>
</template>
<script>
import Auth from '../../Models/Auth';

export default {
  data(){
    return{
      user:{
        email:'',
        password:''
      }

    }
  },
  methods:{
    async login(){
      const result = await Auth.login(this.user);
      if(!result.data.token){
        alert('Usuário não cadastrado em nossa base de dados');
      }else{
        localStorage.setItem('token',result.data.token);
        localStorage.setItem('user',result.data.user.email);
        window.location.href="/chat"
      }
    }
  }
}
</script>
<style>

</style>