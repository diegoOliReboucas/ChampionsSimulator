import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Leipzig',
  initialState: { 
    Nome: 'RB Leipzig',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    LeipzigRod1: 0,
    LeipzigRod2: 0,
    LeipzigRod3: 0,
    LeipzigRod4: 0,
    LeipzigRod5: 0,
    LeipzigRod6: 0,
  },
  reducers: {
    LeipzigsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    LeipzigsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      LeipzigsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      LeipzigsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      LeipzigsetSG: (state, action) => {
        state.SG = action.payload
      },
      LeipzigRod1: (state, action) => {
        state.LeipzigRod1 = action.payload
      },
      LeipzigRod2: (state, action) => {
        state.LeipzigRod2 = action.payload
      },
      LeipzigRod3: (state, action) => {
        state.LeipzigRod3 = action.payload
      },
      LeipzigRod4: (state, action) => {
        state.LeipzigRod4 = action.payload
      },
      LeipzigRod5: (state, action) => {
        state.LeipzigRod5 = action.payload
      },
      LeipzigRod6: (state, action) => {
        state.LeipzigRod6 = action.payload
      },

  }
});

export const {LeipzigsetPontos, LeipzigsetJogos, LeipzigsetGolsPro, LeipzigsetGolsC, LeipzigsetSG, LeipzigRod1, LeipzigRod2, LeipzigRod3, LeipzigRod4, LeipzigRod5, LeipzigRod6} = slice.actions
export default slice.reducer