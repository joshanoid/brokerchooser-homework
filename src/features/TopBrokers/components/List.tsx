import * as React from "react";
import { useSelector } from "react-redux";
import { BrokerType, RootState } from "../../../utils/types";
import { selectTop5BrokersByType } from "../../../redux/slices/brokerData";
import { ListItem } from "./ListItem";

type Props = {
    type: BrokerType;
};

export const List = ({ type }: Props) => {
    const brokers = useSelector((state: RootState) => selectTop5BrokersByType(state, type));

    return (
        <ul>
            {brokers.map((broker, index) => (
                <ListItem key={broker.id} broker={broker} type={type} index={index + 1} />
            ))}
        </ul>
    );
};
