import * as React from "react";
import { useDebounce } from "../../utils/useDebounce";
import { List } from "./components/List";

export const BrokerList = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const debouncedSearchTerm = useDebounce(searchTerm);

    return (
        <section className="flex flex-col justify-between flex-1">
            <div className="flex flex-wrap items-center w-1/2 mb-6">
                <label htmlFor="broker-filter" className="block text-sm ml-2 mb-1">
                    Filter by name
                </label>
                <input
                    className="block py-2 px-2 w-full text-sm font-medium outline-none bg-white border border-gray-400 rounded-md"
                    id="broker-filter"
                    type="text"
                    placeholder="Type Broker Name"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
            <List searchTerm={debouncedSearchTerm} />
        </section>
    );
};
