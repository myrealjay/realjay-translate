# realjay-translate

This is a text translation plugin tat replaces variables prefixed and surfixed with special characters ke php strtr

#Installation

to install run 
`npm install --save realjay-translate`

in your main.js

```import Translate from "realjay-translate";
import Vue from "vue";

Vue.use(Translate);
```

in your component you can then use

```
let replacements={'$game$':'footbal','$means$':'air'};
let text="I love playing $game$ and i also love to travel by $means$";
let translated=this.$translate(text,replacements);
console.log(translated);
```

