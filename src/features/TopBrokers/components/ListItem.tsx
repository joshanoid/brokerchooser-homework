import * as React from "react";
import { Broker, BrokerType, MeasurementId, MeasurementType } from "../../../utils/types";
import { addMeasurement } from "../../../redux/slices/measurements";
import { useOnScreen } from "../../../utils/useOnScreen";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

type Props = {
    broker: Broker;
    type: BrokerType;
    index: number;
};

export const ListItem = ({ broker, type, index }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const listRef = React.useRef(null);
    const isListItemOnScreen = useOnScreen(listRef);
    const measurementId: MeasurementId = type === "stock" ? "TOP_5_STOCK_TAB_LIST_ID" : "TOP_5_FOREX_TAB_LIST_ID";
    const measure = (type: MeasurementType, measurementId: MeasurementId) => {
        const measurement = {
            brokerId: broker.id,
            type,
            measurementId
        } as const;

        dispatch(addMeasurement(measurement));
    };

    React.useEffect(() => {
        if (isListItemOnScreen) {
            measure("impression", measurementId);
        }
    }, [isListItemOnScreen]);

    return (
        <li ref={listRef} key={broker.id} className="p-2 w-full mb-2">
            <a
                className="flex flex-row justify-between items-center"
                rel="noreferrer nofollow"
                target="_blank"
                href={broker.linkUrl}
                onClick={() => measure("click", measurementId)}
            >
                <span className="text-sm text-center font-bold mr-4">{index}.</span>
                <img src={broker.logoUrl} width={30} />
                <div className="ml-4">
                    <span className="text-sm text-center font-bold">{broker.name}</span>
                </div>
                <div className="flex flex-row items-center ml-auto">
                    <span className="text-sm text-center font-bold">{broker.score}</span>
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
            </a>
        </li>
    );
};
