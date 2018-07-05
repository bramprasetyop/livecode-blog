<template>
  <div>
    <div class="col s12" id="oit">

      <div class="col s5">
        <div id="oii">
          <!-- bisa image -->
        </div>
      </div>
      <h6 id="nama">
        <h4>
          <strong>Articles</strong>
        </h4>
      </h6>
    </div>

    <div id="leftright">
      
      <div v-for="(article,index) in articles" :key="index">

        <h6>
          <a @click="changeHome()">
            <router-link :to="`/content/${article._id}`">{{article.title}}</router-link>
          </a>

        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      homepage: true
    }
  },
  created() {
    this.getAll()
  },
  computed: {
    ...mapState(['articles', 'article'])
  },
  methods: {
    ...mapActions(['getAll']),
    logout() {
      localStorage.clear()
      this.$router.push('/')
    },
    getOneArticle(id) {
      axios({
        method: 'get',
        url: `http://localhost:3000/home/blogs/${id}`
      })
        .then(({ data }) => {
          console.log('xxxxxxx', data)
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    changeHome() {
      homepage: false
    }
  }
}
</script>