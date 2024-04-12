import type {NextPage} from 'next';
import {TotalProvider} from "../../contexts/TotalContext";
import HomeLayout from "../../components/Home/HomeLayout";
const DashboardPage: NextPage = () => {
    return (
        <TotalProvider>
            <HomeLayout />
        </TotalProvider>
    )
}
export default DashboardPage;