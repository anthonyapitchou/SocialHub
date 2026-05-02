export function renderNavbar() {
  const nav = document.getElementById("navbar");

  nav.innerHTML = `
    <div class="navbar-logo">
      <img src="./assets/logo.jpeg" alt="SocialHub Logo" class="logo" />
    </div>

    <div class="navbar-search">
      <input
        type="text"
        id="search-input"
        placeholder="Search SocialHub..."
      />
    </div>

    <div class="navbar-actions">
      <a href="#/home" class="btn-icon" title="Home">
        <img src="./assets/images/home.png" alt="Home" class="home-avatar" />
      </a>
      <a href="#/messages" class="btn-icon" title="Messages">
        <img src="./assets/images/message.png" alt="Messages" class="message-avatar" />
      </a>
      <a href="#/notifications" class="btn-icon" title="Notifications">
        <img src="./assets/images/notification.png" alt="Notifications" class="notification-avatar" />
      </a>
      <a href="#/profile" class="btn-icon" title="Profile">
        <img src="./assets/images/profile.jpg" alt="Profile" class="profile-avatar" />
      </a>
    </div>
  `;
}

export function initSearch(posts) {
  const searchInput = document.getElementById("search-input");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(query) ||
        post.body?.toLowerCase().includes(query) ||
        post.author?.name?.toLowerCase().includes(query),
    );

    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    filtered.forEach((post) => {
      const isMine = post.author?.name === localStorage.getItem("name");

      container.innerHTML += `
        <div class="post-card">
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
  });
}
