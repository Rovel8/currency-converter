import classes from '../../styles/bodyMain.module.css'


interface IBodyMain {
    currencyFrom: string
    currencyTo: string
    currentCurrency: number
}
export const BodyMain: React.FC<IBodyMain> = ({currencyFrom, currencyTo, currentCurrency}) => {

    if(!currentCurrency){
        currentCurrency = 1
    }

    return(
        <div className={classes.bodyMain}>
            <div className={classes.bodyMain__header}>
                <span>One {currencyFrom} is equal to: </span>
            </div>
            <h1 className={classes.bodyMain__title}>{currentCurrency}</h1>
            <div className={classes.bodyMain__footer}>
                <span>{currencyTo}</span>
            </div>
        </div>
    )
}