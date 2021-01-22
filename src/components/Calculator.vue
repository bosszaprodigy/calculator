<template>
  <div class="card" style="height: 420px; width: 430px">
  
    <p result="result">{{numberWithCommas(result)}}</p>

  <hr>
    <p>{{numberWithCommas(myString)}}</p>
    <!-- <p>{{numberWithCommas(newLOVE)}}</p> -->
    
      <table style="width:100%">
        <tr>
          <th><button class="grid-item" @click="Number123('c')">C</button></th>
          <th><button class="grid-item" @click="Number123('*')">X</button></th> 
          <th><button class="grid-item" @click="Number123('-')">-</button></th>
          <th rowspan="2"><button class="grid-item" @click="Number123('+')">+</button></th>
        </tr>
        <tr>
          <td><button class="grid-item" @click="Number123('7')">7</button></td>
          <td><button class="grid-item" @click="Number123('8')">8</button></td>
          <td><button class="grid-item" @click="Number123('9')">9</button></td>
        </tr>
        <tr>
          <td><button class="grid-item" @click="Number123('4')">4</button></td>
          <td><button class="grid-item" @click="Number123('5')">5</button></td>
          <td><button class="grid-item" @click="Number123('6')">6</button></td>
          <td rowspan="3"><button class="grid-item" @click="sentAPI()">=</button></td>
        </tr>
        <tr>
          <td><button class="grid-item" @click="Number123('1')">1</button></td>
          <td><button class="grid-item" @click="Number123('2')">2</button></td>
          <td><button class="grid-item" @click="Number123('3')">3</button></td>
        </tr>
        <tr>
          <td colspan="2"><button class="grid-item" @click="Number123('0')">0</button></td>
          <td><button class="grid-item" @click="Number123('.')">.</button></td>
        </tr>
      </table>

      

  </div>
</template>

<script>
// import CalculatorButton from './CalculatorButton'
import myFunc from "../js/myFunction";
// import getResult from "../js/myFunction"


export default {
name: 'Calculator',
  props: {
    // msg: String,
    AorB: String,
    // calB: String,
  },
  components: {
    // Calculator,
    // CalculatorButton
  },
  data() {
    return {
      buttonClaer:"",
      buttonmultiple:"",
      buttonminus:"",
      buttonplus:"",
      proposition:"",
      // newResults:[],
      result:"",
      Allresults:[],
      showResults:"",
      currentDate:"",
      newLOVE:"",
      myString:"",
      // localStorage:[],
    }
  },
  mounted() {
    if (localStorage.result) {
      this.Allresults = JSON.parse(localStorage.result);
    }
  },
  watch: {
    Allresults: { 
      handler(newResult) {
        localStorage.result = JSON.stringify(newResult);
        // console.log('localStorage.result :>> ', localStorage.result);
      },
      deep: true
    },
    // num: {
    //   if() {

    //   }
    // },
  },
  methods: {
    Number123(num) {
      // /[\+\*\-]/
      // this.proposition += num;
      // let arrayLength , lastcharector;
      // lastcharector += num;
      // arrayLength = lastcharector[lastcharector.length];
      // console.log('this.proposition :>> ', typeof this.proposition);
      // if (num == "c") {
      //   this.proposition = "";
      //   this.result = "";
      //   // return false
      // } 
      if (num == "c") {
          this.myString = "";
          // return false;
      } else if (["*","+","-"].includes(num) ) {

         this.myString += num;
         let old_string
         old_string = this.myString;
         old_string = old_string.charAt(old_string.length-2)
          console.log('this.myString :>> ', old_string);

        this.myString = this.myString.replace(old_string,num)
        console.log('newValue :>> ', this.myString);

 
        
        // this.myString = this.myString.replace(this.myString.charAt(this.myString.length-1), num);

  //       var str = "Hello world!"; 
  // var res = str.substring(str.length - 1, str.length);

         
          // let new_string;
          // let last_string;
          // let old_string;

          // new_string = this.myString;
          // old_string = this.myString;
          // console.log('old :>> ', new_string);
          // console.log('new :>> ', new_string.substring(new_string.length-1,new_string.length));

      
          // last_string = old_string.charAt(old_string.length-1)
          // console.log(' last_String ', last_string);
          // last_string = last_string.substring(last_string.length-1)


          // old_string = old_string.replace(last_string,num) 
        

      } else {

        this.myString += num;

        // console.log('myString :>> ', this.myString);
      } 
     

      
     

        
      
     
      
    },
    async callAPI() {
      // await myFunc.getValue().then(res => {
      //   console.log('res :>> ', res);
      // })
      // .catch(error => {
      //   console.log('error ');
      // });
    },
    async sentAPI() {
      
      // console.log('AorB :>> ', this.AorB); 

      let param = this.proposition;
      // let newResult = {'proposition':this.proposition}
      param = param.replace(/\+/g, "%2B");
      param = param.replace(/-/g, "%2D");
      param = param.replace(/\*/g, "%2A");
      
      // console.log('ai :>> ', param);
      this.result = await myFunc.addValue(param)
        
      // console.log('this.result :>> ', this.result);
      this.$emit("calA", this.result);
      this.$emit("calB", this.result);

      this.currentDate = new Date().toLocaleString();

      let newResult = {'Allresults':this.result,'CurrentDate':this.currentDate,'proposition':this.proposition,'CalculatorAB':this.AorB}
      this.Allresults.push(newResult);
      // console.log('Allresults :>> ', this.Allresults);
      
      localStorage.setItem('result', this.Allresults);
      


      // this.result = await getResult(param)
      // console.log('this.result :>> ', this.result);

    },
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },

  }
}
</script>

<style>
 th, td {
  /* border: 1px solid black; */
  /* padding: 2px; */
  background-color: #5fc0d8;
  border-radius: 8px;
  color: rgb(97, 97, 97);
}
table {
  border-spacing: 15px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px 10px;
  padding: 10px;
}

.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 10px;
  font-size: 15px;
  background-color: #5fc0d8;
  border-radius: 8px;
  color: rgb(97, 97, 97);
  padding: 15px 20px;
  text-align: center;
  border: none !important;
  cursor: pointer;
}
p {
  font-size: 20px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 100px 10px 10px 10px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
}
</style>