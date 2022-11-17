import * as React from "react";
import { Broker, MeasurementType } from "../../../utils/types";
import { addMeasurement } from "../../../redux/slices/measurements";
import { useOnScreen } from "../../../utils/useOnScreen";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

type Props = {
    broker: Broker;
};

export const ListItem = ({ broker }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const listRef = React.useRef(null);
    const isListItemOnScreen = useOnScreen(listRef);
    const measure = (type: MeasurementType) => {
        const measurement = {
            brokerId: broker.id,
            type,
            measurementId: "BROKER_SEARCH_LIST_ID"
        } as const;

        dispatch(addMeasurement(measurement));
    };

    React.useEffect(() => {
        if (isListItemOnScreen) {
            measure("impression");
        }
    }, [isListItemOnScreen]);

    return (
        <li ref={listRef} className="flex flex-row items-center p-4 w-full bg-white mb-4 rounded-md">
            <img src={broker.logoUrl} width={50} />
            <div className="ml-4">
                <span className="text-base text-center font-bold">{broker.name}</span>
            </div>
            <div className="flex flex-col items-center ml-auto">
                <div className="flex items-center relative w-max flex-col">
                    <a
                        className="flex flex-row items-center justify-center font-medium text-sm uppercase py-2 px-4 bg-blue-700 text-white rounded-lg "
                        rel="noreferrer nofollow"
                        target="_blank"
                        href={broker.linkUrl}
                        onClick={() => measure("click")}
                    >
                        Visit broker
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </li>
    );
};
