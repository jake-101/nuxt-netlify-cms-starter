const tinycolor = require('tinycolor2')

export const state = () => ({
  colors: []
})

export const mutations = {
  SET_COLORS(state, data) {
    state.colors = data
  }
}

export const actions = {
  getColors({ commit }) {
    const rand = tinycolor.random()
    const gray = tinycolor('#666')
    const colors = tinycolor(rand).analogous()
    const c = colors.map(function(t) {
      return tinycolor
        .mix(t, gray)
        .desaturate(20)
        .toHexString()
    })

    commit('SET_COLORS', c)
  }
}
