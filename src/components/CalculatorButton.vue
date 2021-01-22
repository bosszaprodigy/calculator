<template>
  <div class="card">
    <h1>test</h1>
    <!-- <div class="grid-container ">
      <div v-for=" n in 20 " :key="n">
        <button  class="grid-item">{{n}}</button>
      </div>
    </div> -->

  </div>  
</template>

<script>
export default {
name: 'CalculatorButton',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      // row: 5,
      // numbers: [ 1, 2, 3, 4, 5 ],
    }
  },
}
</script>

<style>
/* .button {
  background-color: #5fc0d8;
  border-radius: 8px;
  color: rgb(97, 97, 97);
  padding: 15px 20px;
  text-align: center;
  border: none !important;
  font-size: 20px;
  cursor: pointer;
} */
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px 10px;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
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
  padding: 50px 100px;
  text-align: center;
  background-color: #f1f1f1;
}

</style>
