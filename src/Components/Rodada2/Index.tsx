import React from "react";
import * as C from './Styled'
import {  NapoliRod2, NapolisetGolsC, NapolisetGolsPro, NapolisetJogos,  NapolisetPontos, NapolisetSG } from "../Redux/Reducers/GrupoAReducers/NapoliReducer";
import {  LiverpoolRod2, LiverpoolsetGolsC, LiverpoolsetGolsPro, LiverpoolsetJogos,  LiverpoolsetPontos, LiverpoolsetSG } from "../Redux/Reducers/GrupoAReducers/LiverpoolReducer";
import {  AjaxRod2, AjaxsetGolsC, AjaxsetGolsPro, AjaxsetJogos,  AjaxsetPontos, AjaxsetSG } from "../Redux/Reducers/GrupoAReducers/AjaxReducer";
import {  RangersRod2, RangerssetGolsC, RangerssetGolsPro, RangerssetJogos,  RangerssetPontos, RangerssetSG } from "../Redux/Reducers/GrupoAReducers/RangersReducer";

import { AtleticoMRod2, AtleticoMsetGolsC, AtleticoMsetGolsPro, AtleticoMsetJogos,  AtleticoMsetPontos, AtleticoMsetSG } from "../Redux/Reducers/GrupoBReducers/AtleticoMReducer";
import { BayerLRod2, BayerLsetGolsC, BayerLsetGolsPro, BayerLsetJogos,  BayerLsetPontos, BayerLsetSG } from "../Redux/Reducers/GrupoBReducers/BayerLReducer";
import { BruggeRod2, BruggesetGolsC, BruggesetGolsPro, BruggesetJogos,  BruggesetPontos, BruggesetSG } from "../Redux/Reducers/GrupoBReducers/BruggeReducer";
import { PortoRod2, PortosetGolsC, PortosetGolsPro, PortosetJogos,  PortosetPontos, PortosetSG } from "../Redux/Reducers/GrupoBReducers/PortoReducer";

import { BayernMRod2, BayernMsetGolsC, BayernMsetGolsPro, BayernMsetJogos,  BayernMsetPontos, BayernMsetSG } from "../Redux/Reducers/GrupoCReducers/BayernMReducer";
import { BarcelonaRod2, BarcelonasetGolsC, BarcelonasetGolsPro, BarcelonasetJogos,  BarcelonasetPontos, BarcelonasetSG } from "../Redux/Reducers/GrupoCReducers/BarcelonaReducer";
import { InterRod2, IntersetGolsC, IntersetGolsPro, IntersetJogos,  IntersetPontos, IntersetSG } from "../Redux/Reducers/GrupoCReducers/InterReducer";
import { PlzenRod2, PlzensetGolsC, PlzensetGolsPro, PlzensetJogos,  PlzensetPontos, PlzensetSG } from "../Redux/Reducers/GrupoCReducers/PlzenReducer";

import { FrankfurtRod2, FrankfurtsetGolsC, FrankfurtsetGolsPro, FrankfurtsetJogos,  FrankfurtsetPontos, FrankfurtsetSG } from "../Redux/Reducers/GrupoDReducers/FrankfurtReducer";
import { MarselhaRod2, MarselhasetGolsC, MarselhasetGolsPro, MarselhasetJogos,  MarselhasetPontos, MarselhasetSG } from "../Redux/Reducers/GrupoDReducers/MarselhaReducer";
import { SportingRod2, SportingsetGolsC, SportingsetGolsPro, SportingsetJogos,  SportingsetPontos, SportingsetSG } from "../Redux/Reducers/GrupoDReducers/SportingReducer";
import { TottenhamRod2, TottenhamsetGolsC, TottenhamsetGolsPro, TottenhamsetJogos,  TottenhamsetPontos, TottenhamsetSG } from "../Redux/Reducers/GrupoDReducers/TottenhamReducer";

import { ChelseaRod2, ChelseasetGolsC, ChelseasetGolsPro, ChelseasetJogos,  ChelseasetPontos, ChelseasetSG } from "../Redux/Reducers/GrupoEReducers/ChelseaReducer";
import { MilanRod2, MilansetGolsC, MilansetGolsPro, MilansetJogos,  MilansetPontos, MilansetSG } from "../Redux/Reducers/GrupoEReducers/MilanReducer";
import { DinamoRod2, DinamosetGolsC, DinamosetGolsPro, DinamosetJogos,  DinamosetPontos, DinamosetSG } from "../Redux/Reducers/GrupoEReducers/DinamoReducer";
import { SalzburgRod2, SalzburgsetGolsC, SalzburgsetGolsPro, SalzburgsetJogos,  SalzburgsetPontos, SalzburgsetSG } from "../Redux/Reducers/GrupoEReducers/SalzburgReducer";

import { CelticRod2, CelticsetGolsC, CelticsetGolsPro, CelticsetJogos,  CelticsetPontos, CelticsetSG } from "../Redux/Reducers/GrupoFReducers/CelticReducer";
import { ShakhtarRod2, ShakhtarsetGolsC, ShakhtarsetGolsPro, ShakhtarsetJogos,  ShakhtarsetPontos, ShakhtarsetSG } from "../Redux/Reducers/GrupoFReducers/ShakhtarReducer";
import { RealMRod2, RealMsetGolsC, RealMsetGolsPro, RealMsetJogos,  RealMsetPontos, RealMsetSG } from "../Redux/Reducers/GrupoFReducers/RealMReducer";
import { LeipzigRod2, LeipzigsetGolsC, LeipzigsetGolsPro, LeipzigsetJogos,  LeipzigsetPontos, LeipzigsetSG } from "../Redux/Reducers/GrupoFReducers/LeipzigReducer";

import { DortmundRod2, DortmundsetGolsC, DortmundsetGolsPro, DortmundsetJogos,  DortmundsetPontos, DortmundsetSG } from "../Redux/Reducers/GrupoGReducers/DortmundReducer";
import { CopenhagaRod2, CopenhagasetGolsC, CopenhagasetGolsPro, CopenhagasetJogos,  CopenhagasetPontos, CopenhagasetSG } from "../Redux/Reducers/GrupoGReducers/CopenhagaReducer";
import { ManCRod2, ManCsetGolsC, ManCsetGolsPro, ManCsetJogos,  ManCsetPontos, ManCsetSG } from "../Redux/Reducers/GrupoGReducers/ManCReducer";
import { SevillaRod2, SevillasetGolsC, SevillasetGolsPro, SevillasetJogos,  SevillasetPontos, SevillasetSG } from "../Redux/Reducers/GrupoGReducers/SevillaReducer";

import { BenficaRod2, BenficasetGolsC, BenficasetGolsPro, BenficasetJogos,  BenficasetPontos, BenficasetSG } from "../Redux/Reducers/GrupoHReducers/BenficaReducer";
import { JuventusRod2, JuventussetGolsC, JuventussetGolsPro, JuventussetJogos,  JuventussetPontos, JuventussetSG } from "../Redux/Reducers/GrupoHReducers/JuventusReducer";
import { MaccabiRod2, MaccabisetGolsC, MaccabisetGolsPro, MaccabisetJogos,  MaccabisetPontos, MaccabisetSG } from "../Redux/Reducers/GrupoHReducers/MaccabiReducer";
import { PSGRod2, PSGsetGolsC, PSGsetGolsPro, PSGsetJogos,  PSGsetPontos, PSGsetSG } from "../Redux/Reducers/GrupoHReducers/PSGReducer";
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setRod2, setRod3 } from "../Redux/Reducers/showReducer";

export const Rodada2 = () =>{
    const show = useAppSelector(state => state.show)
    const [rodada2, setRodada2] = React.useState(0)
    const [mudarSG, setMudarSg] = React.useState(0)

    const [napoliGol, setNapoliGol] = React.useState(0)
    const [liverpoolGol, setLiverpoolGol] = React.useState(0)
    const [ajaxGol, setAjaxGol] = React.useState(0)
    const [rangersGol, setRangersGol] = React.useState(0)

    const [atleticoMGol, setAtleticoMGol] = React.useState(0)
    const [bayerLGol, setBayerLGol] = React.useState(0)
    const [bruggeGol, setBruggeGol] = React.useState(0)
    const [portoGol, setPortoGol] = React.useState(0)

    const [bayernMGol, setBayernMGol] = React.useState(0)
    const [interGol, setInterGol] = React.useState(0)
    const [barcelonaGol, setBarcelonaGol] = React.useState(0)
    const [plzenGol, setPlzenGol] = React.useState(0)

    const [frankfurtGol, setFrankfurtGol] = React.useState(0)
    const [marselhaGol, setMarselhaGol] = React.useState(0)
    const [sportingGol, setSportingGol] = React.useState(0)
    const [tottenhamGol, setTottenhamGol] = React.useState(0)

    const [chelseaGol, setChelseaGol] = React.useState(0)
    const [milanGol, setMilanGol] = React.useState(0)
    const [dinamoGol, setDinamoGol] = React.useState(0)
    const [salzburgGol, setSalzburgGol] = React.useState(0)

    const [celticGol, setCelticGol] = React.useState(0)
    const [shakhtarGol, setShakhtarGol] = React.useState(0)
    const [realMGol, setRealMGol] = React.useState(0)
    const [leipzigGol, setLeipzigGol] = React.useState(0)

    const [dortmundGol, setDortmundGol] = React.useState(0)
    const [copenhagaGol, setCopenhagaGol] = React.useState(0)
    const [manCGol, setManCGol] = React.useState(0)
    const [sevillaGol, setSevillaGol] = React.useState(0)

    const [benficaGol, setBenficaGol] = React.useState(0)
    const [juventusGol, setJuventusGol] = React.useState(0)
    const [maccabiGol, setMaccabiGol] = React.useState(0)
    const [PSGGol, setPSGGol] = React.useState(0)

    const Napoli = useAppSelector(state => state.Napoli)
    const Liverpool = useAppSelector(state => state.Liverpool)
    const Ajax = useAppSelector(state => state.Ajax)
    const Rangers = useAppSelector(state => state.Rangers)

    const AtleticoM = useAppSelector(state => state.AtleticoM)
    const BayerL = useAppSelector(state => state.BayerL)
    const Brugge = useAppSelector(state => state.Brugge)
    const Porto = useAppSelector(state => state.Porto)

    const BayernM = useAppSelector(state => state.BayernM)
    const Barcelona = useAppSelector(state => state.Barcelona)
    const Inter = useAppSelector(state => state.Inter)
    const Plzen = useAppSelector(state => state.Plzen)

    const Frankfurt = useAppSelector(state => state.Frankfurt)
    const Marselha = useAppSelector(state => state.Marselha)
    const Sporting = useAppSelector(state => state.Sporting)
    const Tottenham = useAppSelector(state => state.Tottenham)

    const Chelsea = useAppSelector(state => state.Chelsea)
    const Milan = useAppSelector(state => state.Milan)
    const Dinamo = useAppSelector(state => state.Dinamo)
    const Salzburg = useAppSelector(state => state.Salzburg)

    const Celtic = useAppSelector(state => state.Celtic)
    const Shakhtar = useAppSelector(state => state.Shakhtar)
    const RealM = useAppSelector(state => state.RealM)
    const Leipzig = useAppSelector(state => state.Leipzig)

    const Dortmund = useAppSelector(state => state.Dortmund)
    const Copenhaga = useAppSelector(state => state.Copenhaga)
    const ManC = useAppSelector(state => state.ManC)
    const Sevilla = useAppSelector(state => state.Sevilla)

    const Benfica = useAppSelector(state => state.Benfica)
    const Juventus = useAppSelector(state => state.Juventus)
    const Maccabi = useAppSelector(state => state.Maccabi)
    const PSG = useAppSelector(state => state.PSG)
    const dispatch = useDispatch()

    React.useEffect(() => {
        setMudarSg(mudarSG + 1)
        //Grupo A
        setNapoliGol(Math.floor(Math.random() * 3))
        setLiverpoolGol(Math.floor(Math.random() * 5))
        setAjaxGol(Math.floor(Math.random() * 3))
        setRangersGol(Math.floor(Math.random() * 3))

        dispatch(NapolisetGolsC(Napoli.GolsC + rangersGol))
        dispatch(LiverpoolsetGolsC(Liverpool.GolsC + ajaxGol))
        dispatch(AjaxsetGolsC(Ajax.GolsC + liverpoolGol))
        dispatch(RangerssetGolsC(Rangers.GolsC + napoliGol))
        //Grupo B
        setPortoGol(Math.floor(Math.random() * 4))
        setBruggeGol(Math.floor(Math.random() * 2))
        setBayerLGol(Math.floor(Math.random() * 3))
        setAtleticoMGol(Math.floor(Math.random() * 4))

        dispatch(AtleticoMsetGolsC(AtleticoM.GolsC + bayerLGol))
        dispatch(PortosetGolsC(Porto.GolsC + bruggeGol))
        dispatch(BayerLsetGolsC(BayerL.GolsC + atleticoMGol))
        dispatch(BruggesetGolsC(Brugge.GolsC + portoGol))
        //Grupo C
        setPlzenGol(Math.floor(Math.random() * 3))
        setInterGol(Math.floor(Math.random() * 4))
        setBayernMGol(Math.floor(Math.random() * 4))
        setBarcelonaGol(Math.floor(Math.random() * 3))

        dispatch(BayernMsetGolsC(BayernM.GolsC + barcelonaGol))
        dispatch(IntersetGolsC(Inter.GolsC + plzenGol))
        dispatch(BarcelonasetGolsC(Barcelona.GolsC + bayernMGol))
        dispatch(PlzensetGolsC(Plzen.GolsC + interGol))
        //Grupo D
        setSportingGol(Math.floor(Math.random() * 3))
        setTottenhamGol(Math.floor(Math.random() * 2))
        setMarselhaGol(Math.floor(Math.random() * 3))
        setFrankfurtGol(Math.floor(Math.random() * 2))

        dispatch(FrankfurtsetGolsC(Frankfurt.GolsC + marselhaGol))
        dispatch(SportingsetGolsC(Sporting.GolsC + tottenhamGol))
        dispatch(TottenhamsetGolsC(Tottenham.GolsC + sportingGol))
        dispatch(MarselhasetGolsC(Marselha.GolsC + frankfurtGol))
        //Grupo E
        setMilanGol(Math.floor(Math.random() * 4))
        setDinamoGol(Math.floor(Math.random() * 2))
        setChelseaGol(Math.floor(Math.random() * 5))
        setSalzburgGol(Math.floor(Math.random() * 2))

        DinamosetGolsC(Dinamo.GolsC + milanGol)
        ChelseasetGolsC(Chelsea.GolsC + salzburgGol)
        SalzburgsetGolsC(Salzburg.GolsC + chelseaGol)
        MilansetGolsC(Milan.GolsC + dinamoGol)
        //Grupo F
        setShakhtarGol(Math.floor(Math.random() * 4))
        setCelticGol(Math.floor(Math.random() * 3))
        setRealMGol(Math.floor(Math.random() * 5))
        setLeipzigGol(Math.floor(Math.random() * 3))

        dispatch(CelticsetGolsC(Celtic.GolsC + shakhtarGol))
        dispatch(RealMsetGolsC(RealM.GolsC + leipzigGol))
        dispatch(LeipzigsetGolsC(Leipzig.GolsC + realMGol))
        dispatch(ShakhtarsetGolsC(Shakhtar.GolsC + celticGol))
        //Grupo G
        setCopenhagaGol(Math.floor(Math.random() * 3))
        setSevillaGol(Math.floor(Math.random() * 3))
        setManCGol(Math.floor(Math.random() * 5))
        setDortmundGol(Math.floor(Math.random() * 3))

        dispatch(DortmundsetGolsC(Dortmund.GolsC + manCGol))
        dispatch(CopenhagasetGolsC(Copenhaga.GolsC + sevillaGol))
        dispatch(SevillasetGolsC(Sevilla.GolsC + copenhagaGol))
        dispatch(ManCsetGolsC(ManC.GolsC + dortmundGol))
        //Grupo H
        setJuventusGol(Math.floor(Math.random() * 4))
        setBenficaGol(Math.floor(Math.random() * 3))
        setMaccabiGol(Math.floor(Math.random() * 3))
        setPSGGol(Math.floor(Math.random() * 5))

        dispatch(PSGsetGolsC(PSG.GolsC + maccabiGol))
        dispatch(JuventussetGolsC(Juventus.GolsC + benficaGol))
        dispatch(BenficasetGolsC(Benfica.GolsC + juventusGol))
        dispatch(MaccabisetGolsC(Maccabi.GolsC + PSGGol))
        
//Grupo A
        if(Napoli.Jogos > 0){
            if(napoliGol > rangersGol) {
                dispatch(NapolisetPontos(Napoli.Pontos + 3))
                dispatch(RangerssetPontos(Rangers.Pontos + 0))
              }  else if(napoliGol < rangersGol){
                dispatch(RangerssetPontos(Rangers.Pontos + 3))
                dispatch(NapolisetPontos(Napoli.Pontos + 0))
             }else {
                 dispatch(NapolisetPontos(Napoli.Pontos + 1))
                 dispatch(RangerssetPontos(Rangers.Pontos + 1))
             }
        if(Ajax.Jogos > 0){
            if(ajaxGol > liverpoolGol) {
                dispatch(AjaxsetPontos(Ajax.Pontos + 3))
                dispatch(LiverpoolsetPontos(Liverpool.Pontos + 0))
            }else if(ajaxGol < liverpoolGol){
                dispatch(LiverpoolsetPontos(Liverpool.Pontos + 3))
                dispatch(AjaxsetPontos(Ajax.Pontos + 0))
            }else {
                dispatch(AjaxsetPontos(Ajax.Pontos + 1))
                dispatch(LiverpoolsetPontos(Liverpool.Pontos + 1))
            }
            }
            }
//Grupo B
        if(AtleticoM.Jogos > 0){
            if(atleticoMGol > bayerLGol) {
                dispatch(AtleticoMsetPontos(AtleticoM.Pontos + 3))
                dispatch(BayerLsetPontos(BayerL.Pontos + 0))
            }else if(atleticoMGol < bayerLGol){
                dispatch(BayerLsetPontos(BayerL.Pontos + 3))
                dispatch(AtleticoMsetPontos(AtleticoM.Pontos + 0))
            }else {
                dispatch(AtleticoMsetPontos(AtleticoM.Pontos + 1))
                dispatch(BayerLsetPontos(BayerL.Pontos + 1))
            }
        if(Brugge.Jogos > 0){
            if(bruggeGol > portoGol) {
                dispatch(BruggesetPontos(Brugge.Pontos + 3))
                dispatch(PortosetPontos(Porto.Pontos + 0))
            }else if(bruggeGol < portoGol){
                dispatch(PortosetPontos(Porto.Pontos + 3))
                dispatch(BruggesetPontos(Brugge.Pontos + 0))
            }else {
                dispatch(BruggesetPontos(Brugge.Pontos + 1))
                dispatch(PortosetPontos(Porto.Pontos + 1))
            }
            }
            }
//Grupo C
        if(BayernM.Jogos > 0){
            if(bayernMGol > barcelonaGol) {
                dispatch(BayernMsetPontos(BayernM.Pontos + 3))
                dispatch(BarcelonasetPontos(Barcelona.Pontos + 0))
            }else if(bayernMGol < barcelonaGol){
                dispatch(BarcelonasetPontos(Barcelona.Pontos + 3))
                dispatch(BayernMsetPontos(BayernM.Pontos + 0))
            }else {
                dispatch(BayernMsetPontos(BayernM.Pontos + 1))
                dispatch(BarcelonasetPontos(Barcelona.Pontos + 1))
            }
        if(Inter.Jogos > 0){
            if(interGol > plzenGol) {
                dispatch(IntersetPontos(Inter.Pontos + 3))
                dispatch(PlzensetPontos(Plzen.Pontos + 0))
            }else if(interGol < plzenGol){
                dispatch(PlzensetPontos(Plzen.Pontos + 3))
                dispatch(IntersetPontos(Inter.Pontos + 0))
            }else {
                dispatch(IntersetPontos(Inter.Pontos + 1))
                dispatch(PlzensetPontos(Plzen.Pontos + 1))
            }
            }
            }
//Grupo D
        if(Frankfurt.Jogos > 0){
            if(frankfurtGol > marselhaGol) {
                dispatch(FrankfurtsetPontos(Frankfurt.Pontos + 3))
                dispatch(MarselhasetPontos(Marselha.Pontos + 0))
            }else if(frankfurtGol < marselhaGol){
                dispatch(MarselhasetPontos(Marselha.Pontos + 3))
                dispatch(FrankfurtsetPontos(Frankfurt.Pontos + 0))
            }else {
                dispatch(FrankfurtsetPontos(Frankfurt.Pontos + 1))
                dispatch(MarselhasetPontos(Marselha.Pontos + 1))
            }
        if(Tottenham.Jogos > 0){
            if(tottenhamGol > sportingGol) {
                dispatch(TottenhamsetPontos(Tottenham.Pontos + 3))
                dispatch(SportingsetPontos(Sporting.Pontos + 0))
            }else if(tottenhamGol < sportingGol){
                dispatch(SportingsetPontos(Sporting.Pontos + 3))
                dispatch(TottenhamsetPontos(Tottenham.Pontos + 0))
            }else {
                dispatch(TottenhamsetPontos(Tottenham.Pontos + 1))
                dispatch(SportingsetPontos(Sporting.Pontos + 1))
            }
            }
            }
//Grupo E
        if(Dinamo.Jogos > 0){
            if(dinamoGol > milanGol) {
                dispatch(DinamosetPontos(Dinamo.Pontos + 3))
                dispatch(MilansetPontos(Milan.Pontos + 0))
            }else if(dinamoGol < milanGol){
                dispatch(MilansetPontos(Milan.Pontos + 3))
                dispatch(DinamosetPontos(Dinamo.Pontos + 0))
            }else {
                dispatch(DinamosetPontos(Dinamo.Pontos + 1))
                dispatch(MilansetPontos(Milan.Pontos + 1))
            }
        if(Salzburg.Jogos > 0){
            if(salzburgGol > chelseaGol) {
                dispatch(SalzburgsetPontos(Salzburg.Pontos + 3))
                dispatch(ChelseasetPontos(Chelsea.Pontos + 0))
            }else if(salzburgGol < chelseaGol){
                dispatch(ChelseasetPontos(Chelsea.Pontos + 3))
                dispatch(SalzburgsetPontos(Salzburg.Pontos + 0))
            }else {
                dispatch(SalzburgsetPontos(Salzburg.Pontos + 1))
                dispatch(ChelseasetPontos(Chelsea.Pontos + 1))
            }
            }
            }
//Grupo F
        if(Celtic.Jogos > 0){
            if(celticGol > shakhtarGol) {
                dispatch(CelticsetPontos(Celtic.Pontos + 3))
                dispatch(ShakhtarsetPontos(Shakhtar.Pontos + 0))
            }else if(celticGol < shakhtarGol){
                dispatch(ShakhtarsetPontos(Shakhtar.Pontos + 3))
                dispatch(CelticsetPontos(Celtic.Pontos + 0))
            }else {
                dispatch(CelticsetPontos(Celtic.Pontos + 1))
                dispatch(ShakhtarsetPontos(Shakhtar.Pontos + 1))
            }
        if(Leipzig.Jogos > 0){
            if(leipzigGol > realMGol) {
                dispatch(LeipzigsetPontos(Leipzig.Pontos + 3))
                dispatch(RealMsetPontos(RealM.Pontos + 0))
            }else if(leipzigGol < realMGol){
                dispatch(RealMsetPontos(RealM.Pontos + 3))
                dispatch(LeipzigsetPontos(Leipzig.Pontos + 0))
            }else {
                dispatch(LeipzigsetPontos(Leipzig.Pontos + 1))
                dispatch(RealMsetPontos(RealM.Pontos + 1))
            }
            }
            }
//Grupo G
        if(Dortmund.Jogos > 0){
            if(dortmundGol > manCGol) {
                dispatch(DortmundsetPontos(Dortmund.Pontos + 3))
                dispatch(ManCsetPontos(ManC.Pontos + 0))
            }else if(dortmundGol < manCGol){
                dispatch(ManCsetPontos(ManC.Pontos + 3))
                dispatch(DortmundsetPontos(Dortmund.Pontos + 0))
            }else {
                dispatch(DortmundsetPontos(Dortmund.Pontos + 1))
                dispatch(ManCsetPontos(ManC.Pontos + 1))
            }
        if(Sevilla.Jogos > 0){
            if(sevillaGol > copenhagaGol) {
                dispatch(SevillasetPontos(Sevilla.Pontos + 3))
                dispatch(CopenhagasetPontos(Copenhaga.Pontos + 0))
            }else if(sevillaGol < copenhagaGol){
                dispatch(CopenhagasetPontos(Copenhaga.Pontos + 3))
                dispatch(SevillasetPontos(Sevilla.Pontos + 0))
            }else {
                dispatch(SevillasetPontos(Sevilla.Pontos + 1))
                dispatch(CopenhagasetPontos(Copenhaga.Pontos + 1))
            }
            }
            }
//Grupo H
        if(PSG.Jogos > 0){
            if(PSGGol > maccabiGol) {
                dispatch(PSGsetPontos(PSG.Pontos + 3))
                dispatch(MaccabisetPontos(Maccabi.Pontos + 0))
            }else if(PSGGol < maccabiGol){
                dispatch(MaccabisetPontos(Maccabi.Pontos + 3))
                dispatch(PSGsetPontos(PSG.Pontos + 0))
            }else {
                dispatch(PSGsetPontos(PSG.Pontos + 1))
                dispatch(MaccabisetPontos(Maccabi.Pontos + 1))
            }
        if(Benfica.Jogos > 0){
            if(benficaGol > juventusGol) {
                dispatch(BenficasetPontos(Benfica.Pontos + 3))
                dispatch(JuventussetPontos(Juventus.Pontos + 0))
            }else if(benficaGol < juventusGol){
                dispatch(JuventussetPontos(Juventus.Pontos + 3))
                dispatch(BenficasetPontos(Benfica.Pontos + 0))
            }else {
                dispatch(BenficasetPontos(Benfica.Pontos + 1))
                dispatch(JuventussetPontos(Juventus.Pontos + 1))
            }
            }
            }
    },[rodada2])

    React.useEffect(() => {
        //Grupo A
        dispatch(NapolisetSG(Napoli.GolsPro - Napoli.GolsC))
        dispatch(LiverpoolsetSG(Liverpool.GolsPro - Liverpool.GolsC))
        dispatch(AjaxsetSG(Ajax.GolsPro - Ajax.GolsC))
        dispatch(RangerssetSG(Rangers.GolsPro - Rangers.GolsC))
        //Grupo B
        dispatch(AtleticoMsetSG(AtleticoM.GolsPro - AtleticoM.GolsC))
        dispatch(BayerLsetSG(BayerL.GolsPro - BayerL.GolsC))
        dispatch(BruggesetSG(Brugge.GolsPro - Brugge.GolsC))
        dispatch(PortosetSG(Porto.GolsPro - Porto.GolsC))
        //Grupo C
        dispatch(BayernMsetSG(BayernM.GolsPro - BayernM.GolsC))
        dispatch(BarcelonasetSG(Barcelona.GolsPro - Barcelona.GolsC))
        dispatch(IntersetSG(Inter.GolsPro - Inter.GolsC))
        dispatch(PlzensetSG(Plzen.GolsPro - Plzen.GolsC))
        //Grupo D
        dispatch(FrankfurtsetSG(Frankfurt.GolsPro - Frankfurt.GolsC))
        dispatch(MarselhasetSG(Marselha.GolsPro - Marselha.GolsC))
        dispatch(SportingsetSG(Sporting.GolsPro - Sporting.GolsC))
        dispatch(TottenhamsetSG(Tottenham.GolsPro - Tottenham.GolsC))
        //Grupo E
        dispatch(ChelseasetSG(Chelsea.GolsPro - Chelsea.GolsC))
        dispatch(MilansetSG(Milan.GolsPro - Milan.GolsC))
        dispatch(DinamosetSG(Dinamo.GolsPro - Dinamo.GolsC))
        dispatch(SalzburgsetSG(Salzburg.GolsPro - Salzburg.GolsC))
        //Grupo F
        dispatch(CelticsetSG(Celtic.GolsPro - Celtic.GolsC))
        dispatch(ShakhtarsetSG(Shakhtar.GolsPro - Shakhtar.GolsC))
        dispatch(RealMsetSG(RealM.GolsPro - RealM.GolsC))
        dispatch(LeipzigsetSG(Leipzig.GolsPro - Leipzig.GolsC))
        //Grupo G
        dispatch(DortmundsetSG(Dortmund.GolsPro - Dortmund.GolsC))
        dispatch(CopenhagasetSG(Copenhaga.GolsPro - Copenhaga.GolsC))
        dispatch(ManCsetSG(ManC.GolsPro - ManC.GolsC))
        dispatch(SevillasetSG(Sevilla.GolsPro - Sevilla.GolsC))
        //Grupo H
        dispatch(BenficasetSG(Benfica.GolsPro - Benfica.GolsC))
        dispatch(JuventussetSG(Juventus.GolsPro - Juventus.GolsC))
        dispatch(MaccabisetSG(Maccabi.GolsPro - Maccabi.GolsC))
        dispatch(PSGsetSG(PSG.GolsPro - PSG.GolsC))
    },[mudarSG])

    const SimuRod2 = () => {
        setRodada2(rodada2 + 1)
        dispatch(setRod2(false))
        dispatch(setRod3(true))
        //Grupo A
            dispatch(NapolisetJogos(Napoli.Jogos + 1))
            dispatch(LiverpoolsetJogos(Liverpool.Jogos + 1))
            dispatch(AjaxsetJogos(Ajax.Jogos + 1))
            dispatch(RangerssetJogos(Rangers.Jogos + 1))
    
            dispatch(RangerssetGolsPro(Rangers.GolsPro + rangersGol))
            dispatch(NapolisetGolsPro(Napoli.GolsPro + napoliGol))
            dispatch(LiverpoolsetGolsPro(Liverpool.GolsPro + liverpoolGol))
            dispatch(AjaxsetGolsPro(Ajax.GolsPro + ajaxGol))

            dispatch(AjaxRod2(ajaxGol))
            dispatch(NapoliRod2(napoliGol))
            dispatch(LiverpoolRod2(liverpoolGol))
            dispatch(RangersRod2(rangersGol))
        //Grupo B
            dispatch(PortosetJogos(Porto.Jogos + 1))
            dispatch(BruggesetJogos(Brugge.Jogos + 1))
            dispatch(BayerLsetJogos(BayerL.Jogos + 1))
            dispatch(AtleticoMsetJogos(AtleticoM.Jogos + 1))

            dispatch(PortosetGolsPro(Porto.GolsPro + portoGol))
            dispatch(BruggesetGolsPro(Brugge.GolsPro + bruggeGol))
            dispatch(BayerLsetGolsPro(BayerL.GolsPro + bayerLGol))
            dispatch(AtleticoMsetGolsPro(AtleticoM.GolsPro + atleticoMGol))

            dispatch(PortoRod2(portoGol))
            dispatch(BruggeRod2(bruggeGol))
            dispatch(BayerLRod2(bayerLGol))
            dispatch(AtleticoMRod2(atleticoMGol))
        //Grupo C
            dispatch(BayernMsetJogos(BayernM.Jogos + 1))
            dispatch(PlzensetJogos(Plzen.Jogos + 1))
            dispatch(BarcelonasetJogos(Barcelona.Jogos + 1))
            dispatch(IntersetJogos(Inter.Jogos + 1))

            dispatch(BayernMsetGolsPro(BayernM.GolsPro + bayernMGol))
            dispatch(PlzensetGolsPro(Plzen.GolsPro + plzenGol))
            dispatch(BarcelonasetGolsPro(Barcelona.GolsPro + barcelonaGol))
            dispatch(IntersetGolsPro(Inter.GolsPro + interGol))

            dispatch(BayernMRod2(bayernMGol))
            dispatch(PlzenRod2(plzenGol))
            dispatch(BarcelonaRod2(barcelonaGol))
            dispatch(InterRod2(interGol))
        //Grupo D
            dispatch(FrankfurtsetJogos(Frankfurt.Jogos + 1))
            dispatch(MarselhasetJogos(Marselha.Jogos + 1))
            dispatch(SportingsetJogos(Sporting.Jogos + 1))
            dispatch(TottenhamsetJogos(Tottenham.Jogos + 1))

            dispatch(FrankfurtsetGolsPro(Frankfurt.GolsPro + frankfurtGol))
            dispatch(MarselhasetGolsPro(Marselha.GolsPro + marselhaGol))
            dispatch(SportingsetGolsPro(Sporting.GolsPro + sportingGol))
            dispatch(TottenhamsetGolsPro(Tottenham.GolsPro + tottenhamGol))

            dispatch(FrankfurtRod2(frankfurtGol))
            dispatch(MarselhaRod2(marselhaGol))
            dispatch(SportingRod2(sportingGol))
            dispatch(TottenhamRod2(tottenhamGol))
        //Grupo E
            dispatch(ChelseasetJogos(Chelsea.Jogos + 1))
            dispatch(MilansetJogos(Milan.Jogos + 1))
            dispatch(DinamosetJogos(Dinamo.Jogos + 1))
            dispatch(SalzburgsetJogos(Salzburg.Jogos + 1))

            dispatch(ChelseasetGolsPro(Chelsea.GolsPro + chelseaGol))
            dispatch(MilansetGolsPro(Milan.GolsPro + milanGol))
            dispatch(DinamosetGolsPro(Dinamo.GolsPro + dinamoGol))
            dispatch(SalzburgsetGolsPro(Salzburg.GolsPro + salzburgGol))

            dispatch(ChelseaRod2(chelseaGol))
            dispatch(MilanRod2(milanGol))
            dispatch(DinamoRod2(dinamoGol))
            dispatch(SalzburgRod2(salzburgGol))
        //Grupo F
            dispatch(CelticsetJogos(Celtic.Jogos + 1))
            dispatch(ShakhtarsetJogos(Shakhtar.Jogos + 1))
            dispatch(RealMsetJogos(RealM.Jogos + 1))
            dispatch(LeipzigsetJogos(Leipzig.Jogos + 1))

            dispatch(CelticsetGolsPro(Celtic.GolsPro + celticGol))
            dispatch(ShakhtarsetGolsPro(Shakhtar.GolsPro + shakhtarGol))
            dispatch(RealMsetGolsPro(RealM.GolsPro + realMGol))
            dispatch(LeipzigsetGolsPro(Leipzig.GolsPro + leipzigGol))

            dispatch(CelticRod2(celticGol))
            dispatch(ShakhtarRod2(shakhtarGol))
            dispatch(RealMRod2(realMGol))
            dispatch(LeipzigRod2(leipzigGol))
        //Grupo G
            dispatch(DortmundsetJogos(Dortmund.Jogos + 1))
            dispatch(CopenhagasetJogos(Copenhaga.Jogos + 1))
            dispatch(ManCsetJogos(ManC.Jogos + 1))
            dispatch(SevillasetJogos(Sevilla.Jogos + 1))

            dispatch(DortmundsetGolsPro(Dortmund.GolsPro + dortmundGol))
            dispatch(CopenhagasetGolsPro(Copenhaga.GolsPro + copenhagaGol))
            dispatch(ManCsetGolsPro(ManC.GolsPro + manCGol))
            dispatch(SevillasetGolsPro(Sevilla.GolsPro + sevillaGol))

            dispatch(DortmundRod2(dortmundGol))
            dispatch(CopenhagaRod2(copenhagaGol))
            dispatch(ManCRod2(manCGol))
            dispatch(SevillaRod2(sevillaGol))
        //Grupo H
            dispatch(BenficasetJogos(Benfica.Jogos + 1))
            dispatch(JuventussetJogos(Juventus.Jogos + 1))
            dispatch(MaccabisetJogos(Maccabi.Jogos + 1))
            dispatch(PSGsetJogos(PSG.Jogos + 1))

            dispatch(BenficasetGolsPro(Benfica.GolsPro + benficaGol))
            dispatch(JuventussetGolsPro(Juventus.GolsPro + juventusGol))
            dispatch(MaccabisetGolsPro(Maccabi.GolsPro + maccabiGol))
            dispatch(PSGsetGolsPro(PSG.GolsPro + PSGGol))

            dispatch(BenficaRod2(benficaGol))
            dispatch(JuventusRod2(juventusGol))
            dispatch(MaccabiRod2(maccabiGol))
            dispatch(PSGRod2(PSGGol))
    }

    return (
        <C.Main showRodButton={show.rod2}>
            <button onClick={SimuRod2}>Simular 2° Rodada</button>
        </C.Main>
    )
}