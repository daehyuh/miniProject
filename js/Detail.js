import { initializeDb, addEntryToDb, getEntryFromDb, searchEntry, clearAllEntries } from './database.js'

// python3 -m http.server 8000
function initApp() {
    const urlParams = new URL(location.href).searchParams;
    const id = urlParams.get('id');

    getEntryFromDb('posts').then((posts) => {
        console.log(posts)
        posts.forEach((target) => {
            if (target.id == id){
                console.log(target)
                var imgdiv = ''

                target.imageUrl.forEach(function(data, idx){
                    if(idx==0){
                        imgdiv+=`<div class="carousel-item active">
                        <img src="`+data+`" class="d-block" alt="..." width="100%" height="50%">
                        </div>`
                    } else{
                        imgdiv+=`<div class="carousel-item">
                        <img src="`+data+`" class="d-block" alt="..." width="100%" height="100%">
                        </div>`
                    }
                });

        var post = 
        `<div id = "images">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
                `+imgdiv+`
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      <div id = "content">
        <div  id = "profile">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 0C13.888 0 0 13.888 0 31C0 48.112 13.888 62 31 62C48.112 62 62 48.112 62 31C62 13.888 48.112 0 31 0ZM31 9.3C36.146 9.3 40.3 13.454 40.3 18.6C40.3 23.746 36.146 27.9 31 27.9C25.854 27.9 21.7 23.746 21.7 18.6C21.7 13.454 25.854 9.3 31 9.3ZM31 53.32C23.25 53.32 16.399 49.352 12.4 43.338C12.493 37.169 24.8 33.79 31 33.79C37.169 33.79 49.507 37.169 49.6 43.338C45.601 49.352 38.75 53.32 31 53.32Z" fill="white"/>
        </svg>
          <text id = "profile_id">` + target.author +`</text>
        </div>
        <div class = "row" id = "comment">
          <div class = "col-2" id = "user_id">
            `+target.author+`
          </div>
          <div class = "col-10">
            `+target.content+`
          </div>
        </div>`;
            
            document.querySelector("#post").innerHTML += post;

            }
        })
        
    })

}

initializeDb.onsuccess = () => {
    initApp();
};

