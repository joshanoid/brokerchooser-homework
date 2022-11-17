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

export type RootState = {
    brokerData: Brokers;
};
