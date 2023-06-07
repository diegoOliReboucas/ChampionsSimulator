import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Napoli',
  initialState: { 
    Nome: 'Napoli',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    NapoliRod1: 0,
    NapoliRod2: 0,
    NapoliRod3: 0,
    NapoliRod4: 0,
    NapoliRod5: 0,
    NapoliRod6: 0,
  },
  reducers: {
    NapolisetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    NapolisetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      NapolisetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      NapolisetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      NapolisetSG: (state, action) => {
        state.SG = action.payload
      },
      NapoliRod1: (state, action) => {
        state.NapoliRod1 = action.payload
      },
      NapoliRod2: (state, action) => {
        state.NapoliRod2 = action.payload
      },
      NapoliRod3: (state, action) => {
        state.NapoliRod3 = action.payload
      },
      NapoliRod4: (state, action) => {
        state.NapoliRod4 = action.payload
      },
      NapoliRod5: (state, action) => {
        state.NapoliRod5 = action.payload
      },
      NapoliRod6: (state, action) => {
        state.NapoliRod6 = action.payload
      },

  }
});

export const {NapolisetPontos, NapolisetJogos, NapolisetGolsPro, NapolisetGolsC, NapolisetSG, NapoliRod1, NapoliRod2, NapoliRod3, NapoliRod4, NapoliRod5, NapoliRod6} = slice.actions
export default slice.reducer