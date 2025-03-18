import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set , get) => ({
    authUser : null ,
    isCheckingAuth : false ,
    isLoggingin : false ,
    isSigningUp : false ,

    checkAuth : async () => {
        try {
            const response = await axiosInstance.get("/auth/check");
            set({authUser : response.data});
        } catch (error) {
            console.log("Error in checkAuth" , error);
            set({authUser : null});
        } finally {
            set({isCheckingAuth : false});
        }
    } ,

    signup : async (data) => {
        set({isSigningUp : true});
        try {
            const response = await axiosInstance.post("/auth/signup" , data);
            toast.success(`Account Created Welcome ${response.data.fullName}`);
            set({authUser : response.data});
        } catch (error) {
            toast.error(error);
        } finally {
            set({isSigningUp : false});
        }
    } ,

    login : async (data) => {
        set({isLoggingin : true});
        try {
            const response = await axiosInstance.post("/auth/login" , data);
            toast.success(`Logged in Welcome ${response.data.fullName}`);
            set({authUser : response.data});
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        } finally {
            set({isLoggingin : false});
        }
    } ,

    logout : async() => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser : null});
            toast.success("Logged out");
        } catch (error) {
            toast.error("Something went wrong");
        }
    } ,
}));