import { initializeDb, addEntryToDb, getEntryFromDb, searchEntry, clearAllEntries } from './database.js'

// python3 -m http.server 8000
function initApp() {

    // clear
    clearAllEntries('posts')

    // add dummy posts
    const dummyPosts = [
        {
            author: "강대현",
            content: "예쁜 우리 강아지",
            imageUrl: [
                "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
                "https://images.unsplash.com/photo-1543852786-1cf6624b9987"
            ]
        },
        {
            author: "나종우",
            content: "귀여운 내 새끼",
            imageUrl: ["https://images.unsplash.com/photo-1561948955-570b270e7c36"],
        },
        {
            author: "오승기",
            content: "산책중",
            imageUrl: ["https://images.unsplash.com/photo-1555685812-4b943f1cb0eb"],
        },
        {
            author: "이영진",
            content: "행복한 리트리버",
            imageUrl: ["https://images.unsplash.com/photo-1514984879728-be0aff75a6e8"],
        },
        {
            author: "류영준",
            content: "슬프다.",
            imageUrl: ["https://images.unsplash.com/photo-1560807707-8cc77767d783"],
        },
        {
            author: "나종우",
            content: "귀여운 내 새끼 하나 더",
            imageUrl: ["https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"],
        },
        {
            author: "오승기",
            content: "걷기 중",
            imageUrl: ["https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"],
        },
        {
            author: "이영진",
            content: "재밌는 늑대",
            imageUrl: ["https://plus.unsplash.com/premium_photo-1667443188826-44d48cb85159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
        },
        {
            author: "류영준",
            content: "하하호호.",
            imageUrl: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"],
        },
        {
            author: "나종우",
            content: "귀여웡",
            imageUrl: ["https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
        },
        {
            author: "오승기",
            content: "ㅎㅎㅎㅎㅎ",
            imageUrl: ["https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"],
        },
        {
            author: "이영진",
            content: "강아지와",
            imageUrl: ["https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"],
        },
        {
            author: "류영준",
            content: "룰루랄라",
            imageUrl: ["https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
        },
        {
            author: "강대현",
            content: "하하호호",
            imageUrl: ["https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"],
        },
        {
            author: "이영진",
            content: "어머나 세상에",
            imageUrl: ["https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
        },
        {
            author: "류영준",
            content: "난 강아지가 좋아",
            imageUrl: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"],
        },
    ]
    
    dummyPosts.forEach((post) => {
        addEntryToDb("posts", post);
    })
    
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
                      <div class="image" style=" cursor: pointer;" onclick="location.href='Detail.html?id=` + target.id + `';">
                          <img src="` + target.imageUrl[0] + `" width="100%" height="100%">
                      </div>
                      <div class="postdiv">
                      <div class="postdivtext"> <p style="font-weight:900; display:inline">` + target.author + "</p> " + target.content + `</div>
                  </div>
              </div>`;
            document.querySelector("main").innerHTML += post;
        })
        
    })
}

initializeDb.onsuccess = () => {
    initApp();
};
