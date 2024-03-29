import s from "./Cards.module.css";

import heardActive from "../../img/SaveIcons/heard-active.png";
import heardunActive from "../../img/SaveIcons/heart-unactive.png";
import basket from "../../img/basket.png";

import { useDispatch, useSelector } from "react-redux";
import { toggleSaveCard, addToSavedCards } from "../../redux/reducers/cards-reducer";
import { Routes, Route, NavLink } from "react-router-dom";

import Towar from "./Towar/Towar";

const Cards = () => {
   const dispatch = useDispatch();

   let cards = useSelector(state => state.cards.cards);
   let saved_cards = useSelector(state => state.cards.saved_cards)

   const saveItem = (id) => {
      dispatch(toggleSaveCard(id))
   };

   const card = (c) => {
      return (
         <div className={s.card} key={cards.id}>
            <div className={s.save}>
               <img
                  onClick={() => {
                     saveItem(c.id); 
                     dispatch(addToSavedCards());
                  }}
                  src={c.activeSave ? heardActive : heardunActive}
                  alt=""
               />
            </div>

            <NavLink to={"/" + c.id}>
               <img className={s.basket} src={basket} alt="" />
            </NavLink>

            <img className={s.img} src={c.imgSrc} alt="" />

            <div className={s.cardInfo}>
               <div style={{ flex: 100 }}>
                  <h3 className={s.h3}> {c.headerText} </h3>
                  <p className={s.p}>
                     {" "}
                     Ціна: {c.price} грн <br /> за 100 грам{" "}
                  </p>
               </div>
            </div>
         </div>
      );
   };

   const mapCards = cards.map((c) => {
      return card(c);
   });
   const mapSavedCards = cards.map((c) => {
      if (c.activeSave) {
         return card(c);
      }
   });

   return (
      <div className={s.cards}>
         <Routes>
            <Route path="/" element={<h2 className={s.h2}>Наші товари</h2>} />
            <Route
               path="/saved"
               element={<h2 className={s.h2}>Збережені товари</h2>}
            />
         </Routes>
         <div className={s.flex}>
            <Routes>
               <Route path="/" element={mapCards} />
               <Route path="/saved" element={
                  saved_cards.length == 0
                  ? <div className={s.error}>
                     <div>
                        <img className={s.error_pic} src="https://ouch-cdn2.icons8.com/_T83dEfVtcLISr9iIHIoZdNgGdsxmP8369mo39LyK1A/rs:fit:1116:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTk3/L2M5MDUxOTc0LWYx/NDgtNDQ2MS04MGQ5/LTIwMmJjYzliMGE1/Ny5zdmc.png" alt="" />
                        <h2 className={s.error_mes}>Ви ще нічого не зберегли</h2>
                        <p className={s.error_about}>
                           Нажміть на <img style={{width: 23+"px", marginLeft: 5+"px"}} src={heardunActive} alt="" />, щоб зберегти товар
                        </p>
                     </div>
                  </div>
                  : mapSavedCards
               }/>
               <Route path="/:towarID" element={<Towar />} />
            </Routes>
         </div>
      </div>
   );
};

export default Cards;
