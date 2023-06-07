import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'ManC',
  initialState: { 
    Nome: 'Manchester City',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    ManCRod1: 0,
    ManCRod2: 0,
    ManCRod3: 0,
    ManCRod4: 0,
    ManCRod5: 0,
    ManCRod6: 0,
  },
  reducers: {
    ManCsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    ManCsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      ManCsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      ManCsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      ManCsetSG: (state, action) => {
        state.SG = action.payload
      },
      ManCRod1: (state, action) => {
        state.ManCRod1 = action.payload
      },
      ManCRod2: (state, action) => {
        state.ManCRod2 = action.payload
      },
      ManCRod3: (state, action) => {
        state.ManCRod3 = action.payload
      },
      ManCRod4: (state, action) => {
        state.ManCRod4 = action.payload
      },
      ManCRod5: (state, action) => {
        state.ManCRod5 = action.payload
      },
      ManCRod6: (state, action) => {
        state.ManCRod6 = action.payload
      },

  }
});

export const {ManCsetPontos, ManCsetJogos, ManCsetGolsPro, ManCsetGolsC, ManCsetSG, ManCRod1, ManCRod2, ManCRod3, ManCRod4, ManCRod5, ManCRod6} = slice.actions
export default slice.reducer