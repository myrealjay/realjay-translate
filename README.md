# realjay-translate

This is a text translation plugin that replaces variables prefixed and surfixed with special characters like php strtr

#Installation

to install run 
`npm install --save realjay-translate`

in your main.js

```
import Vue from "vue";
import Translate from "realjay-translate";

Vue.use(Translate);
```

in your component you can then use

```
let replacements={'$game$':'footbal','$means$':'air'};
let text="I love playing $game$ and i also love to travel by $means$";
let translated=this.$translate(text,replacements);
console.log(translated);
```

Fint it on the <a href="https://github.com/myrealjay/realjay-translate">Github Link</a>

