import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CarouselSection from '../components/CarouselSection';
import GenericSection from '../components/GenericSection';
import EndForm from '../components/EndForm';
import Footer from "../components/Footer";

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
        <CarouselSection />
        <GenericSection classNames={'info bg-black pdt-70px pdb-80px'} />
        <EndForm />
      </main>
      <Footer /> 
    </>
  )
}