import Head from 'next/head'

const Meta = ({ title, keywords, desc }) => {
    return (
        <Head>
            <title>{title} | Сборка мебели</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={desc} />
            <meta charSet="utf-8" />
        </Head>
    );
};

export default Meta;