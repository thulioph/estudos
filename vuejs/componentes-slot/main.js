Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>

      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>

          <button class="delete"></button>
        </header>

        <section class="modal-card-body">
          <slot>Conteúdo default aqui!</slot>
        </section>

        <footer class="modal-card-foot">
          <slot name="footer">
            <a class="button is-primary">Ok</a>
          </slot>
        </footer>
      </div>
    </div>
  `
});


new Vue({
  el: '#root'
});