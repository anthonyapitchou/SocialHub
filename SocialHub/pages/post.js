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
  const imageInput = document.getElementById("image");

  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const image = imageInput.value.trim();

    const token = localStorage.getItem("token");
    const apiKey = localStorage.getItem("apiKey");

    try {
      const response = await fetch("https://v2.api.noroff.dev/social/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
        body: JSON.stringify({
          title: title || "Post", // 🔥 toujours présent
          body: body || " ", // 🔥 évite body vide
          media: image || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data); // 🔥 pour debug
        alert(data.errors?.[0]?.message || "Post failed");
        return;
      }

      alert("Post created!");
      postForm.reset();

      // reload propre
      window.location.hash = "#/home";
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  });
}
