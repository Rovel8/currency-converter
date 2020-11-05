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
        <div className={'headerMain__container'}>
                <form className={'headerMain__form formMain'}>
                    <fieldset className={'formMain__item itemForm'}>
                        <label className={'itemForm__label'} htmlFor="from">From</label>
                        <select onChange={(e) => onChange(e)} className={'itemForm__field'} value={initFrom} name={'from'} id={'from'} >
                            {
                                Object.keys(currencyList).sort().map((item, index) => (
                                    <option key={index} value={item}>{currencyList[`${item}`]}</option>
                                ))
                            }
                        </select>
                    </fieldset>
                    <fieldset className={'formMain__item itemForm'}>
                        <label className={'itemForm__label'} htmlFor="to">To</label>
                        <select onChange={(e) => onChange(e)} className={'itemForm__field'} value={initTo} name={'to'} id={'to'} >
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