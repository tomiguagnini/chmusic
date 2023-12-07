import axios from '../lib/axios'
import { Login, Preference, SimpleSong} from '@/types';

export const getSongs = async function(){
    const token = localStorage.getItem('token')
    return await axios.get('/songs',{headers:{'Authorization': token}})
}

export const createSongPost = async function (data:SimpleSong) {
    return axios.post('/songs',data)
}

export const getSong = async function (id:string|undefined) {
    return axios.get('/songs/'+ id)
}

export const createPreference = async function(data:Preference) {
    return await axios.post('/create_preference',data)
}

export const getPurchases = async function(){
    return await axios.get('/purchase')
}

export const loginService = async function (data:Login){
    return axios.post('/login',data)
}