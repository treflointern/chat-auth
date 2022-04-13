import React,{useState,createContext} from "react";

export const Context=createContext({userName:"",setUserName: React.Dispatch<React.SetStateAction<string>>,
secret:"",
setSecret:React.Dispatch<React.SetStateAction<string>>});

export const ContextProvider=(props:any)=>{
    const [userName,setUserName]=useState("")
    const [secret,setSecret]=useState("")

    const value={
        userName,
        setUserName,
        secret,
        setSecret
    }

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}