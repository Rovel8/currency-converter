import {HeaderLayout} from "../components/headerLayout/headerLayout";
import {HeaderMain} from "../components/headerMain/HeaderMain";
import {BodyMain} from "../components/bodyMain/bodyMain";
import {useEffect, useState} from "react";
import { InferGetStaticPropsType } from 'next';
import {currencyList} from "../currencyList";

interface IHome {
    base: string
    date: string
    rates: { [key: string]: [value: number] }
}

export default function Home({fetchedData}: InferGetStaticPropsType<typeof getStaticProps>) {

    const [initTo, setInitTo] = useState('USD')
    const [initFrom, setInitFrom] = useState('EUR');
    const [rates, setRates] = useState({});

    let currencyFrom = currencyList[`${initFrom}`];
    let currencyTo = currencyList[`${initTo}`];
    let currentCurrency = rates[`${initTo}`];

    useEffect(() => {
        setRates(fetchedData.rates)
    }, [])

  return (
          <HeaderLayout title={'Home Page'}>
              <main className={'main'}>
                  <div className={'mainContainer'}>
                      <section className={'mainHeader headerMain'}>
                          <HeaderMain
                          initTo={initTo}
                          initFrom={initFrom}
                          setInitTo={setInitTo}
                          setInitFrom={setInitFrom} setRates={setRates}
                          />
                      </section>
                      <section className={'mainBody bodyMain'}>
                          <BodyMain currentCurrency={currentCurrency}
                                    currencyFrom={currencyFrom}
                                    currencyTo={currencyTo}
                          />
                      </section>
                  </div>
              </main>
          </HeaderLayout>

  )
}

export const getStaticProps = async () => {

    const result = await fetch(`https://api.exchangeratesapi.io/latest?base=EUR`)
    const fetchedData: IHome = await result.json()

    return{
        props:{
            fetchedData
        }
    }
}