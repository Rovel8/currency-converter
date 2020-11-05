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
        <header className={'header'}>
            <div className={'header__container'}>
                <div className={'headerLogo logoHeader'}>
                    <div className={'logoHeader__img'}>
                        <Image src="/dollar-currency-symbol-variant-svgrepo-com.svg"
                               alt="Currency Logo"
                                width={50}
                                height={50}/>
                    </div>
                    <div className={'logoHeader__title'}>
                        <span>Converter</span>
                    </div>
                </div>
            </div>
        </header>
            {children}
            </>
    )
}