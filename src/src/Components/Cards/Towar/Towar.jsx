import { useEffect } from "react"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom"
import { setPriceAC, setCurrencyAC } from "../../../redux/reducers/cards-reducer"

import s from "./Towar.module.css"

const Towar = () => {
    const ZamowlenaNomer = Math.floor( Math.random() * 100 )

    const dispatch = useDispatch()
    let selectRef = useRef()
    const {towarID} = useParams()

    const towars = useSelector(state => state.cards.cards)
    const currency = useSelector(state => state.cards.currency)
    const price = useSelector(state => state.cards.price)

    const [firstValue, setValue] = useState(100)
    const [buyStateHidden, setBuyState] = useState(true)
    const [disabledButtons, setDisabledButtons] = useState(false)

    const showBuying = () => {
        setBuyState(false)
        setDisabledButtons(true)
    }

    useEffect(() => {
        dispatch(setPriceAC(""))
        dispatch(setCurrencyAC("UAH"))
    }, [])

    const mapTowars = towars.map( o => {
        if (o.id == towarID){
            let CalculatePrice = o.price * firstValue.toString().replace("0", "").replace("0","")

            return (
                <div className={s.wrapper} key = {o.id}>
                    <div className={s.towar}>
                    
                    <div className={s.img_area}>
                        <img className={s.img} src={o.imgSrc} alt="" />
                    </div>

                    <div className={s.info}>
                        <h2 className={s.h2}>{o.headerText}</h2>
                        
                        <div className={s.priceBlock + " " + s.price}>
                            <span>
                                {
                                    price.length != 0
                                        ? price
                                        : CalculatePrice
                                } грн за    
                            </span> 

                            <div className={s.btn_area}>
                                <button disabled = {disabledButtons} className={s.btn} onClick={ () => {
                                    setValue(firstValue - 100);
                                } }>-</button>
                                <button disabled = {disabledButtons} className={s.btn} onClick={ () => {
                                    setValue(firstValue + 100)
                                } }>+</button>
                            </div>

                            <div className={s.input}>
                                {firstValue < 1 ? setValue(100) : firstValue}
                            </div> 
                            <span style={ {marginLeft: 5+"px", marginRight: 15+"px",} }>грам</span>    

                            <button disabled = {disabledButtons} onClick={showBuying} className={s.btn + " " + s.buy}>Придбати за {price.length != 0
                                ? price
                                : CalculatePrice} {currency}</button> 
                        </div>

                        {
                            buyStateHidden 
                            ? null
                            : (
                                <div className={s.allNice}>
                                    <center>
                                        <img src="https://img.icons8.com/fluency/2x/happy.png" alt="" />
                                    </center>
                                    <h3 className={s.h3}>Спасибі за замовлення!</h3>
                                    <p className={s.niceMessage}>
                                        Ваш номер замовлення: #{ZamowlenaNomer} скоро буде переданий кур'єрській доставці
                                    </p>
                                    <NavLink className={s.toHome} to = "/">На головну</NavLink>
                                </div>
                            ) 
                        }
                    </div>
                    </div>
                </div>
            )
        }
    })

    return(
        <div style={ {width: "100%"} }>
            {mapTowars}
        </div>
    )
}

export default Towar