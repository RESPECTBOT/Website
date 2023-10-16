/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:51:40
 * @Description:
 */
import Navbar from '../components/Layout/Navbar';
import Head from '../components/Layout/Head';
import Card from '../components/Layout/Card';
import Work from '../components/Layout/Work';
import Tokenomics from '../components/Layout/Tokenomics';
import Roadmap from '../components/Layout/Roadmap';
import Footer from '../components/Layout/Footer';

export default function Home() {
  const v1text =
    'One-click preset strategies for profit-taking and stop loss./Customized strategy by using user-friendly interface./Token contract security check';
  const v1title = 'V1 Core Features';
  const v2text =
    'TBH, as every transaction requires a signature, our trading bot needs to/temporarily store your private key on the server to facilitate trade execution/on your behalf. Although we assure you that we have no intention of misusing/your private keys, we highly recommend using a Burner Wallet to maximize/the isolation of your risk while mitigating any trust concerns.';
  const v2title = 'Security Disclaimer';

  return (
    <div className='w-screen'>
      <main className='container flex items-center p-4 mx-auto min-h-screen justify-center '>
        <Navbar />
        <div className='flex flex-col gap-40 m-20 items-center'>
          <Head />
          <Card text={v1text} title={v1title} little={false} />
          <Work />
          <Roadmap />
          <Tokenomics />
          <Card text={v2text} title={v2title} little={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
