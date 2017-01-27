class Gmap {
  constructor(mapContainer, latLng, zoom = 10) {
    this.mapContainer = mapContainer;
    this.mapOptions = {
      zoom: zoom,
      center: latLng,
      mapTypeId: 'roadmap',
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapContainer, this.mapOptions);
  }

  Marker() {
    return new google.maps.Marker({
      position: this.latLng,
      map: this.map
    });
  }

  InfoWindow(marker, content) {
    const infowindow = new google.maps.InfoWindow;

    infowindow.setContent(content);
    infowindow.open(this.map, marker);
  }
}

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

// ====

Vue.component('g-map', {
  template: `
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <slot name="title"></slot>
        </p>

        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>

      <div class="card-content">
        <div class="content">
          <slot name="body"></slot>
        </div>
      </div>

      <footer class="card-footer">
        <a @click="marker" class="card-footer-item">Marker</a>
        <a @click="edit" class="card-footer-item">Edit</a>
        <a @click="remove" class="card-footer-item">Delete</a>
      </footer>
    </div>
  `,

  data: {
    lat: -8.1958956,
    lng: -34.9361942,
    el: document.getElementById('map'),
    googleMaps: '',
    latLng: ''
  },

  methods: {
    marker() {
      let el = document.getElementById('map');

      var Mapa = new Gmap(el, this.latLng);
    },

    edit() {
      console.info('Edit');
    },

    remove() {
      console.info('Remove');
    }
  },

  created() {
    Event.listen('dale', (data) => {
      this.latLng = new data.map.maps.LatLng(this.lat, this.lng);
    });
  }
});

// ====

new Vue({
  el: '#root',

  mounted() {
    console.log('ai ai ai ai ai ');
  },

  created() {
    console.log('ui ui ui ui ui ');
  }
});