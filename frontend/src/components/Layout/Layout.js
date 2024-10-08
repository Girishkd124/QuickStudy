import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, title, description, keywords, author, headerBg, slug, id, type }) => {
    const defaultTitle = 'Questify - Explore Now';
    const defaultDescription = 'quesitfy - explore knowledge';


    return (
        <>
          
            <Header headerBg={headerBg} />
            <main style={{ minHeight: '69vh' }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

Layout.defaultProps = {

    keywords: 'questify, curious, know, blog, rohit',
    author: "Rohit",
    title: 'Questify',
    description: "Discover blog posts on variety of topics and expand your knowledge",
    type: "website"
};

export default Layout;
