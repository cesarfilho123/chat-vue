<template>
    <h4>
        Chart.Js
    </h4>
</template>
<script>
import Auth from '../../Models/Auth';
export default {
    beforeCreate(){
        let isAuth = Auth.verifyAuthenticated();
        if(!isAuth){
            window.location.href = '/login'
        }
    }
}
</script>