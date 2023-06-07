import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Brugge',
  initialState: { 
    Nome: 'Club Brugge',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    BruggeRod1: 0,
    BruggeRod2: 0,
    BruggeRod3: 0,
    BruggeRod4: 0,
    BruggeRod5: 0,
    BruggeRod6: 0,
  },
  reducers: {
    BruggesetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    BruggesetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      BruggesetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      BruggesetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      BruggesetSG: (state, action) => {
        state.SG = action.payload
      },
      BruggeRod1: (state, action) => {
        state.BruggeRod1 = action.payload
      },
      BruggeRod2: (state, action) => {
        state.BruggeRod2 = action.payload
      },
      BruggeRod3: (state, action) => {
        state.BruggeRod3 = action.payload
      },
      BruggeRod4: (state, action) => {
        state.BruggeRod4 = action.payload
      },
      BruggeRod5: (state, action) => {
        state.BruggeRod5 = action.payload
      },
      BruggeRod6: (state, action) => {
        state.BruggeRod6 = action.payload
      },

  }
});

export const {BruggesetPontos, BruggesetJogos, BruggesetGolsPro, BruggesetGolsC, BruggesetSG, BruggeRod1, BruggeRod2, BruggeRod3, BruggeRod4, BruggeRod5, BruggeRod6} = slice.actions
export default slice.reducer