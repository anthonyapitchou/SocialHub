import { renderNavbar } from "../components/navbar.js";

export default function michaelart() {
    renderNavbar();

    const app = document.getElementById("app");

    app.innerHTML = `

<section class="profile-page">
  <div class="profile-container">

    <div class="profile-header">

      <div class="profile-avatar-wrapper">
        <img
          src="./assets/images/michael.jpg"
          alt="Michael Art Profile"
          class="profile-avatar-large"
        />
      </div>

      <div class="profile-details">

        <div class="profile-top">
          <h1>michael.art</h1>
          
          <button class="follow-btn">Follow</button>       
        </div>

        <div class="profile-stats">
          <span><strong>54</strong> posts</span>
          <span><strong>9,870</strong> followers</span>
          <span><strong>420</strong> following</span>
        </div>

        <div class="profile-bio">
          <h3>Michael Anderson</h3>
          <p>
            Digital Artist • 3D & Visual Design  
            Bringing imagination to life through art 🎨🚀
          </p>
        </div>

      </div>

    </div>

    <div class="profile-posts-grid">

      <div class="profile-post-card">
        <img src="./assets/images/picasso.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/miro.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/drawing.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/shoes.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/model.jpg" class="profile-post-image" />
      </div>

      <div class="profile-post-card">
        <img src="./assets/images/photo.jpg" class="profile-post-image" />
      </div>

    </div>

  </div>
</section>

  `;
}