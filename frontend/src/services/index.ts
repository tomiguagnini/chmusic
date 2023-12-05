import axios from '../lib/axios'
import { Preference, SimpleSong} from '@/types';

export const getSongs = async function(){
    return await axios.get('/songs')
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