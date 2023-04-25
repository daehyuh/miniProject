import { initializeDb, addEntryToDb, getEntryFromDb, searchEntry, clearAllEntries } from './database.js'

// python3 -m http.server 8000
function initApp() {
    const urlParams = new URL(location.href).searchParams;
    const key = urlParams.get('key');
    console.log(key);

    searchEntry('posts', key).then((posts) => {
      console.log(posts)
      posts.forEach((target) => {
      var imageTag = `
      <div style='background-color:black;padding:10px 10px 50px 10px'>
      <h2 style="margin:0px auto; padding:0px auto; color:white;margin-bottom: 5px;">`+target.author+`</h2>
      <div class="cell" style=" cursor: pointer;" onclick="location.replace('Detail.html?id=` + target.id + `');"> <img src="` + target.imageUrl[0] + `" width=100% height=100%> </div>
      <div style='color:white'>`+target.content+`</div>
      </div>
      `;

      document.querySelector("#gridView").innerHTML += imageTag;
      })
    
    })
}

initializeDb.onsuccess = () => {
    initApp();
};

