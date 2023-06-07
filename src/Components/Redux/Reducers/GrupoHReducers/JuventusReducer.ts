import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Juventus',
  initialState: { 
    Nome: 'Juventus',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    JuventusRod1: 0,
    JuventusRod2: 0,
    JuventusRod3: 0,
    JuventusRod4: 0,
    JuventusRod5: 0,
    JuventusRod6: 0,
  },
  reducers: {
    JuventussetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    JuventussetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      JuventussetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      JuventussetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      JuventussetSG: (state, action) => {
        state.SG = action.payload
      },
      JuventusRod1: (state, action) => {
        state.JuventusRod1 = action.payload
      },
      JuventusRod2: (state, action) => {
        state.JuventusRod2 = action.payload
      },
      JuventusRod3: (state, action) => {
        state.JuventusRod3 = action.payload
      },
      JuventusRod4: (state, action) => {
        state.JuventusRod4 = action.payload
      },
      JuventusRod5: (state, action) => {
        state.JuventusRod5 = action.payload
      },
      JuventusRod6: (state, action) => {
        state.JuventusRod6 = action.payload
      },

  }
});

export const {JuventussetPontos, JuventussetJogos, JuventussetGolsPro, JuventussetGolsC, JuventussetSG, JuventusRod1, JuventusRod2, JuventusRod3, JuventusRod4, JuventusRod5, JuventusRod6} = slice.actions
export default slice.reducer