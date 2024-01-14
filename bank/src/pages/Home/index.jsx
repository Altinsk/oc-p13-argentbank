/* COMPONENTS */
import Banner from '../../components/Banner/index';
import FeaturesList from '../../components/FeaturesList/index';

/* ASSETS */
import chatIcon from '../../assets/icon-chat.png';
import moneyIcon from '../../assets/icon-money.png';
import securityIcon from '../../assets/icon-security.png';

/* DATAS */
const FEATURES = [
    {
        icon: chatIcon,
        title: 'You are our #1 priority',
        text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        icon: moneyIcon,
        title: 'More savings means higher rates',
        text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
        icon: securityIcon,
        title: 'Security you can trust',
        text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
];

export default function Home() {
    return (
        <main>
            <Banner />
            <FeaturesList features={FEATURES} />
        </main>
    );
}
