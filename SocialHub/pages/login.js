export default async function login() {
  const app = document.getElementById("app");

  app.innerHTML = `

  <section class="login-page">
    <div class="login-container">

      <div class="login-left">

        <div class="left-content">
          <img src="./assets/logo.jpeg" alt="SocialHub Logo" class="login-logo" />

          <h2 class="brand-text">
            Connect with friends, and discover the things you love.
          </h2>
        </div>

        <div class="brand-image">
          <img
            src="./assets/images/picture-login.jpg"
            alt="SocialHub Image"
            class="login-image" />
        </div>

      </div>

      <div class="login-right">
        <div class="login-card">

          <div class="profile-preview">
            <img
              src="./assets/images/profile.jpg"
              alt="Profile"
              class="profile-photo" />

            <h2>Welcome Back</h2>
            <p>Continue your journey on SocialHub</p>
          </div>

          <form id="login-form">

            <input
              type="email"
              id="email"
              placeholder="Email address"
              required />

            <input
              type="password"
              id="password"
              placeholder="Password"
              required />

            <button type="submit" class="btn-login">
              Log in
            </button>

            <a href="#/login" class="forgot-password">
              Forgot password?
            </a>

            <div class="divider"></div>

            <button type="button" class="btn-register"  onclick="window.location.hash = '#/register'">
              Create new account
            </button>

          </form>

        </div>
      </div>

    </div>
  </section>
  `;

  const form = document.getElementById("login-form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    console.log(emailValue);
    console.log(passwordValue);

    if (!emailValue.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (passwordValue.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const response = await fetch("https://v2.api.noroff.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    const data = await response.json();

    console.log("EMAIL:", emailValue);
    console.log("PASSWORD:", passwordValue);
    console.log("STATUS:", response.status);
    console.log("DATA:", data);

    if (!response.ok) {
      alert(data.errors?.[0]?.message || "Login failed");
      return;
    }

    localStorage.setItem("token", data.data.accessToken);
    localStorage.setItem("name", data.data.name); // ← ajoute ça
    window.location.hash = "#/home";
  });
}
