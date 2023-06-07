import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'PSG',
  initialState: { 
    Nome: 'PSG',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    PSGRod1: 0,
    PSGRod2: 0,
    PSGRod3: 0,
    PSGRod4: 0,
    PSGRod5: 0,
    PSGRod6: 0,
  },
  reducers: {
    PSGsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    PSGsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      PSGsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      PSGsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      PSGsetSG: (state, action) => {
        state.SG = action.payload
      },
      PSGRod1: (state, action) => {
        state.PSGRod1 = action.payload
      },
      PSGRod2: (state, action) => {
        state.PSGRod2 = action.payload
      },
      PSGRod3: (state, action) => {
        state.PSGRod3 = action.payload
      },
      PSGRod4: (state, action) => {
        state.PSGRod4 = action.payload
      },
      PSGRod5: (state, action) => {
        state.PSGRod5 = action.payload
      },
      PSGRod6: (state, action) => {
        state.PSGRod6 = action.payload
      },

  }
});

export const {PSGsetPontos, PSGsetJogos, PSGsetGolsPro, PSGsetGolsC, PSGsetSG, PSGRod1, PSGRod2, PSGRod3, PSGRod4, PSGRod5, PSGRod6} = slice.actions
export default slice.reducer