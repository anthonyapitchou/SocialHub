import { renderNavbar } from "../components/navbar.js";

export default function home() {
    renderNavbar();

    const app = document.getElementById("app");

    app.innerHTML = `;
<section class="home-page">
  <div class="home-container">

    <aside class="sidebar-left">

      <div class="user-profile-card">
        <img
          src="./assets/images/profile.jpg"
          alt="My Profile"
          class="sidebar-profile-img"
        />

        <div class="profile-info">
          <h3>anthonyapitch</h3>
          <p>Frontend Developer • Creative Mind</p>
        </div>
      </div>

      <nav class="sidebar-menu">
        <a href="#/home">Home</a>
        <a href="#/profile" class="active" onclick="location.href='#/profile'">Profile</a>
        <a href="#/messages">Messages</a>
        <a href="#/explore">Explore</a>
      </nav>

    </aside>

    <main class="main-feed">

      <article class="post-card">

        <div class="post-header">
          <img
            src="./assets/images/john.jpg"
            alt="User Avatar"
            class="post-avatar">

          <div class="post-user-info">
          <a href="#/johntravel" class="post-user-info">
  <h4>johntravels</h4>
  <p>2 hours ago</p>
</a>
          </div>
        </div>

        <img
          src="./assets/images/travel.jpg"
          alt="Travel Post"
          class="post-image"
        />

        <div class="post-content">
          <p>
            <strong>@johntravels</strong>
            Sunset in Marseille 🌅
          </p>

          <span>1,284 likes</span>
        </div>

      </article>

      <article class="post-card">

        <div class="post-header">
          <img
            src="./assets/images/emma.jpg"
            alt="User Avatar"
            class="post-avatar"
          />

          <div class="post-user-info">
            <h4>emma.design</h4>
            <p>5 hours ago</p>
          </div>
        </div>

        <img
          src="./assets/images/coffee.jpg"
          alt="Coffee Post"
          class="post-image"
        />

        <div class="post-content">
          <p>
            <strong>@emma.design</strong>
            Morning coffee vibes ☕
          </p>

          <span>892 likes</span>
        </div>

      </article>

    </main>

    <aside class="sidebar-right">

      <div class="suggestions-card">
        <h3>Suggested for you</h3>

        <div class="suggestion-user">
          <img
            src="./assets/images/sophie.jpg"
            alt="Suggestion"
            class="suggestion-avatar"
          />

          <div>
            <h4>sophie.creates</h4>
            <p>Photography</p>
          </div>

          <button>Follow</button>
        </div>

        <div class="suggestion-user">
          <img
            src="./assets/images/michael.jpg"
            alt="Suggestion"
            class="suggestion-avatar"
          />

          <div>
            <h4>michael.art</h4>
            <p>Digital Creator</p>
          </div>

          <button>Follow</button>
        </div>

      </div>

    </aside>

  </div>
</section>
}`;
}