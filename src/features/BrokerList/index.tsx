import * as React from "react";
import { useDebounce } from "../../utils/useDebounce";
import { List } from "./components/List";

export const BrokerList = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const debouncedSearchTerm = useDebounce(searchTerm);

    return (
        <section className="flex flex-col flex-1 sm:w-full sm:mt-10">
            <div className="flex flex-col w-1/2 mb-6 sm:w-3/4 sm:self-center">
                <label htmlFor="broker-filter" className="block text-sm ml-2 mb-1">
                    Filter by name
                </label>
                <div className="relative">
                    <input
                        className="block py-2 px-2 w-full text-sm font-medium outline-none bg-white border border-gray-400 rounded-md"
                        id="broker-filter"
                        type="text"
                        placeholder="Type Broker Name"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <svg
                        className="w-4 h-4 absolute inset-y-0 my-auto right-0 mr-2 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setSearchTerm("")}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </div>
            </div>
            <List searchTerm={debouncedSearchTerm} />
        </section>
    );
};
