<template>
  <div class="ininavbar">
    <div class="row">
      <div id="registering" class="col s6 right">
        <div id="daftardah" class="col s4 right">
          <a onclick="document.getElementById('id03').style.display='block'">
            <h6 id="signupp">Signup</h6>
          </a>
        </div>
      </div>
    </div>

    <h2 id="heades">Go-Blog</h2>

    <div id="id03" class="modal">
      <form class="modal-content animate" action="/action_page.php">
        <div class="imgcontainer">
          <span onclick="document.getElementById('id03').style.display='none'" class="close">&times;</span>
        </div>
        <div class="container">
          <label for="name">
            <b>Username</b>
          </label>
          <input v-model="usernamesignup" type="text" placeholder="Username..." name="name">

          <label for="psw">
            <b>Password</b>
          </label>
          <input v-model="passwordsignup" type="password" placeholder="Password..." name="psw">

          <button onclick="document.getElementById('id03').style.display='none'" @click="signup()" type="button">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernamesignup: '',
      passwordsignup: ''
    }
  },
  methods: {
    signup() {
      let obj = {
        username: this.usernamesignup,
        password: this.passwordsignup
      }
      axios
        .post('http://localhost:3000', obj)
        .then(response => {
          // console.log(response)

          this.$router.push('/')
          swal({
            text: 'Signup Success',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            text: 'Something Wrong',
            icon: 'error'
          })
        })
    }
  }
}
</script>
<style>
#logout {
  margin-right: 15px;
}

#signupp{
  color: whitesmoke;
}
.ininavbar {
  /* border: 1px solid black; */
  width: 100%;
  height: 150px;
  margin-top: -60px;
  background-color: rgb(172, 194, 194);
}

#heades {
  font-family: sans-serif;
}

#registering {
  /* border: 1px solid black; */
}

#daftardah {
  margin-right: 0px;
  margin-top: 10px;
  /* border: 1px solid rgb(5, 37, 36); */
  border-radius: 10px;
  background-color: rgb(39, 189, 164);
}
</style>






