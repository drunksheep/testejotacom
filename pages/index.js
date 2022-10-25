import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Head title={'Foodish'} />
      <main className='structure'>
        <Hero
          title={'Teste o estilo de vida'}
          tagline={'H3: Lorem ipsum dolor sit amet, consecteur adipscing elit, sed'}
          isFirst={true}
          background={'/background.jpg'}
        />
      </main>
    </>
  )
}
