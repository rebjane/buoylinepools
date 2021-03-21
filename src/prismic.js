import pr from 'prismic-javascript';
import Vue from 'vue';
class Prismic {
    constructor() {
      this.api = "https://buoyline.cdn.prismic.io/api/v2";
    }
    async fetchData() {
        return new Promise((res) => {
            pr.api(this.api)
            .then((api) => {
              return api.query("", { pageSize: 100 });
            }).then(data => {
                // console.log(data.results);
                Vue.prototype.$homepage = data.results.filter(i => i.type === "homepage")[0].data.body;
                // console.log(Vue.prototype.$homepage);
                res();
            })
        })
    }
  }
export const prismic = new Prismic();
  
Vue.prototype.$text = (text) => {
    return text[0].text;
};
  