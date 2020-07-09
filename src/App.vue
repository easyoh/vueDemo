<template>
  <div id="app" v-cloak>
      <router-view/>
  </div>
</template>

<script>
</script>

<style>
//使用v-cloak指令，然后为其设置css样式display:none;
[v-cloak]{
	display:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
body::-webkit-scrollbar{
  display: none;
}
/*o内核*/
body .-o-scrollbar{
    -moz-appearance: none !important;   
    background: rgba(0,255,0,0) !important;  
}
body::-o-scrollbar-button    {
    background-color:rgba(0,0,0,0);
}
body::-o-scrollbar-track     {
    background-color:rgba(0,0,0,0);
}
body::-o-scrollbar-track-piece {
    background-color:rgba(0,0,0,0);
}
body::-o-scrollbar-thumb{
    background-color:rgba(0,0,0,0);
}
body::-o-scrollbar-corner {
    background-color:rgba(0,0,0,0);
}
body::-o-scrollbar-resizer  {
    background-color:rgba(0,0,0,0);
}
/*IE10,IE11,IE12*/
body{
    -ms-scroll-chaining: chained;
    -ms-overflow-style: none;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    -ms-overflow-style: none;
    overflow: auto;
}
</style>
