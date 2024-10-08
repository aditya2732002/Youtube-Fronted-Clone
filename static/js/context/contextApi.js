import React,{createContext,useEffect,useState} from "react";

import {fetchDataFromApi} from "../utils/api"

export const Context= createContext();

export const AppContext=(props)=>{
  const [loading,setLoading]= useState(false);
const [searchResults,SetSearchResults]= useState([]);
const [selectedCategory,setSelectedCategory]= useState("New");
const [mobileMenu,setMobileMenu]= useState(false);

 useEffect(()=>{
fetchSelectedCategoryData(selectedCategory)
 },[selectedCategory]);

const fetchSelectedCategoryData=(query)=>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents);
        SetSearchResults(contents);
        setLoading(false);
    });
};
 return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
    }}>
    {props.children}
    </Context.Provider>

 );
};
