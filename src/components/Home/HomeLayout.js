
//components
import SidebarLayout from "../Sidebar/SidebarLayout";
import HeaderLayout from "../Header/HeaderLayout";
import InsightLayout from "../Insight/InsightLayout";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Tab from "../Tabs/Tab";

//styles
import styles from "./HomeLayout.module.css";


const HomeLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SidebarLayout />
            </div>
            <div className={styles.main}>
                <HeaderLayout />
                <InsightLayout />
                <Tab />
            </div>
            <div className={styles.bottomNavbar}>
                    <BottomNavBar />
            </div>
        </div>
    );
}

export default HomeLayout;
