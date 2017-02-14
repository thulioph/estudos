export default {
  changeUser(context, payload) {
    context.commit('CHANGE_USER', payload);
  }
}