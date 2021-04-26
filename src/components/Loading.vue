<template>
  <div id="app">
     <FingerprintSpinner
          :animation-duration="1000"
          :size="400"
          :color="'#235F78'"
     />
  </div>
</template>

<script>
  // To use minified css and js files instead of .vue single file components:
  // import 'epic-spinners/dist/lib/epic-spinners.min.css'
  // import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
  
  import {FingerprintSpinner } from 'epic-spinners'
  export default {
    components: {
      FingerprintSpinner
    }
  }
</script>