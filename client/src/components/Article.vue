<template>
  <div class="details">
    <div id="comment" class="row">
      <div class="content">
        <div class="row">
          <div id="mantap" class="col s6 right">
            <div id="mantapp" class="col s5 right"><a ><h6>Delete</h6></a></div>
            <div id="mantapp" class="col s5 right"><a ><h6>Edit</h6></a></div>
          </div>
        </div>
        <h3>{{article.title}}</h3>
        <img v-bind:src="article.image" alt="" width="100%">
        <p align="justify">
          {{article.content}}
        </p>
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
      article: []
    }
  },
  created() {
    this.getAll()
    this.getOneArticle()
  },
  watch: {
    $route(to, from) {
      this.getOneArticle()
    }
  },
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    ...mapActions(['getAll']),

    getOneArticle() {
      axios({
        method: 'get',
        url: `http://localhost:3000/home/blogs/${this.$route.params.id}`
      }).then(response => {
        this.article = response.data.Article
        // console.log(response.data.Article.title)
      })
    }
  }
}
</script>












<style>
.textArea {
  border-radius: 5px;
  border: none;
}



.nav-wrapper {
  background-color: rgb(236, 243, 243);
  height: 100px;
}

#centerbody {
  margin-top: 15px;
  /* border: 1px solid black; */
  height: auto;
  background-color: rgb(249, 253, 253);
  padding: 50px 50px;
}

#right {
  margin-top: 15px;
}
#left {
  margin-top: 15px;
}

#boxright {
  /* border: 1px solid black; */
  background-color: rgb(249, 253, 253);
}
#boxleft {
  /* border: 1px solid black; */
  background-color: rgb(249, 253, 253);
}

#leftright {
  padding: 20px 20px;
}

#oii {
  align-content: left;
  /* border: 1px solid black; */
  padding: 5px 5px;
  height: auto;
}



#mantapp{
  border: 1px solid rgb(76, 221, 214);
  margin-left: 15px;
  border-radius: 10px;
}

#oit {
  /* border: 5px solid black; */
  border-radius: 5px;
  margin-top: 10px;
  background-image: url('https://cdn.newsapi.com.au/image/v1/053e70ddc55e5aa4b1584e2485331c20');
}

#itu {
  max-width: 100%;
  max-height: 100%;
  border-radius: 125px;
  /* border: 2px solid black; */
}

#rightprofile {
  /* border: 1px solid black; */
}

#actionprofile {
  color: rgb(1, 8, 8);
}

.content {
  /* border: 1px solid black; */
  width: 110%;
  margin-left: -30px;
}

#photo {
  /* border: 1px solid black; */
  height: 50px;
}

#comm {
  /* border: 1px solid black; */
  color: white;
}

#likebutton {
  /* border: 1px solid black; */
  margin-top: 10px;
}

#like {
  /* border: 1px solid black; */
  /* color: rgb(240, 94, 94); */
  justify-content: right;
  display: flex;
}

#usernametwitter {
  color: rgb(125, 210, 231);
}

#judulnya {
  width: 100%;
  height: 50px;
  /* border: 1px solid black; */
}

#nah {
  /* border: 1px solid black; */
  /* padding: 5px; */
  margin: 3px 3px 3px 3px;
  justify-content: center;
  display: flex;
}

#ciat {
  padding: 5px;
  justify-content: center;
  display: flex;

  background-color: rgb(213, 224, 224);
}

.waves-effect {
  height: 30px;
}
a {
  color: black;
  font-size: 18px;
}
a:visited {
  color: rgb(224, 54, 54);
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: red;
  background-color: transparent;
  text-decoration: none;
}

#nama {
  color: rgb(7, 2, 2);
}
</style>
