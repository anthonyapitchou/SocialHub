import { renderNavbar } from "../components/navbar.js";

export default async function profile() {
  renderNavbar();

  const app = document.getElementById("app");
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const myName = localStorage.getItem("name");

  // Récupérer le nom du profil depuis l'URL (ex: #/profile?name=john)
  const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
  const profileName = urlParams.get("name") || myName;
  const isMyProfile = profileName === myName;

  // ===== GET PROFIL =====
  const res = await fetch(
    `https://v2.api.noroff.dev/social/profiles/${profileName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
    },
  );

  const { data: profileData } = await res.json();

  app.innerHTML = `
<section class="profile-page">
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-avatar-wrapper">
        <img
          src="${profileData.avatar?.url || "./assets/images/profile.jpg"}"
          alt="Profile Picture"
          class="profile-avatar-large"
        />
      </div>

      <div class="profile-details">
        <div class="profile-top">
          <h1>${profileData.name}</h1>
          ${
            isMyProfile
              ? `<button class="edit-btn">Edit</button>`
              : `<button id="follow-btn">${profileData.isFollowing ? "Unfollow" : "Follow"}</button>`
          }
        </div>

        <div class="edit-form" style="display: none;">
          <textarea placeholder="Edit your bio..."></textarea>
          <div class="edit-form-buttons">
            <button class="save-btn">Save</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>

        <div class="profile-stats">
          <span><strong>${profileData._count?.posts || 0}</strong> posts</span>
          <span><strong>${profileData._count?.followers || 0}</strong> followers</span>
          <span><strong>${profileData._count?.following || 0}</strong> following</span>
        </div>

        <div class="profile-bio">
          <h3>${profileData.name}</h3>
          <p class="bio-text">${profileData.bio || "No bio yet."}</p>
        </div>
      </div>
    </div>

    <div class="profile-posts-grid" id="profile-posts-grid"></div>
  </div>
</section>
  `;

  // ===== EDIT BIO (seulement mon profil) =====
  if (isMyProfile) {
    const editButton = document.querySelector(".edit-btn");
    const editForm = document.querySelector(".edit-form");
    const saveBtn = document.querySelector(".save-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const textarea = document.querySelector(".edit-form textarea");
    const bioText = document.querySelector(".bio-text");

    editButton.addEventListener("click", () => {
      editForm.style.display = "block";
      textarea.value = bioText.textContent;
    });

    saveBtn.addEventListener("click", () => {
      if (!textarea.value) return;
      bioText.textContent = textarea.value;
      editForm.style.display = "none";
    });

    cancelBtn.addEventListener("click", () => {
      editForm.style.display = "none";
    });
  }

  // ===== FOLLOW / UNFOLLOW =====
  if (!isMyProfile) {
    const followBtn = document.getElementById("follow-btn");
    let isFollowing = profileData.isFollowing;

    followBtn.addEventListener("click", async () => {
      const method = isFollowing ? "DELETE" : "POST";
      const endpoint = isFollowing
        ? `https://v2.api.noroff.dev/social/profiles/${profileName}/unfollow`
        : `https://v2.api.noroff.dev/social/profiles/${profileName}/follow`;

      await fetch(endpoint, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
      });

      isFollowing = !isFollowing;
      followBtn.textContent = isFollowing ? "Unfollow" : "Follow";
    });
  }

  // ===== GET POSTS DU PROFIL =====
  const postsRes = await fetch(
    `https://v2.api.noroff.dev/social/profiles/${profileName}/posts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
    },
  );

  const { data: posts } = await postsRes.json();
  const grid = document.getElementById("profile-posts-grid");

  grid.innerHTML = "";
  posts.forEach((post) => {
    grid.innerHTML += `
      <div class="profile-post-card">
        ${post.media?.url ? `<img src="${post.media.url}" class="profile-post-image" />` : `<p>${post.title}</p>`}
      </div>
    `;
  });
}
