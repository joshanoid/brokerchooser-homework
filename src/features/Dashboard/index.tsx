import { BrokerList } from "../BrokerList";
import { TopBrokers } from "../TopBrokers";
import styles from "./Dashboard.module.css";

export const Dashboard = () => (
    <div className={`${styles.dashboard} pt-12 px-10`}>
        <h1 className="text-3xl font-bold text-center mb-6">Find the right broker and invest on your own</h1>
        <div className="flex flex-row justify-between">
            <BrokerList />
            <TopBrokers />
        </div>
    </div>
);
