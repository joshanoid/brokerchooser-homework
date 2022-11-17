import { BrokerType } from "../../utils/types";

export const getClasses = (activeTab: BrokerType, tabName: BrokerType) => {
    const activeClasses = "border-blue-600 text-blue-600";
    const normalClasses = "hover:text-gray-600 hover:border-gray-300";

    return activeTab === tabName ? activeClasses : normalClasses;
};
