import s from "./Header.module.css";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import heard from "../../img/SaveIcons/heart-unactive.png";
import heard_active from "../../img/SaveIcons/heard-active.png";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCardsList } from "../../redux/reducers/cards-reducer";
import { useEffect } from "react";

const Header = () => {
   const dispatch = useDispatch()

   let inputRef = useRef()

   let cards = useSelector(state => state.cards.cards)

   let [inputValue, setInputValue] = useState("");
   let [dataCopy, setDataCopy] = useState(cards)


   const filterCandy = (searchText, listOfCandys) => {
      if (!searchText){
         return listOfCandys
      }
      return listOfCandys.filter( 
         ({headerText}) => headerText.toLowerCase().includes(searchText.toLowerCase())
      ); 
      <Navigate to = "/" />
   }
   useEffect(() => {
      const Debounce = setTimeout(() => {
         const filteredCandys = filterCandy(inputValue, dataCopy)
         dispatch(setCardsList(filteredCandys))
      }, 300)

      return () => {clearTimeout(Debounce)}

   }, [inputValue])

   return (
      <header className={s.area}>
            <header className={s.header}>
               <div to="/" className={s.info}>
                  <img
                     src="https://img.icons8.com/fluency/80/80/christmas-candy.png"
                     className={s.img}
                     alt=""
                  />
                  <div className={s.data}>
                     <NavLink to="/">
                        <h1 className={s.h1}>Candy House</h1>
                        <p className={s.p}>Улюбленні солодощі усього Львову</p>
                     </NavLink>
                  </div>
               </div>
               <nav className={s.nav}>
                  <NavLink to="/saved">
                     <Routes>
                        <Route
                           path="/saved"
                           element={<img src={heard_active} alt="" />}
                        />
                        <Route path="/*" element={<img src={heard} alt="" />} />
                     </Routes>
                  </NavLink>
               </nav>
            </header>


         <div className={s.search}>
            <input ref = {inputRef} value = {inputValue} onChange = {() => {setInputValue(inputRef.current.value)}} className={s.searchInput} type="text" placeholder="Знайти солодощі" />
         </div>
      </header>
   );
};

export default Header;
