// Nome de mutation com letra maiúscula (convenção)
//
// o state é fornecido automaticamente pela store
// o payload é o objeto com informações fornecidas para a mutation

export default {
  'CHANGE_USER' (state, payload) {
    state.user = payload;
  }
}