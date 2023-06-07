import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Sporting',
  initialState: { 
    Nome: 'Sporting',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    SportingRod1: 0,
    SportingRod2: 0,
    SportingRod3: 0,
    SportingRod4: 0,
    SportingRod5: 0,
    SportingRod6: 0,
  },
  reducers: {
    SportingsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    SportingsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      SportingsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      SportingsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      SportingsetSG: (state, action) => {
        state.SG = action.payload
      },
      SportingRod1: (state, action) => {
        state.SportingRod1 = action.payload
      },
      SportingRod2: (state, action) => {
        state.SportingRod2 = action.payload
      },
      SportingRod3: (state, action) => {
        state.SportingRod3 = action.payload
      },
      SportingRod4: (state, action) => {
        state.SportingRod4 = action.payload
      },
      SportingRod5: (state, action) => {
        state.SportingRod5 = action.payload
      },
      SportingRod6: (state, action) => {
        state.SportingRod6 = action.payload
      },

  }
});

export const {SportingsetPontos, SportingsetJogos, SportingsetGolsPro, SportingsetGolsC, SportingsetSG, SportingRod1, SportingRod2, SportingRod3, SportingRod4, SportingRod5, SportingRod6} = slice.actions
export default slice.reducer