import { renderNavbar } from "../components/navbar.js";

export default function sophiecreates() {
    renderNavbar();

    const app = document.getElementById("app");

    app.innerHTML = `


<section class="profile-page">
  <div class="profile-container">

    <div class="profile-header">

      <div class="profile-avatar-wrapper">
        <img
          src="./assets/images/sophie.jpg"
          alt="Sophie Creates Profile"
          class="profile-avatar-large"
        />
      </div>

      <div class="profile-details">

        <div class="profile-top">
          <h1>sophie.creates</h1>
          
          <button class="follow-btn">Follow</button>       
        </div>

        <div class="profile-stats">
          <span><strong>36</strong> posts</span>
          <span><strong>6,320</strong> followers</span>
          <span><strong>210</strong> following</span>
        </div>

        <div class="profile-bio">
          <h3>Sophie Martin</h3>
          <p>
            Photographer • Visual Storyteller  
            Capturing light, moments and emotions 📸✨
          </p>
        </div>

      </div>

    </div>

    <div class="profile-posts-grid">

      <div class="profile-post-card">
        <img src="./assets/images/furniture.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/beer.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/wine.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/skate.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/bordeau.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/bbq.jpg" class="profile-post-image" />
      </div>

    </div>

  </div>
</section>

  `;
}