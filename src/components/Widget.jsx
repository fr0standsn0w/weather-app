import React, {useEffect, useState} from "react";
import s from '../assets/style.module.css'
import Preloader from "../Preloader/Preloader";

const Widget = (props) => {
    const [city, setShowCity] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const changed = (e) => {
        switch (e.target.value) {
            case "1": {
                setShowCity(false)
                props.setOpen(false)
                break
            }
            case "2": {
                setShowCity(true)
                props.setOpen(true)
                break
            }
        }
    }
    const changeOnCity = () => {
        props.data.isCheckedAC(inputValue)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            changeOnCity()
        }, 500)
        return () => clearTimeout(timer)
    }, [inputValue])

    return (
        <div className={s.widgetWrapper}>
            <div className={s.widget}>
                <select name="" onChange={changed} className={s.urChoice}>
                    <option value={1}>По местоположению</option>
                    <option value={2}>По городу</option>
                </select>
                {city &&
                    <input type={"text"} onChange={e => setInputValue(e.target.value)} value={inputValue}/>}
                {props.data.fetchedError
                    ? <Preloader/>
                    : <div>
                        <p>Город: {props.data.name}</p>
                        <p>Температура: {Math.round(props.data.temp)}&deg;</p>
                        <div className={s.iconContainer}>
                            <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt=""/>
                        </div>
                        <div>
                            <p>{props.data.description}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Widget;
