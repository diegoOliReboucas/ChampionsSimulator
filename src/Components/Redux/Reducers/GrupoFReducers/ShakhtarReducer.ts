import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Shakhtar',
  initialState: { 
    Nome: 'FC Shakhtar Donetski',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    ShakhtarRod1: 0,
    ShakhtarRod2: 0,
    ShakhtarRod3: 0,
    ShakhtarRod4: 0,
    ShakhtarRod5: 0,
    ShakhtarRod6: 0,
  },
  reducers: {
    ShakhtarsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    ShakhtarsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      ShakhtarsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      ShakhtarsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      ShakhtarsetSG: (state, action) => {
        state.SG = action.payload
      },
      ShakhtarRod1: (state, action) => {
        state.ShakhtarRod1 = action.payload
      },
      ShakhtarRod2: (state, action) => {
        state.ShakhtarRod2 = action.payload
      },
      ShakhtarRod3: (state, action) => {
        state.ShakhtarRod3 = action.payload
      },
      ShakhtarRod4: (state, action) => {
        state.ShakhtarRod4 = action.payload
      },
      ShakhtarRod5: (state, action) => {
        state.ShakhtarRod5 = action.payload
      },
      ShakhtarRod6: (state, action) => {
        state.ShakhtarRod6 = action.payload
      },

  }
});

export const {ShakhtarsetPontos, ShakhtarsetJogos, ShakhtarsetGolsPro, ShakhtarsetGolsC, ShakhtarsetSG, ShakhtarRod1, ShakhtarRod2, ShakhtarRod3, ShakhtarRod4, ShakhtarRod5, ShakhtarRod6} = slice.actions
export default slice.reducer