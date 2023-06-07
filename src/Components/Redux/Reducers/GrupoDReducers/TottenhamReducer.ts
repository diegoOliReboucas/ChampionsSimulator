import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Tottenham',
  initialState: { 
    Nome: 'Tottenham',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    TottenhamRod1: 0,
    TottenhamRod2: 0,
    TottenhamRod3: 0,
    TottenhamRod4: 0,
    TottenhamRod5: 0,
    TottenhamRod6: 0,
  },
  reducers: {
    TottenhamsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    TottenhamsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      TottenhamsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      TottenhamsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      TottenhamsetSG: (state, action) => {
        state.SG = action.payload
      },
      TottenhamRod1: (state, action) => {
        state.TottenhamRod1 = action.payload
      },
      TottenhamRod2: (state, action) => {
        state.TottenhamRod2 = action.payload
      },
      TottenhamRod3: (state, action) => {
        state.TottenhamRod3 = action.payload
      },
      TottenhamRod4: (state, action) => {
        state.TottenhamRod4 = action.payload
      },
      TottenhamRod5: (state, action) => {
        state.TottenhamRod5 = action.payload
      },
      TottenhamRod6: (state, action) => {
        state.TottenhamRod6 = action.payload
      },

  }
});

export const {TottenhamsetPontos, TottenhamsetJogos, TottenhamsetGolsPro, TottenhamsetGolsC, TottenhamsetSG, TottenhamRod1, TottenhamRod2, TottenhamRod3, TottenhamRod4, TottenhamRod5, TottenhamRod6} = slice.actions
export default slice.reducer