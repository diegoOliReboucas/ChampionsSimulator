import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Marselha',
  initialState: { 
    Nome: 'Marselha',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    MarselhaRod1: 0,
    MarselhaRod2: 0,
    MarselhaRod3: 0,
    MarselhaRod4: 0,
    MarselhaRod5: 0,
    MarselhaRod6: 0,
  },
  reducers: {
    MarselhasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    MarselhasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      MarselhasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      MarselhasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      MarselhasetSG: (state, action) => {
        state.SG = action.payload
      },
      MarselhaRod1: (state, action) => {
        state.MarselhaRod1 = action.payload
      },
      MarselhaRod2: (state, action) => {
        state.MarselhaRod2 = action.payload
      },
      MarselhaRod3: (state, action) => {
        state.MarselhaRod3 = action.payload
      },
      MarselhaRod4: (state, action) => {
        state.MarselhaRod4 = action.payload
      },
      MarselhaRod5: (state, action) => {
        state.MarselhaRod5 = action.payload
      },
      MarselhaRod6: (state, action) => {
        state.MarselhaRod6 = action.payload
      },

  }
});

export const {MarselhasetPontos, MarselhasetJogos, MarselhasetGolsPro, MarselhasetGolsC, MarselhasetSG, MarselhaRod1, MarselhaRod2, MarselhaRod3, MarselhaRod4, MarselhaRod5, MarselhaRod6} = slice.actions
export default slice.reducer