import classes from './HeaderMain.module.css';
import React from "react";
import {currencyList} from "../../currencyList";

interface IHeaderMain {
    initTo: string,
    initFrom: string,
    setInitTo: (value: string) => void,
    setInitFrom: (value: string) => void,
    setRates: (value: {[key:string] : [value: number]}) => void
}

export const HeaderMain: React.FC<IHeaderMain> = ({initTo, initFrom, setInitFrom, setInitTo, setRates}) => {

    const onChange = async (e) => {
        if(e.target.name === 'from'){
            const base = e.target.value
            setInitFrom(base)
            const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
            const json = await res.json()
            setRates(json.rates)
        }
        if(e.target.name === 'to'){
            setInitTo(e.target.value)
        }

    }

    return(
        <div className={classes.headerMain__container}>
                <form className={`${classes.headerMain__form} ${classes.formMain}`}>
                    <fieldset className={`${classes.formMain__item} ${classes.itemForm}`}>
                        <label className={classes.itemForm__label} htmlFor="from">From</label>
                        <select onChange={(e) => onChange(e)} className={classes.itemForm__field} value={initFrom} name={'from'} id={'from'} >
                            {
                                Object.keys(currencyList).sort().map((item, index) => (
                                    <option key={index} value={item}>{currencyList[`${item}`]}</option>
                                ))
                            }
                        </select>
                    </fieldset>
                    <fieldset className={`${classes.formMain__item} ${classes.itemForm}`}>
                        <label className={classes.itemForm__label} htmlFor="to">To</label>
                        <select onChange={(e) => onChange(e)} className={classes.itemForm__field} value={initTo} name={'to'} id={'to'} >
                            {
                                Object.keys(currencyList).sort().map((item, index) => (
                                    <option key={index} value={item}>{currencyList[`${item}`]}</option>
                                ))
                            }
                        </select>
                    </fieldset>
                </form>
        </div>
    )
}