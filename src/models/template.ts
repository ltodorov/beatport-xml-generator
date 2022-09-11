import type { Customer } from "./customer.js";
import type { Release } from "./release.js";

interface Template extends Customer, Release {}

export {
    Template
};