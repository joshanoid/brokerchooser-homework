import { BrokerList } from "../BrokerList";
import { Measurements } from "../Measurements";
import { TopBrokers } from "../TopBrokers";
import styles from "./Dashboard.module.css";

export const Dashboard = () => (
    <div className="pt-12 px-10 min-h-screen bg-sky-100">
        <h1 className="text-3xl font-bold text-center mb-6">Find the right broker and invest on your own</h1>
        <div className="flex flex-row justify-between sm:flex-col-reverse sm:items-center">
            <BrokerList />
            <TopBrokers />
        </div>
        <Measurements />
    </div>
);
