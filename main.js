
// console.log(data.data.children);
//
// console.log(data.data.children[0].data.title);
const redditArray = data.data.children;

let html = "<ul>"

for(let i = 0; i < redditArray.length; i++) {
  // this is where do
   html = html + "<img src='" + redditArray[i].data.thumbnail + "' />";

}

html = html + "</ul>"

document.body.innerHTML = html;
