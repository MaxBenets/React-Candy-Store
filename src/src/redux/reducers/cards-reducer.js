const TOGGLE_SAVE_CARD = "TOGGLE-SAVE-CARD";
const ADD_TO_SAVED_CARDS = "ADD_TO_SAVED_CARDS";
const SET_CARDS = "SET_CARDS";
const SET_PRICE = "SET_PRICE";
const SET_CURRENCY = "SET_CURRENCY";

let initial_state = {
   cards: [
      {
         id: 0,
         imgSrc: "https://roshenstores.com/Media/images/catalog/big/816472364139ce8907cc1dd74385c046.png",
         headerText: "Шоколадні цукерки Candy Nut",
         price: "23",
         activeSave: false,
      },
      {
         id: 1,
         imgSrc:
            "https://roshenstores.com/Media/images/catalog/medium/7eb5e30534c5f276820cef4eafa64e02.png",
         headerText: "Карамельні цукерки Корівка",
         price: "7",
         activeSave: false,
      },
      {
         id: 2,
         imgSrc:
            "https://images.prom.ua/3295411287_w200_h200_konfety-klyukva-v.jpg",
         headerText:
            "Шоколадні цукерки Журавлина в шоколаді з волоським горіхом",
         price: "10",
         activeSave: false,
      },
      {
         id: 3,
         imgSrc:
            "https://images.prom.ua/3295413880_w640_h640_konfety-kokos-v.jpg",
         headerText: "Шоколадні цукерки Кокос в шоколаді",
         price: "30",
         activeSave: false,
      },
      {
         id: 4,
         imgSrc:
            "https://roshenstores.com/Media/images/catalog/medium/4cddbccafb36b538298ae43929ff8c4f.png",
         headerText: "Карамальні цукерки Рачки",
         price: "9",
         activeSave: false,
      },
      {
         id: 5,
         imgSrc:
            "https://images.prom.ua/3235066504_w640_h640_ledentsy-na-palochke.jpg",
         headerText: "Карамельні цукерки Chupa Chups",
         price: "38",
         activeSave: false,
      },
      {
         id: 6,
         imgSrc:
            "https://images.prom.ua/2880047365_w200_h200_monetki-iz-shokoladnoj.jpg",
         headerText: 'Шоколадні монети "Гривня" ',
         price: "44",
         activeSave: false,
      },
      {
         id: 7,
         imgSrc:
            "https://images.prom.ua/3753880981_w640_h640_konfety-shokoladnye-vesovye.jpg",
         headerText: "Шоколадні цукерки Roshen Mont Blanc",
         price: "23",
         activeSave: false,
      },
   ],
   saved_cards: [],

   currency: "UAH",
   price: "",
};

const cards_reducer = (state = initial_state, action) => {
   switch (action.type) {
      case TOGGLE_SAVE_CARD:
         return {
            ...state,
            cards: state.cards.map((op) => {
               if (op.id == action.id) {
                  return {
                     ...op,
                     activeSave: !op.activeSave,
                  };
               }
               return op;
            }),
         };
      case SET_PRICE:
         return{
            ...state,
            price: action.price
         }
      case ADD_TO_SAVED_CARDS:
         return{
            ...state,
            saved_cards: [...state.cards.map((s) => {
               if (s.activeSave){
                  return s.id
               }
            }).filter(
               card => card != undefined
            )]
         }
      case SET_CARDS:
         return{
            ...state,
            cards: action.newcardslist
         }
      default:
         return state;
   }
};

export const toggleSaveCard = (id) => ({
   type: TOGGLE_SAVE_CARD,
   id,
});
export const setCardsList = (newcardslist) => ({
   type: SET_CARDS,
   newcardslist
});
export const addToSavedCards = () => ({
   type: ADD_TO_SAVED_CARDS
});
export const setPriceAC = (price) => ({
   type: SET_PRICE,
   price
})
export const setCurrencyAC = (currency) => {
   return{type: SET_CURRENCY, currency}
}

export default cards_reducer
