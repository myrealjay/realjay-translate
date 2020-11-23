export default {
 install(Vue) {
  Vue.prototype.$translate=function(text,replacements){
        let keys=Object.keys(replacements);
        keys.forEach(key=>{
            let end=key.substring(key.length-1,key.length);
            let start=key.substring(0,key.length-1);
            let re=RegExp(`\\${start}\\${end}`,'g');
            text=text.replace(re,replacements[key]);
        })

        return text;
    }
 }
};