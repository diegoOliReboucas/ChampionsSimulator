import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Ajax',
  initialState: { 
    Nome: 'Ajax',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    AjaxRod1: 0,
    AjaxRod2: 0,
    AjaxRod3: 0,
    AjaxRod4: 0,
    AjaxRod5: 0,
    AjaxRod6: 0,
  },
  reducers: {
    AjaxsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    AjaxsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      AjaxsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      AjaxsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      AjaxsetSG: (state, action) => {
        state.SG = action.payload
      },
      AjaxRod1: (state, action) => {
        state.AjaxRod1 = action.payload
      },
      AjaxRod2: (state, action) => {
        state.AjaxRod2 = action.payload
      },
      AjaxRod3: (state, action) => {
        state.AjaxRod3 = action.payload
      },
      AjaxRod4: (state, action) => {
        state.AjaxRod4 = action.payload
      },
      AjaxRod5: (state, action) => {
        state.AjaxRod5 = action.payload
      },
      AjaxRod6: (state, action) => {
        state.AjaxRod6 = action.payload
      },

  }
});

export const {AjaxsetPontos, AjaxsetJogos, AjaxsetGolsPro, AjaxsetGolsC, AjaxsetSG, AjaxRod1, AjaxRod2, AjaxRod3, AjaxRod4, AjaxRod5, AjaxRod6} = slice.actions
export default slice.reducer