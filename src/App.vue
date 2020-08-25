<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*, *::before, *::after {
    box-sizing: border-box;
}

html, body {
  font-size: 16px;
  background-color: #f6f6f6 !important;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
