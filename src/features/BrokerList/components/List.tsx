import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/types";
import { selectBrokersByName } from "../../../redux/slices/brokerDataSlice";

type Props = {
    searchTerm: string;
};

export const List = ({ searchTerm }: Props) => {
    const brokers = useSelector((state: RootState) => selectBrokersByName(state, searchTerm));

    return (
        <div className="flex flex-col justify-between">
            {brokers.map((broker) => (
                <div className="flex flex-col items-center p-4 w-full bg-white mb-4">
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
