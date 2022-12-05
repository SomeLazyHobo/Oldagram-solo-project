    //  <div id="posts">
    //         <section id="postone">
    //             <div class="posterinfo">
    //                 <img id="posteravatar" src="">
    //                 <a id="postername" src="#"></a>
    //                 <a id="posterlocation" src="#"></a>
    //             </div>
    //             <img id="postimage" src="">
    //             <div id="iconSection">
    //                 <img class="like">
    //                 <img class="comment">
    //                 <img class="share">
    //             </div>
    //             <p id="likes"></p>
    //             <p id="usernameCaption"></p>
    //         </section>
    //     </div>

//Use template strings with above ^^^


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postfeed = document.getElementById("postsfeed")

function renderPosts() {
    posts.forEach(function(posts) {
        postfeed.innerHTML += 
        `<div class="post">
        
            <header class="headerinfo">
                <img class="avatar" src="${posts.avatar}">
                <div class="namelocationbox">
                    <span class="name">${posts.name}</span>
                    <span class="location">${posts.location}</span>
                </div>
            </header>
                    
            <img class="postimage" src="${posts.post}">
            
            <div class="belowimagestuff">
                <img class="icon like" id="like-btn" src="images/icon-heart.png">
                <img class="icon comment" src="images/icon-comment.png">
                <img class="icon share" src="images/icon-dm.png">
                <p id="likes">${posts.likes} likes</p>
                <p class="usernamecomment"><span class="username">${posts.username}</span> <span class="comment">${posts.comment}</span></p>
            </div>
        </div>`
    }) 
}

renderPosts()