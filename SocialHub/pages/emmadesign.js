import { renderNavbar } from "../components/navbar.js";

export default function emmadesign() {
    renderNavbar();

    const app = document.getElementById("app");

    app.innerHTML = `
    
    <section class="profile-page">
      <div class="profile-container">

        <div class="profile-header">

          <div class="profile-avatar-wrapper">
            <img
              src="./assets/images/emma.jpg"
              alt="Emma Design Profile"
              class="profile-avatar-large"
            />
          </div>

          <div class="profile-details">

            <div class="profile-top">
              <h1>emma.design</h1>
              
              <button class="follow-btn">Follow</button>       
            </div>

            <div class="profile-stats">
              <span><strong>32</strong> posts</span>
              <span><strong>5,210</strong> followers</span>
              <span><strong>180</strong> following</span>
            </div>

            <div class="profile-bio">
              <h3>Emma Wilson</h3>
              <p>
                UI/UX Designer • Minimalism • Creative Work  
                Designing simple and beautiful experiences 🎨✨
              </p>
            </div>

          </div>

        </div>

        <div class="profile-posts-grid">

          <div class="profile-post-card">
            <img src="./assets/images/coffee.jpg" class="profile-post-image" />
          </div>

          <div class="profile-post-card">
            <img src="./assets/images/surf.jpg" class="paris" />
          </div>

          <div class="profile-post-card">
            <img src="./assets/images/marseille.jpg" class="profile-post-image" />
          </div>

          <div class="profile-post-card">
            <img src="./assets/images/computer.jpg" class="profile-post-image" />
          </div>

          <div class="profile-post-card">
            <img src="./assets/images/boxing.jpg" class="profile-post-image" />
          </div>

          <div class="profile-post-card">
            <img src="./assets/images/boxing.jpg" class="profile-post-image" />
          </div>

        </div>

      </div>
    </section>
  `;
}