import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Chelsea',
  initialState: { 
    Nome: 'Chelsea',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    ChelseaRod1: 0,
    ChelseaRod2: 0,
    ChelseaRod3: 0,
    ChelseaRod4: 0,
    ChelseaRod5: 0,
    ChelseaRod6: 0,
  },
  reducers: {
    ChelseasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    ChelseasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      ChelseasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      ChelseasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      ChelseasetSG: (state, action) => {
        state.SG = action.payload
      },
      ChelseaRod1: (state, action) => {
        state.ChelseaRod1 = action.payload
      },
      ChelseaRod2: (state, action) => {
        state.ChelseaRod2 = action.payload
      },
      ChelseaRod3: (state, action) => {
        state.ChelseaRod3 = action.payload
      },
      ChelseaRod4: (state, action) => {
        state.ChelseaRod4 = action.payload
      },
      ChelseaRod5: (state, action) => {
        state.ChelseaRod5 = action.payload
      },
      ChelseaRod6: (state, action) => {
        state.ChelseaRod6 = action.payload
      },

  }
});

export const {ChelseasetPontos, ChelseasetJogos, ChelseasetGolsPro, ChelseasetGolsC, ChelseasetSG, ChelseaRod1, ChelseaRod2, ChelseaRod3, ChelseaRod4, ChelseaRod5, ChelseaRod6} = slice.actions
export default slice.reducer