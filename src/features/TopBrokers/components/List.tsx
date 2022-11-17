import * as React from "react";
import { useSelector } from "react-redux";
import { BrokerType, RootState } from "../../../utils/types";
import { selectTop5BrokersByType } from "../../../redux/slices/brokerDataSlice";

type Props = {
    type: BrokerType;
};

export const List = ({ type }: Props) => {
    const brokers = useSelector((state: RootState) => selectTop5BrokersByType(state, type));

    return (
        <ul>
            {brokers.map((broker, index) => (
                <li className="p-2 w-full mb-2">
                    <a
                        className="flex flex-row justify-between items-center"
                        rel="noreferrer nofollow"
                        target="_blank"
                        href={broker.linkUrl}
                    >
                        <span className="text-sm text-center font-bold mr-4">{index + 1}.</span>
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
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};
