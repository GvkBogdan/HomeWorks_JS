// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts


    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            let userBoxs = document.getElementsByClassName('users-box')[0];
            for (const elements of value) {
                console.log(elements)
                let div = document.createElement('div');
                div.innerText = '№ of post - ' +elements.id + '____title of post ---' + elements.title;
                userBoxs.append(div)

            }
    })
        */

//---------------------------------------------------------------------------------------------------------

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті

/*
https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        let postBox = document.getElementsByClassName('post-box')[0];
        for (const elements of value) {
            let li = document.createElement('li')
            li.innerText ='email - ' + elements.email;
            postBox.append(li);

        }
    })
*/

//-----------------------------------------ClassWorck---------------------------------------------------------

/*

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {

        let postUser = document.getElementsByClassName('post-box')[0];

        for (const title of value) {

            let postBlock = document.createElement('div');

            let postTitle = document.createElement('h2');
            postTitle.innerText = `${title.title}`;

            let postBody = document.createElement('p');
            postBody.innerText = `${title.body}`

            let commentBtn = document.createElement('button');
            commentBtn.innerText = 'open comments';

            // postBlock.appendChild(postTitle);
            // postBlock.appendChild(postBody);
            // postBlock.appendChild(commentBtn);
            // postUser.append(postBlock);

            commentBtn.onclick = function (){

                fetch(`https://jsonplaceholder.typicode.com/posts/${title.id}/comments`)

                    .then(value => value.json())
                    .then(value => {

                        let commentBlock = document.getElementsByClassName('comment-box')[0];
                        commentBlock.innerHTML = '';

                        for (const comments of value) {

                            let commentUsers = document.createElement('p');
                            commentUsers.innerText = `${comments.body}`;
                            postBlock.append(commentUsers);

                        }

                    })

            }

            postBlock.appendChild(postTitle);
            postBlock.appendChild(postBody);
            postBlock.appendChild(commentBtn);
            postUser.append(postBlock);
        }

    })


 */