import axios from "axios";
import {UserType} from "../redux/users-reducer";

type UsersResponseType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '2f0c4832-37b9-4785-9447-37484d6e72fb'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId:number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId:number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authMeAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId:string| undefined) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}







