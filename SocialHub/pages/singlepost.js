/**
 * Renders a single post page fetched from the API.
 * @returns {Promise<void>}
 */
export default async function singlepost() {
  const app = document.getElementById("app");
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
  const postId = urlParams.get("id");

  const res = await fetch(
    `https://v2.api.noroff.dev/social/posts/${postId}?_author=true`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
    },
  );

  const { data } = await res.json();

  app.innerHTML = `
    <section class="single-post-page">
      <div class="single-post-container">
        <button onclick="history.back()">← Back</button>
        <div class="post-card">
          <h4>${data.author?.name}</h4>
          <p>${new Date(data.created).toLocaleDateString()}</p>
          ${data.media?.url ? `<img src="${data.media.url}" class="post-image" />` : ""}
          <h2>${data.title || ""}</h2>
          <p>${data.body || ""}</p>
        </div>
      </div>
    </section>
  `;
}
