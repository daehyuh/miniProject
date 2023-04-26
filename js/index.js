import { initializeDb, addEntryToDb, getEntryFromDb, searchEntry, clearAllEntries } from './database.js'

// python3 -m http.server 8000
function initApp() {

    // clear
    // clearAllEntries('posts')

    // add dummy posts
    // const dummyPosts = [
    //     {
    //         author: "강대현",
    //         content: "예쁜 우리 강아지",
    //         imageUrl: [
    //             "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    //             "https://images.unsplash.com/photo-1543852786-1cf6624b9987"
    //         ]
    //     }
    // ]
    
    // dummyPosts.forEach((post) => {
    //     addEntryToDb("posts", post);
    // })
    
    getEntryFromDb('posts').then((posts) => {
        posts.forEach((target) => {
            var post = 
            `<div class="post">
                  <div class="postuserdiv">
                      <div class="postusericon">
                          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31 0C13.888 0 0 13.888 0 31C0 48.112 13.888 62 31 62C48.112 62 62 48.112 62 31C62 13.888 48.112 0 31 0ZM31 9.3C36.146 9.3 40.3 13.454 40.3 18.6C40.3 23.746 36.146 27.9 31 27.9C25.854 27.9 21.7 23.746 21.7 18.6C21.7 13.454 25.854 9.3 31 9.3ZM31 53.32C23.25 53.32 16.399 49.352 12.4 43.338C12.493 37.169 24.8 33.79 31 33.79C37.169 33.79 49.507 37.169 49.6 43.338C45.601 49.352 38.75 53.32 31 53.32Z" fill="white"/>
                          </svg>
                      </div>
                      <div class="postusername">
                      ` + target.author + `
                      </div>
                      </div>
                      <div class="image" style=" cursor: pointer;" onclick="location.href='detail.html?id=` + target.id + `';">
                          <img src="data:image/jpeg;base64,` + target.imageUrl[0] + `" width="100%" height="100%">
                      </div>
                      <div class="postdiv">
                      <div class="postdivtext">` + target.author + " " + target.content + `</div>
                  </div>
              </div>`;
            document.querySelector("main").innerHTML += post;
        })
        
    })
}

initializeDb.onsuccess = () => {
    initApp();
};
