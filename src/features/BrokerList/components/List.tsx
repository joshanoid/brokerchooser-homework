import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/types";
import { selectBrokersByName } from "../../../redux/slices/brokerData";
import { ListItem } from "./ListItem";

type Props = {
    searchTerm: string;
};

export const List = ({ searchTerm }: Props) => {
    const brokers = useSelector((state: RootState) => selectBrokersByName(state, searchTerm));

    return brokers.length ? (
        <ul className="flex flex-col justify-between">
            {brokers.map((broker) => (
                <ListItem key={broker.id} broker={broker} />
            ))}
        </ul>
    ) : (
        <div className="p-4 w-full bg-white mb-4 rounded-md">
            No results for <span className="font-bold">{searchTerm}</span>
        </div>
    );
};
