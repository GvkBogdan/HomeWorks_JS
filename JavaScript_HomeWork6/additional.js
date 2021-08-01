// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//


fetch ('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json() )
    .then(value => {

        boxUsers = document.getElementsByClassName('box-users')[0];

        for (const users of value) {

            let blockUser = document.createElement('div');

            let idUser = document.createElement('p');
            idUser.innerText = users.id;

            let nameUser = document.createElement('p');
            nameUser.innerText = users.name;

            let nameUsername = document.createElement('p');
            nameUsername.innerText = users.username;


            let userBtn = document.createElement('button');
            userBtn.innerText = 'Post of user';


            userBtn.onclick = function () {

                fetch (`https://jsonplaceholder.typicode.com/posts`)
                    .then(value => value.json())
                    .then(value => {

                        postUser = document.getElementsByClassName('post-box')[0]
                        postUser.innerHTML = '';

                        const userPosts = value.filter(post => post.userId === users.id)


                        for (const post of userPosts) {

                            let postBlock = document.createElement('div');

                            let titlePost = document.createElement('h3');
                            titlePost.innerText = post.title;

                            let bodyPost = document.createElement('p');
                            bodyPost.innerText = post.body;

                            let commentsBtn = document.createElement('button');
                            commentsBtn.innerText = 'Comments of post';

                            commentsBtn.onclick = function () {

                                fetch(`https://jsonplaceholder.typicode.com/posts/${users.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {

                                        commentsUser = document.getElementsByClassName('box-users')[0];
                                        commentsUser.innerHTML = '';

                                        for (comment of value ){

                                            let commentBlock = document.createElement('div');

                                            let commentUsers = document.createElement('p');
                                            commentUsers.innerText = `${comment.body}`;
                                            commentBlock.append(commentUsers);
                                            commentsUser.appendChild(commentBlock)


                                        }
                                    })

                            }

                            postBlock.appendChild(titlePost);
                            postBlock.appendChild(bodyPost);
                            postBlock.appendChild(commentsBtn);
                            blockUser.appendChild(postBlock);

                        }

                    })
            }
            blockUser.appendChild(idUser);
            blockUser.appendChild(nameUser);
            blockUser.appendChild(nameUsername);
            blockUser.appendChild(userBtn);
            boxUsers.appendChild(blockUser);

        }

    })
