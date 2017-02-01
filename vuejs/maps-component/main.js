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

class Gmap {
  constructor(lat, lng, zoom = 10) {
    this.mapContainer = document.getElementById('map');

    this.mapOptions = {
      zoom: zoom,
      center: new google.maps.LatLng(lat, lng),
      mapTypeId: 'roadmap',
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapContainer, this.mapOptions);
  }

  Marker() {
    return new google.maps.Marker({
      position: this.mapOptions.center,
      map: this.map
    });
  }

  InfoWindow(marker, content) {
    const infowindow = new google.maps.InfoWindow;

    infowindow.setContent(content);
    infowindow.open(this.map, marker);
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
        <a @click="initMap" class="card-footer-item">Mapa</a>
        <a @click="marker" class="card-footer-item">Marcador</a>
      </footer>
    </div>
  `,

  data() {
    return {
      lat: -8.1958956,
      lng: -34.9361942,
      location: ''
    }
  },

  methods: {
    marker() {
      let marker = this.Mapa.Marker();

      this.Mapa.InfoWindow(marker, 'Dale papai!');
    },

    initMap() {
      console.log(this.location);
      this.Mapa = new Gmap(this.lat, this.lng);
    }
  },

  created() {
    console.log('O componente foi criado!');

    Event.listen('getLocation', data => this.location = data.location);
  }
});

// ====

new Vue({
  el: '#root',

  created() {
    console.log('ui ui ui ui ui ');

    axios.get('https://api.github.com/users/thulioph')
    .then(function (response) {
      Event.fire('getLocation', {
        location: response.data.location
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  mounted() {
    console.log('ai ai ai ai ai ');
  }
});