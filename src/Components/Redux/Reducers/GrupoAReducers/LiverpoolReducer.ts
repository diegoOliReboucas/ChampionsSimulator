import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Liverpool',
  initialState: { 
    Nome: 'Liverpool',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    LiverpoolRod1: 0,
    LiverpoolRod2: 0,
    LiverpoolRod3: 0,
    LiverpoolRod4: 0,
    LiverpoolRod5: 0,
    LiverpoolRod6: 0,
  },
  reducers: {
    LiverpoolsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    LiverpoolsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      LiverpoolsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      LiverpoolsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      LiverpoolsetSG: (state, action) => {
        state.SG = action.payload
      },
      LiverpoolRod1: (state, action) => {
        state.LiverpoolRod1 = action.payload
      },
      LiverpoolRod2: (state, action) => {
        state.LiverpoolRod2 = action.payload
      },
      LiverpoolRod3: (state, action) => {
        state.LiverpoolRod3 = action.payload
      },
      LiverpoolRod4: (state, action) => {
        state.LiverpoolRod4 = action.payload
      },
      LiverpoolRod5: (state, action) => {
        state.LiverpoolRod5 = action.payload
      },
      LiverpoolRod6: (state, action) => {
        state.LiverpoolRod6 = action.payload
      },

  }
});

export const {LiverpoolsetPontos, LiverpoolsetJogos, LiverpoolsetGolsPro, LiverpoolsetGolsC, LiverpoolsetSG, LiverpoolRod1, LiverpoolRod2, LiverpoolRod3, LiverpoolRod4, LiverpoolRod5, LiverpoolRod6} = slice.actions
export default slice.reducer