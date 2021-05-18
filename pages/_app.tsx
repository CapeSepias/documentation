import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@styles/Global.styles';
import '@styles/prismjs-theme-dotcms.css';
import styled from 'styled-components';

// Tailwind
import '@styles/globals.css';
import { Header } from '../components/header/Header';
import SideBar from '@components/SideBar';
import SideNav from '@components/SideNav';
import TableOfContent from '@components/TableOfContent';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 0 100vw 0;
    grid-template-rows: max-content 1fr;
    min-height: 100vh;
    max-width: 100vw;
    @media screen and (min-width: 768px) {
        grid-template-columns: max-content 1fr max-content;
    }
`;
const HeaderWrapper = styled.div`
    grid-column: 1/-1;
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <meta
                    content="width=device-width, initial-scale=1.0, user-scalable=0"
                    name="viewport"
                />
            </Head>
            <GlobalStyle />
            {pageProps.navDot ? (
                <Grid>
                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>
                    <SideBar>
                        <SideNav data={pageProps.navDot[0]} />
                    </SideBar>
                    <main className="container mt-4 md:mt-0 justify-self-center overflow-auto">
                        <Component {...pageProps} />
                    </main>
                    {!!pageProps.toc?.length && (
                        <div className="hidden lg:block w-60 px-3 overflow-auto">
                            <h3>Table of Content</h3>
                            <TableOfContent titles={pageProps.toc} />
                        </div>
                    )}
                </Grid>
            ) : (
                <Component {...pageProps} />
            )}
        </>
    );
}

export default MyApp;
