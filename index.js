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
            imageUrl: "https://images.unsplash.com/photo-1561948955-570b270e7c36",
        },
        {
            author: "오승기",
            content: "산책중",
            imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
        },
        {
            author: "이영진",
            content: "행복한 리트리버",
            imageUrl: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8",
        },
        {
            author: "류영준",
            content: "슬프다.",
            imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
        },
    ]
    
    dummyPosts.forEach((post) => {
        addEntryToDb("posts", post);
    })

    // get post
    getEntryFromDb('posts', 1).then((post) => {
        console.log(post)
    })
  
    // get all posts
    getEntryFromDb('posts').then((posts) => {
      console.log(posts)
    })
  
    // search post by author
    searchEntry('posts', '강대현').then((posts) => {
        console.log(posts)
    })

    // search post by content
    searchEntry('posts', '슬프다').then((posts) => {
        console.log(posts)
    })
}

initializeDb.onsuccess = () => {
    initApp();
};