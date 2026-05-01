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
<a href="#/home" class="btn-icon" title="Home">      <img src="./assets/./images/home.png" alt="Home" class="home-avatar" />
  </a>

  <a href="#/messages" class="btn-icon" title="Messages" >
    <img src="./assets/./images/message.png" alt="Messages" class="message-avatar" />
  </a>


  <a href="#/notifications" class="btn-icon" title="Notifications" >
  <img src="./assets/./images/notification.png" alt="Notifications" class="notification-avatar" />
</a>
  <a href="#/profile" class="btn-icon" title="Profile" >
  <img src="./assets/./images/profile.jpg" alt="Profile" class="profile-avatar" />
  </a>

</div>
  `;
}