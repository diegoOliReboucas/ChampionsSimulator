import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'BayerL',
  initialState: { 
    Nome: 'Bayer Leverkusen',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    BayerLRod1: 0,
    BayerLRod2: 0,
    BayerLRod3: 0,
    BayerLRod4: 0,
    BayerLRod5: 0,
    BayerLRod6: 0,
  },
  reducers: {
    BayerLsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    BayerLsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      BayerLsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      BayerLsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      BayerLsetSG: (state, action) => {
        state.SG = action.payload
      },
      BayerLRod1: (state, action) => {
        state.BayerLRod1 = action.payload
      },
      BayerLRod2: (state, action) => {
        state.BayerLRod2 = action.payload
      },
      BayerLRod3: (state, action) => {
        state.BayerLRod3 = action.payload
      },
      BayerLRod4: (state, action) => {
        state.BayerLRod4 = action.payload
      },
      BayerLRod5: (state, action) => {
        state.BayerLRod5 = action.payload
      },
      BayerLRod6: (state, action) => {
        state.BayerLRod6 = action.payload
      },

  }
});

export const {BayerLsetPontos, BayerLsetJogos, BayerLsetGolsPro, BayerLsetGolsC, BayerLsetSG, BayerLRod1, BayerLRod2, BayerLRod3, BayerLRod4, BayerLRod5, BayerLRod6} = slice.actions
export default slice.reducer