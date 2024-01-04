import axios from '../lib/axios'
import { Login, Preference, SimpleSong} from '@/types';

export const getSongs = async function(){
    return await axios.get('/songs')
}

export const createSongPost = async function (data:SimpleSong) {
    const token = sessionStorage.getItem('token')
    return axios.post('/songs',data,{headers:{'Authorization': token}})
}

export const getSong = async function (id:string|undefined) {
    return axios.get('/songs/'+ id)
}

export const createPreference = async function(data:Preference) {
    return await axios.post('/create_preference',data)
}

export const getPurchases = async function(){
    const token = sessionStorage.getItem('token')
    return await axios.get('/purchase',{headers:{'Authorization': token}})
}

export const loginService = async function (data:Login){
    return axios.post('/login',data)
}

export const deleteSong = async function (id:number){
    const token = sessionStorage.getItem('token')
    return axios.delete('/songs/'+ id,{headers:{'Authorization': token}})
}