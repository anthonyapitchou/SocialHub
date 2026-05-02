import { renderNavbar } from "../components/navbar.js";
import { initSearch } from "../components/navbar.js";

export default async function home() {
  renderNavbar();

  const app = document.getElementById("app");

  app.innerHTML = `
<section class="home-page">
  <div class="home-container">

    <aside class="sidebar-left">
      <div class="user-profile-card">
        <img src="./assets/images/profile.jpg" class="sidebar-profile-img" />
        <div class="profile-info">
          <h3>anthonyapitch</h3>
          <p>Frontend Developer • Creative Mind</p>
        </div>
      </div>
      <nav class="sidebar-menu">
        <a href="#/home">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/messages">Messages</a>
        <a href="#/explore">Explore</a>
      </nav>
    </aside>

    <main class="main-feed">
      <form id="post-form">
        <input id="title" placeholder="Title" />
        <textarea id="body" placeholder="Caption"></textarea>
        <input id="image" placeholder="Image URL" />
        <button type="submit">Post</button>
      </form>
      <div id="posts-container"></div>
    </main>

    <aside class="sidebar-right"></aside>
  </div>
</section>
`;

  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const name = localStorage.getItem("name");

  if (!name) {
    localStorage.setItem("name", "anthony");
  }

  // ===== CREATE POST =====
  const form = document.getElementById("post-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const body = document.getElementById("body").value.trim();
    const image = document.getElementById("image").value.trim();

    try {
      const response = await fetch("https://v2.api.noroff.dev/social/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
        body: JSON.stringify({
          title: title || "Post",
          body: body || " ",
          media: image ? { url: image, alt: "" } : undefined,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        console.log("ERREUR API:", err);
        alert(err.errors?.[0]?.message || "Error creating post");
        return;
      }
      home();
    } catch (error) {
      console.error(error);
    }
  });

  // ===== LOAD POSTS =====
  const container = document.getElementById("posts-container");

  const res = await fetch(
    "https://v2.api.noroff.dev/social/posts?_author=true",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
    },
  );

  const data = await res.json();

  container.innerHTML = "";

  data.data.forEach((post) => {
    const isMine = post.author?.name === name;

    container.innerHTML += `
      <div class="post-card" style="cursor:pointer" onclick="window.location.hash='#/singlepost?id=${post.id}'">
        <h4><a href="#/profile?name=${post.author.name}">${post.author.name}</a></h4>
        ${post.media?.url ? `<img src="${post.media.url}" class="post-image" />` : ""}
        <p>${post.title || ""}</p>
        <p>${post.body || ""}</p>
        ${
          isMine
            ? `
          <button class="edit" data-id="${post.id}">Edit</button>
          <button class="delete" data-id="${post.id}">Delete</button>
        `
            : ""
        }
      </div>
    `;
  });

  initSearch(data.data);

  // ===== EDIT =====
  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const newText = prompt("Edit post");

      if (!newText) return;

      await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
        body: JSON.stringify({
          title: "Updated",
          body: newText,
        }),
      });

      home();
    });
  });

  // ===== DELETE =====
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;

      if (!confirm("Delete this post?")) return;

      await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
      });

      home();
    });
  });
}
