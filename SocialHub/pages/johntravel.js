import { renderNavbar } from "../components/navbar.js";

export default function johntravel() {
    renderNavbar();

    const app = document.getElementById("app");

    app.innerHTML = `

        
    <section class="profile-page">
  <div class="profile-container">

    <div class="profile-header">

      <div class="profile-avatar-wrapper">
        <img
          src="./assets/images/john.jpg"
          alt="John Travels Profile"
          class="profile-avatar-large"
        />
      </div>

      <div class="profile-details">

        <div class="profile-top">
          <h1>johntravels</h1>

          <button class="follow-btn">
            Follow
          </button>
        </div>

        <div class="profile-stats">
          <span><strong>48</strong> posts</span>
          <span><strong>8,420</strong> followers</span>
          <span><strong>312</strong> following</span>
        </div>

        <div class="profile-bio">
          <h3>John Carter</h3>
          <p>
            Travel Photographer • Explorer • Storyteller  
            Capturing moments around the world 🌍✈️
          </p>
        </div>

      </div>

    </div>

    <div class="profile-posts-grid">

      <div class="profile-post-card">
        <img
          src="./assets/images/post-1.jpg"
          alt="Travel Post 1"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/post-2.jpg"
          alt="Travel Post 2"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/post-3.jpg"
          alt="Travel Post 3"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/post-4.jpg"
          alt="Travel Post 4"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/post-5.jpg"
          alt="Travel Post 5"
          class="profile-post-image"
        />
      </div>

      <div class="profile-post-card">
        <img
          src="./assets/images/post-6.jpg"
          alt="Travel Post 6"
          class="profile-post-image"
        />
      </div>

    </div>

  </div>
</section>
    `;
}