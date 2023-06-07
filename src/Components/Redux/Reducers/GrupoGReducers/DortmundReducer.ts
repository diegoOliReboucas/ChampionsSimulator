import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Dortmund',
  initialState: { 
    Nome: 'Borussia Dortmund',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    DortmundRod1: 0,
    DortmundRod2: 0,
    DortmundRod3: 0,
    DortmundRod4: 0,
    DortmundRod5: 0,
    DortmundRod6: 0,
  },
  reducers: {
    DortmundsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    DortmundsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      DortmundsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      DortmundsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      DortmundsetSG: (state, action) => {
        state.SG = action.payload
      },
      DortmundRod1: (state, action) => {
        state.DortmundRod1 = action.payload
      },
      DortmundRod2: (state, action) => {
        state.DortmundRod2 = action.payload
      },
      DortmundRod3: (state, action) => {
        state.DortmundRod3 = action.payload
      },
      DortmundRod4: (state, action) => {
        state.DortmundRod4 = action.payload
      },
      DortmundRod5: (state, action) => {
        state.DortmundRod5 = action.payload
      },
      DortmundRod6: (state, action) => {
        state.DortmundRod6 = action.payload
      },

  }
});

export const {DortmundsetPontos, DortmundsetJogos, DortmundsetGolsPro, DortmundsetGolsC, DortmundsetSG, DortmundRod1, DortmundRod2, DortmundRod3, DortmundRod4, DortmundRod5, DortmundRod6} = slice.actions
export default slice.reducer