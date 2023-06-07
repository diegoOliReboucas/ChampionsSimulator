import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Maccabi',
  initialState: { 
    Nome: 'Maccabi Haifa FC',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    MaccabiRod1: 0,
    MaccabiRod2: 0,
    MaccabiRod3: 0,
    MaccabiRod4: 0,
    MaccabiRod5: 0,
    MaccabiRod6: 0,
  },
  reducers: {
    MaccabisetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    MaccabisetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      MaccabisetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      MaccabisetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      MaccabisetSG: (state, action) => {
        state.SG = action.payload
      },
      MaccabiRod1: (state, action) => {
        state.MaccabiRod1 = action.payload
      },
      MaccabiRod2: (state, action) => {
        state.MaccabiRod2 = action.payload
      },
      MaccabiRod3: (state, action) => {
        state.MaccabiRod3 = action.payload
      },
      MaccabiRod4: (state, action) => {
        state.MaccabiRod4 = action.payload
      },
      MaccabiRod5: (state, action) => {
        state.MaccabiRod5 = action.payload
      },
      MaccabiRod6: (state, action) => {
        state.MaccabiRod6 = action.payload
      },

  }
});

export const {MaccabisetPontos, MaccabisetJogos, MaccabisetGolsPro, MaccabisetGolsC, MaccabisetSG, MaccabiRod1, MaccabiRod2, MaccabiRod3, MaccabiRod4, MaccabiRod5, MaccabiRod6} = slice.actions
export default slice.reducer