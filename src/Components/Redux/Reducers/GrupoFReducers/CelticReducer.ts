import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Celtic',
  initialState: { 
    Nome: 'Celtic Glasgowk',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    CelticRod1: 0,
    CelticRod2: 0,
    CelticRod3: 0,
    CelticRod4: 0,
    CelticRod5: 0,
    CelticRod6: 0,
  },
  reducers: {
    CelticsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    CelticsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      CelticsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      CelticsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      CelticsetSG: (state, action) => {
        state.SG = action.payload
      },
      CelticRod1: (state, action) => {
        state.CelticRod1 = action.payload
      },
      CelticRod2: (state, action) => {
        state.CelticRod2 = action.payload
      },
      CelticRod3: (state, action) => {
        state.CelticRod3 = action.payload
      },
      CelticRod4: (state, action) => {
        state.CelticRod4 = action.payload
      },
      CelticRod5: (state, action) => {
        state.CelticRod5 = action.payload
      },
      CelticRod6: (state, action) => {
        state.CelticRod6 = action.payload
      },

  }
});

export const {CelticsetPontos, CelticsetJogos, CelticsetGolsPro, CelticsetGolsC, CelticsetSG, CelticRod1, CelticRod2, CelticRod3, CelticRod4, CelticRod5, CelticRod6} = slice.actions
export default slice.reducer