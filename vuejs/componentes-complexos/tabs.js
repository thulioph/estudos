Vue.component('tabs', {
  template: `
    <section>
      <div class="tabs">
        <ul>
          <li
            v-for="tab in tabs"
            :class="{ 'is-active': tab.isActive }">
            <a
              @click="selectTab(tab)"
              :href="tab.href"
              :title="tab.name">

              {{ tab.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-details">
        <slot></slot>
      </div>
    </section>
  `,

  mounted() {
    console.log('Mounted');
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },

  data() {
    return {
      tabs: []
    }
  },

  created() {
    this.tabs = this.$children
  },
});

Vue.component('tab', {
  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
  `,

  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g ,'-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
});

new Vue({
  el: '#root'
});