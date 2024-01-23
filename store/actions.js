import axios from 'axios'

const actions =  {
    GetAllData({commit}){
      axios.get(process.env.baseUrl+ 'allData')
      .then(response => {
        console.log('amro boney');
        commit('setAllData', response.data.data)
        // commit('AddMachineTypes',response.data.data)
      })
    },
  }

  export default actions;