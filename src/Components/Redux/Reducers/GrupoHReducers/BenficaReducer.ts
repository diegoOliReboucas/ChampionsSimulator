import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Benfica',
  initialState: { 
    Nome: 'Benfica',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    BenficaRod1: 0,
    BenficaRod2: 0,
    BenficaRod3: 0,
    BenficaRod4: 0,
    BenficaRod5: 0,
    BenficaRod6: 0,
  },
  reducers: {
    BenficasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    BenficasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      BenficasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      BenficasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      BenficasetSG: (state, action) => {
        state.SG = action.payload
      },
      BenficaRod1: (state, action) => {
        state.BenficaRod1 = action.payload
      },
      BenficaRod2: (state, action) => {
        state.BenficaRod2 = action.payload
      },
      BenficaRod3: (state, action) => {
        state.BenficaRod3 = action.payload
      },
      BenficaRod4: (state, action) => {
        state.BenficaRod4 = action.payload
      },
      BenficaRod5: (state, action) => {
        state.BenficaRod5 = action.payload
      },
      BenficaRod6: (state, action) => {
        state.BenficaRod6 = action.payload
      },

  }
});

export const {BenficasetPontos, BenficasetJogos, BenficasetGolsPro, BenficasetGolsC, BenficasetSG, BenficaRod1, BenficaRod2, BenficaRod3, BenficaRod4, BenficaRod5, BenficaRod6} = slice.actions
export default slice.reducer