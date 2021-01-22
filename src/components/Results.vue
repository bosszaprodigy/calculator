<template>
  <div class="card" style='overflow-y: auto;height: 450px; width: 450px'>

    <div v-for=" n in Box " :key="n" >
      <div class="columnBody">
        <p>Calculator: {{n.DD}}</p>
        <p>{{n.BB}}</p>
      </div>
        <p>{{n.AA}}</p>
        <hr/>
        <p>{{n.CC}}</p>
      <!-- <hr> -->
    </div>
    
    <button @click="buttonClear">Clear result</button>

  </div>  
</template>
<script>

// import myFunc from "../js/myFunction"
export default {
    name: 'Results',
    props: {
      result: Number
    },
    data() {
      return {
        selected:"A",
        myInput:"",
        Alldate:[],
        date:"",
        scroll:"",
        Allscroll:[],
        Box:[],
        // returnBox:[],
        options: [
          { text: 'Calculator A', value: 'A' },
          { text: 'Calculator B', value: 'B' },
          { text: 'ALL', value: 'C' }
        ]
      }
    },
    async created() {
      // this.showTime();
      this.showData();
    },
    computed: {
      
     

    },
    methods: {
      // getDate() {
      //   myFunc.getSysDate().then(response => {
      //   this.date = response;
      //   console.log('date :>> ', this.date);
      //   });
      // },
      // showTime() {
      //   let currentDate = new Date().toLocaleString();
      //   console.log('currentDate :>> ', currentDate);
      // },
      showData() {
        
        let obj = localStorage.getItem('result');
        this.scroll = JSON.parse(obj)

        for (let i = 0; i < this.scroll.length; i++) {
          this.Box.push({AA:this.scroll[i].Allresults,BB:this.scroll[i].CurrentDate,CC:this.scroll[i].proposition,
          DD:this.scroll[i].CalculatorAB})
        }
        

       

        // console.log('scroll :>> ', this.Box);

       
      },
      buttonClear() {
        localStorage.clear();
        this.Box = [];
      }
    }

    
}
</script>
<style scoped>
/* .grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px 10px;
  padding: 10px;
} */

/* .grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2px;
  font-size: 30px;
  text-align: center;

  background-color: #5fc0d8;
  border-radius: 8px;
  color: rgb(97, 97, 97);
  padding: 15px 20px;
  text-align: center;
  border: none !important;
  font-size: 20px;
  cursor: pointer;
} */


body {
  font-family: Arial, Helvetica, sans-serif;
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
  margin: 20px 20px 10px 10px;
  outline: none;
  color: gray;
}

/* Responsive columns */
/* @media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
} */

.column {
    width: 40%;
    display: grid;
    /* margin-bottom: 20px; */
    text-align: center;
    grid-template-columns: auto auto auto;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px ;
  /* text-align: center; */
  background-color: white;
  display: grid;
  
}
h1 {
  padding-right: 25px ;
  color:gray;
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

.columnBody {
    width: 100%;
    display: grid;
    /* margin-bottom: 20px; */
    text-align: left;
    gap: 50px;
    grid-template-columns: auto auto;
}
p {
  text-align: left;
}


</style>