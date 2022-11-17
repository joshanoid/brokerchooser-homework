import * as React from "react";
import { BrokerType } from "../../utils/types";
import { List } from "./components/List";
import { getClasses } from "./utils";

export const TopBrokers = () => {
    const [activeTab, setActiveTab] = React.useState<BrokerType>("stock");

    return (
        <section className="flex flex-col flex-1 items-end drop-shadow-xl mt-6 sm:w-full sm:mb-6 sm:items-center">
            <div className="w-3/4 p-4 bg-white rounded-md">
                <h2 className="text-2xl font-bold">Top 5 Brokers</h2>
                <div className="text-sm font-medium text-center my-2">
                    <ul className="flex flex-row">
                        <li
                            className={`flex-1 border-b-2 ${getClasses(activeTab, "stock")} cursor-pointer`}
                            onClick={() => setActiveTab("stock")}
                        >
                            <a href="#" className="inline-block p-2 font-bold">
                                Stock
                            </a>
                        </li>
                        <li
                            className={`flex-1 border-b-2 ${getClasses(activeTab, "forex")} cursor-pointer`}
                            onClick={() => setActiveTab("forex")}
                        >
                            <a href="#" className="inline-block p-2 font-bold">
                                Forex
                            </a>
                        </li>
                    </ul>
                </div>
                {activeTab === "stock" && <List type="stock" />}
                {activeTab === "forex" && <List type="forex" />}
            </div>
        </section>
    );
};
