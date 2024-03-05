// Vanilla js approach

// const div = document.createElement("div");

// const h2 = document.createElement("h2");
// h2.innerText  = "Hello Iam H2";

// const p = document.createElement("p");
// p.innerText = "Hello I  am Paragraph";

// div.appendChild(h2);

// div.appendChild(p);

// document.getElementById("root").appendChild(div);


// React Approach

const h1 = React.createElement('h1', { className: 'heading', id: "heading"}, 'Learn web development');

const p1 = React.createElement('p', {className: 'para'}, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');

const p2 = React.createElement('p', {className: 'para'}, `The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from `, React.createElement('a', {href: 'https://developer.mozilla.org/en-US/docs/Learn'}, 'the rest of MDN'), `, and the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.`);

const p3 = React.createElement('p', {className: 'para'}, `If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.`);

const div = React.createElement('div', {className: 'container'}, h1, p1, p2,  p3);

ReactDOM.render(div, document.getElementById('root'));