<template>
  <section class="section-chat">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <UserItem userName="César Filho Lima" email="cesarfilho09.cf@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@import "./Chat.css";
</style>
<script>
import Auth from "../../Models/Auth";
import UserItem from "../../components/UserItem/UserItem";
export default {
  beforeCreate() {
    let isAuth = Auth.verifyAuthenticated();
    if (!isAuth) {
      window.location.href = "/login";
    }
  },
  components: {
    UserItem: UserItem,
  },
};
</script>
