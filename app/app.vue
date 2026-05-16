<template>
  <main class="login-page">
    <section class="login-shell">
      <div class="brand-mark">PS</div>
      <p class="eyebrow">Secure portal</p>
      <h1>Sign in to continue</h1>
      <p class="description">
        Enter your credentials below. The form posts to the existing API route and follows its redirect on success.
      </p>

      <form class="login-form" method="post" action="/api/login">
        <label class="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autocomplete="email"
            placeholder="you@example.com"
            required
          >
        </label>

        <label class="field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="••••••••"
            required
          >
        </label>

        <button type="submit">Log in</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.22), transparent 28%),
    radial-gradient(circle at right center, rgba(251, 191, 36, 0.18), transparent 24%),
    linear-gradient(135deg, #08121f 0%, #10263d 55%, #f4efe8 55%, #f8f3ec 100%);
  min-height: 100vh;
}

.login-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.login-shell {
  width: min(100%, 440px);
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  background: rgba(8, 18, 31, 0.72);
  color: #f8fafc;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(18px);
}

.brand-mark {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #10b981 0%, #f59e0b 100%);
  color: #08121f;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.eyebrow {
  margin: 20px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.72rem;
  color: #94a3b8;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1.05;
}

.description {
  margin: 14px 0 0;
  color: #cbd5e1;
  line-height: 1.6;
}

.login-form {
  display: grid;
  gap: 16px;
  margin-top: 28px;
}

.field {
  display: grid;
  gap: 8px;
  font-size: 0.95rem;
}

.field span {
  color: #e2e8f0;
  font-weight: 600;
}

.field input {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 14px;
  padding: 14px 16px;
  background: rgba(15, 23, 42, 0.75);
  color: #f8fafc;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.field input::placeholder {
  color: #64748b;
}

.field input:focus {
  border-color: rgba(16, 185, 129, 0.9);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.16);
}

button {
  margin-top: 4px;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  color: #08121f;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}

button:active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  .login-shell {
    padding: 24px;
    border-radius: 20px;
  }

  .login-page {
    padding: 16px;
  }
}
</style>
