<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image" style="height: 40px; width: 40px;">
            <img :src="userData.avatar_url" :alt="userData.name">
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-4">{{ userData.name }}</p>
          <p class="subtitle is-6">
            <a :href="userData.html_url" target="_blank" title="Check my profile">
              @{{ userData.login }}
            </a>
          </p>
        </div>
      </div>

      <div class="content">
        You can interact with these hashtags:
        <a :href="userData.followers_url" title="Followers">
          #followers
        </a>

        <a :href="userData.repos_url" title="Repos">
          #repos
        </a>

        <a :href="userData.organizations_url" title="Organizations">
          #organizations
        </a>

        <a :href="userData.received_events_url" title="Events">
          #events
        </a>

        <br>
        <small>{{ userData.created_at }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: 'thulioph',
        userData: ''
      }
    },

    mounted() {
     console.info('Mounted now!');
      axios
        .get(`https://api.github.com/users/${this.user}`)
        .then(response => this.userData = response.data);
    }
  }
</script>

<style></style>