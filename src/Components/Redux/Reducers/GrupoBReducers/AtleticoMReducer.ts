import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'AtleticoM',
  initialState: { 
    Nome: 'Atletico de Madrid',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    AtleticoMRod1: 0,
    AtleticoMRod2: 0,
    AtleticoMRod3: 0,
    AtleticoMRod4: 0,
    AtleticoMRod5: 0,
    AtleticoMRod6: 0,
  },
  reducers: {
    AtleticoMsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    AtleticoMsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      AtleticoMsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      AtleticoMsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      AtleticoMsetSG: (state, action) => {
        state.SG = action.payload
      },
      AtleticoMRod1: (state, action) => {
        state.AtleticoMRod1 = action.payload
      },
      AtleticoMRod2: (state, action) => {
        state.AtleticoMRod2 = action.payload
      },
      AtleticoMRod3: (state, action) => {
        state.AtleticoMRod3 = action.payload
      },
      AtleticoMRod4: (state, action) => {
        state.AtleticoMRod4 = action.payload
      },
      AtleticoMRod5: (state, action) => {
        state.AtleticoMRod5 = action.payload
      },
      AtleticoMRod6: (state, action) => {
        state.AtleticoMRod6 = action.payload
      },

  }
});

export const {AtleticoMsetPontos, AtleticoMsetJogos, AtleticoMsetGolsPro, AtleticoMsetGolsC, AtleticoMsetSG, AtleticoMRod1, AtleticoMRod2, AtleticoMRod3, AtleticoMRod4, AtleticoMRod5, AtleticoMRod6} = slice.actions
export default slice.reducer