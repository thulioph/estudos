class Gmap {
  constructor(mapContainer, lat, lng, zoom = 10) {
    // this.mapContainer = mapContainer;
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
        <a @click="initMap" class="card-footer-item">Init Map</a>
        <a @click="marker" class="card-footer-item">Marker</a>
        <a @click="edit" class="card-footer-item">Edit</a>
        <a @click="remove" class="card-footer-item">Delete</a>
      </footer>
    </div>
  `,

  data() {
    return {
      lat: -8.1958956,
      lng: -34.9361942
    }
  },

  methods: {
    marker() {
      this.Mapa.Marker();
    },

    edit() {
      this.Mapa.InfoWindow(this.Mapa.Marker(), 'Dale papai!');
    },

    remove() {
      console.info('Remove');
    },

    initMap() {
      this.Mapa = new Gmap(this.element, this.lat, this.lng);
    }
  },

  created() {
    console.log('O componente foi criado!');
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