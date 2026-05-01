export default function post() {

    const app = document.getElementById("app");

    app.innerHTML = `
  <section class="post-page">
    <div class="post-form-container">

      <form id="post-form">
        <input id="title" placeholder="Title" />
        <textarea id="body" placeholder="What's on your mind?"></textarea>
        <button type="submit">Post</button>
      </form>

    </div>
  </section>
  `;

    const postForm = document.getElementById("post-form");
    const titleInput = document.getElementById("title");
    const bodyInput = document.getElementById("body");

    postForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();

        if (!title) {
            alert("Title is required");
            return;
        }

        const token = localStorage.getItem("token");

        const response = await fetch("https://v2.api.noroff.dev/social/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                body
            })
        });

        const data = await response.json();

        console.log("DATA:", data);

        if (!response.ok) {
            alert(data.errors?.[0]?.message || "Post failed");
            return;
        }

        alert("Post created!");
        window.location.hash = "#/home";
    });
}