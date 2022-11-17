import { MeasurementEvent } from "../utils/types";

export const sendEvent = (arg: MeasurementEvent) => {
    console.log("Event sent: ", arg);
};
