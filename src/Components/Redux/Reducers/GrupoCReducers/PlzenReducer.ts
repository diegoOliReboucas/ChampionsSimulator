import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Plzen',
  initialState: { 
    Nome: 'Vitoria Plzen',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    PlzenRod1: 0,
    PlzenRod2: 0,
    PlzenRod3: 0,
    PlzenRod4: 0,
    PlzenRod5: 0,
    PlzenRod6: 0,
  },
  reducers: {
    PlzensetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    PlzensetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      PlzensetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      PlzensetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      PlzensetSG: (state, action) => {
        state.SG = action.payload
      },
      PlzenRod1: (state, action) => {
        state.PlzenRod1 = action.payload
      },
      PlzenRod2: (state, action) => {
        state.PlzenRod2 = action.payload
      },
      PlzenRod3: (state, action) => {
        state.PlzenRod3 = action.payload
      },
      PlzenRod4: (state, action) => {
        state.PlzenRod4 = action.payload
      },
      PlzenRod5: (state, action) => {
        state.PlzenRod5 = action.payload
      },
      PlzenRod6: (state, action) => {
        state.PlzenRod6 = action.payload
      },

  }
});

export const {PlzensetPontos, PlzensetJogos, PlzensetGolsPro, PlzensetGolsC, PlzensetSG, PlzenRod1, PlzenRod2, PlzenRod3, PlzenRod4, PlzenRod5, PlzenRod6} = slice.actions
export default slice.reducer