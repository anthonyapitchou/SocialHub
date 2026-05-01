export default async function register() {
  const app = document.getElementById("app");
  app.innerHTML = `

<section class="register-page">
  <div class="register-container">

    <div class="register-left">

      <div class="register-content">
        <img src="./assets/logo.jpeg"
          alt="SocialHub Logo"
          class="register-logo"
        />

        <h2 class="brand-text">
          Join SocialHub and start sharing your world.
        </h2>
      </div>

      <div class="brand-image">
        <img
          src="./assets/images/picture-login.jpg"
          alt="SocialHub Image"
          class="register-image"/>
      </div>

    </div>

    <div class="register-right">
      <div class="register-card">

        <div class="profile-preview">
      <img
          src="./assets/logo.jpeg"
          alt="SocialHub Logo"
          class="register-logo"
        />

          <h2>Create Account</h2>
          <p>Start your journey on SocialHub</p>
        </div>

        <form id="register-form">

          <input
            type="text"
            id="name"
            placeholder="Full name"
            required />

          <input type="email" id="email" placeholder="Email address" required />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required />

          <button type="submit" class="btn-register-main">
            Register
          </button>

          <a href="#/login" class="forgot-password">
            Already have an account? Log in
          </a>

          <button type="button" class="button-login" onclick="window.location.hash = '#/login'">
  Log in
</button>


        </form>

      </div>
    </div>

  </div>
</section>
  `;


  const registerForm = document.getElementById("register-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    console.log("SENT DATA:", {
      name,
      email,
      password
    });

    const response = await fetch("https://v2.api.noroff.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }
    );


    const data = await response.json();

    console.log("DATA:", data);

    if (!response.ok) {
      console.log("Registration failed:", data);

      const errorMessage =
        data.errors?.[0]?.message ||
        data.message ||
        "Registration failed";

      alert(errorMessage);
      return;
    }

    // SUCCÈS
    console.log("Registration successful:", data);
    alert("Registration successful! Please log in.");
    window.location.hash = "#/login";

  });

}