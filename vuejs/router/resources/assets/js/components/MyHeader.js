export default {
  template: `
    <section class="hero is-primary is-medium">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                Vue Router
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <a class="nav-item is-active">
                Home
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            SPA com Vue
          </h1>

          <h2 class="subtitle">
            utilizando vue router
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <router-link tag="li" to="/" exact>
                <a>Home</a>
              </router-link>

              <router-link tag="li" to="/about">
                <a>About</a>
              </router-link>

              <router-link tag="li" to="/contact">
                <a>Contact</a>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  `
}