import blogData from '/data/blogs.json'

//  state
export const state = () => ({
  name: 'blog test',
  blogs: blogData.blogs
})

//  getters
export const getters = {
    getBlogs(state) { return state.blogs },
    getBlogCount(state) { return state.blogs.length},

    getBlog:(state) => (blogId) => {
        return state.blogs.find(item => item.id == blogId);
    }
}

//  actions
export const actions = {
    createBlog({commit}, blog){
        commit('setBlogs', blog)
    }
}

//  mutations
export const mutations = {
  setBlogs(state, value){
    state.blogs.push(value)
  }
}
