import { renderNavbar } from "../components/navbar.js";

export default async function home() {
    renderNavbar();

  const app = document.getElementById("app");

  app.innerHTML = `
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

     

    </main>

    <aside class="sidebar-right">

      <div class="suggestions-card">
        <h3>Suggested for you</h3>

        <div class="suggestion-user">
          <img src="./assets/images/sophie.jpg"
            alt="Suggestion"
            class="suggestion-avatar"
          />

          <div>
          <a href="#/sophiecreates" class="suggestion-user-info">
            <h4>sophie.creates</h4>
            <p>Photography</p>
          </a>
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
          <a href="#/michaelart" class="suggestion-user-info">
            <h4>michael.art</h4>
            <p>Digital Creator</p>
          </a>
          </div>

          <button>Follow</button>
        </div>

      </div>

    </aside>

  </div>
</section>
}`;
}