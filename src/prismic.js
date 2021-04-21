import pr from "prismic-javascript";
import Vue from "vue";
class Prismic {
  constructor() {
    this.api = "https://buoyline.cdn.prismic.io/api/v2";
  }
  async fetchData() {
    return new Promise((res) => {
      pr.api(this.api)
        .then((api) => {
          return api.query("", { pageSize: 100 });
        })
        .then((data) => {
          Vue.prototype.$homepage = data.results.filter(
            (i) => i.type === "homepage"
          )[0].data.body;
          Vue.prototype.$menubar = data.results.filter(
            (i) => i.type === "menubar"
          )[0].data;

          // console.log(Vue.prototype.$menubar);
          res();
        });
    });
  }
}
export const prismic = new Prismic();

Vue.prototype.$text = (text) => {
  var returnText = "";
  for (let i = 0; i < text.length; i++) {
    returnText += text[i].text;
    // returnText += `&#13;&#10`;
  }
  return returnText;
};

Vue.prototype.$html = (text) => {
  // console.log(text[0].type);

  if (text[0].spans.length) {
    switch (text[0].spans[0].type) {
      case "hyperlink": {
        return `<a href="${text[0].spans[0].data.url}">${Vue.prototype.$text(
          text
        )}</a>`;
      }
    }
  }

  switch (text[0].type) {
    case "paragraph": {
      return `<p>${Vue.prototype.$text(text)}</p>`;
    }
  }

  return `<p>${Vue.prototype.$text(text)}</p>`;
};
