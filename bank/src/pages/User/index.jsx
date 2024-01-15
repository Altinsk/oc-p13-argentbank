/* IMPORTS */
import { selectUserIsConnected } from '../../store/selectors/user';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

/* COMPONENTS */
import UserHeader from '../../components/UserHeader/index';
import AccountsList from '../../components/AccountsList/index';

/* DATA */
const ACCOUNTS = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: 2082.79,
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: 10928.42,
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: 184.3,
        description: 'Current Balance',
    },
];

export default function User() {
    const navigate = useNavigate();
    const isConnected = useSelector(selectUserIsConnected());

    useEffect(() => {
        if (!isConnected) {
            navigate('/');
        }
    }, [isConnected]);

    return (
        <main className="bgDark">
            <UserHeader />
            <AccountsList accounts={ACCOUNTS} />
        </main>
    );
}
