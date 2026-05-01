import { renderNavbar } from "../components/navbar.js";

export default function profile() {
  renderNavbar()

  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="profile-page">
  <div class="profile-container">

    <div class="profile-header">

      <div class="profile-avatar-wrapper">
        <img
          src="./assets/images/profile.jpg"
          alt="Profile Picture"
          class="profile-avatar-large"
        />
      </div>

      <div class="profile-details">

        <div class="profile-top">
          <h1>Anthony Apicella</h1>

          <button class="edit-profile-btn">
            Edit Profile
          </button>
        </div>

        <div class="profile-stats">
          <span><strong>24</strong> posts</span>
          <span><strong>1,284</strong> followers</span>
          <span><strong>542</strong> following</span>
        </div>

        <div class="profile-bio">
          <h3>Anthony Apicella</h3>
          <p>
            Frontend Developer • UX Design • Creative Work  
            Building modern digital experiences ✨
          </p>
        </div>

      </div>

    </div>

    <div class="profile-posts-grid">

      <div class="profile-post-card">
        <img
          src="./assets/images/beach.jpg"
          alt="Post 1"
          class="profile-post-image"/>
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/art.jpg"
          alt="Post 2"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/cycling.jpg"
          alt="Post 3"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/nature.jpg"
          alt="Post 4"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/musuem.jpg"
          alt="Post 5"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/montagne.jpg"
          alt="Post 6"
          class="profile-post-image"
        />
      </div>

    </div>

  </div>
</section>
    `;
}