<template>
  <div id="app">
    <div class = "header">
      <h2 style="color:gray;">Double Calculator</h2>
    </div>
    <div class="subHeader">
      <h2 style="color:gray;">Calculator A</h2>
      <h2 style="color:gray;">Calculator B</h2>
      <!-- <div style="color:gray;">Calculator A</div> -->
      <!-- <div style="color:gray;">Calculator B</div> -->
        <div class="column">
          <h1>Results</h1>
          <input class="myInput" v-model="search" v-on="searchHistory" placeholder="Search by result, date" >
          <select  v-model="selected">
            <option class="listDrow" v-for="option in options" v-bind:value="option.value" :key="option">
              {{ option.text }}
            </option>
          </select>
        </div>
    </div>
    <div class="columnBody">
      <Calculator AorB="A"/>
      <Calculator AorB="B"/>
      <Results/>
      
    </div>
    
  </div>
</template>

<script>
import Calculator from './components/Calculator'
import Results from './components/Results'

export default {
  name: 'App',
  // props: {
  //   result: Number,
  //   calA: String,
  //   calB: String,
  // },
  components: {
    Calculator,
    Results
  },
  data() {
    return {
      selected:"A",
        myInput:"",
        options: [
          { text: 'Calculator A', value: 'A' },
          { text: 'Calculator B', value: 'B' },
          { text: 'ALL', value: 'C' }
        ]
    }
  },
  async created() {
      
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    // qwerty(mn) {
    //   console.log('mn :>> ', mn);
    // }
    // searchHistory() {
    //   var input, filter, ul, li, a, i, txtValue;
    //   input = myInput;
    //   filter = input.value.toUpperCase();
    //   ul = document.getElementById("myUL");
    //   li = ul.getElementsByTagName("li");
    //   for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    //   }
    // }
  },
}
</script>

<style>
#app {
  background-color: #f1f1f1;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}


/* h2 {
  float: left;
  display: block;
  color: gray;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  font-size: 24px;
} */
.header {
  width: 100%;
  list-style-type: none;
  margin: 0;
  margin-bottom: 60px;
  padding: 10px;
  overflow: hidden;
  background-color:white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  
}
.subHeader {
  display: grid;
  grid-template-columns: auto auto auto ;
  width: 100%;
  /* padding-left: 25px; */
  grid-gap: 10px;
  /* margin-right:20px; */

  /* padding-right: 90px; */
}
.header > h2{
  /* list-style-type: none;
  margin: 0;
  margin-bottom: 60px;
  padding: 0;
  overflow: hidden;
  background-color:white;
  box-shadow: 5px 10px 8px #888888; */
  font-size: 24px;
}
h1 {
  padding-right: 15px ;
  color:gray;
}
select  {
  padding: 5px 50px;
  border-radius: 18px;
  margin: 20px;
  color: gray;
  outline: none;
  /* padding: 20px; */
}

.listDrow {
  /* padding: 5px 50px; */
  border-radius: 18px;
  margin: 20px 50px 10px 10px;
  outline: none;
  color: gray;
}

.column {
    width: 100%;
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto;
    margin-right:20px;
    padding-right: 20%;
}
.columnBody {
    width: 100%;
    display: grid;
    /* margin-bottom: 20px; */
    text-align: center;
    gap: 50px;
    grid-template-columns: auto auto auto;
}
.myInput {

  border-radius: 18px;
  /* background-position: 10px 10px; */
  /* background-repeat: no-repeat; */
  width:80%;
  height: 21px;
  font-size: 16px;
  padding: 15px;
  border: 1px solid #ddd;
  margin: 20px 20px 10px 10px;
  outline: none !important;
  
}  
</style>
