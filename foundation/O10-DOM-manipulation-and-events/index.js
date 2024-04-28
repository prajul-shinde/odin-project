const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm blue h3";
container.appendChild(heading3);

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in div";
div.appendChild(h1);
const p = document.createElement("p");
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");

btn.onclick = () => alert("Hello World");

btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.onclick = alertFunction;

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.backgroundColor = "blue";
});
