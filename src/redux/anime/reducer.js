import {ANIME_FETCH, ANIME_FETCH_FAILED, ANIME_FETCH_SUCCESS, } from './types'
const initialState ={
    error:"",
    anime:[],
    loading: true
}

const animeReducer = (state= initialState, action)=>{
    switch(action.type){
        case ANIME_FETCH : return {
            ...state,
            loading: true
        }
        case ANIME_FETCH_SUCCESS : return {
            loading:false,
            anime:[...state.anime, ...action.payload],
            error:""
        }
        case ANIME_FETCH_FAILED : return {
            loading: false,
            error:action.payload,
            anime:[]
        }
        default : return state
    }
}
export default animeReducer