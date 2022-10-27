import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='PT-BR'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

/// LEMBRAR: https://nextjs.org/docs/advanced-features/custom-document#caveats
/// leia os caveats sobre o componente <Head> está sendo usado, principalmente pq o customizado tem um wrapper
/// (só se for editar)