import classes from './headerLayout.module.css';
import Head from "next/head";
import React from "react";
import Image from "next/image";

interface IProps{
    title: string
}

export const HeaderLayout: React.FC<IProps> = ({title, children}) => {
    return(
        <>
            <Head>
                <meta charSet={'UTF-8'}/>
                <title>{title}</title>
            </Head>
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={`${classes.headerLogo} ${classes.logoHeader}`}>
                    <div className={classes.logoHeader__img}>
                        <Image src="/dollar-currency-symbol-variant-svgrepo-com.svg"
                               alt="Currency Logo"
                                width={50}
                                height={50}/>
                    </div>
                    <div className={classes.logoHeader__title}>
                        <span>Converter</span>
                    </div>
                </div>
            </div>
        </header>
            {children}
            </>
    )
}