import { BROKER_SEARCH_LIST_ID, TOP_5_STOCK_TAB_LIST_ID, TOP_5_FOREX_TAB_LIST_ID } from "./constants";

export type Broker = {
    id: number;
    name: string;
    logoUrl: string;
    linkUrl: string;
    score: number;
    isForex?: boolean;
    isStock?: boolean;
};

export type Brokers = ReadonlyArray<Broker>;

export type BrokerType = "stock" | "forex";

export type MeasurementId =
    | typeof BROKER_SEARCH_LIST_ID
    | typeof TOP_5_STOCK_TAB_LIST_ID
    | typeof TOP_5_FOREX_TAB_LIST_ID;

export type MeasurementType = "click" | "impression";

export type MeasurementEvent = {
    type: MeasurementType;
    brokerId: number;
    measurementId: MeasurementId;
};

export type Measurements = ReadonlyArray<MeasurementEvent>;

export type RootState = {
    brokerData: Brokers;
    measurements: Measurements;
};
