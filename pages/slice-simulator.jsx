// e.g. ~/pages/slice-simulator.jsx
import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../.slicemachine/libraries-state.json";

import * as Slices_ecommerce from '../slices/ecommerce'
import * as Slices_marketing from '../slices/marketing'
import * as Slices from '../slices'

const __allSlices = {  ...Slices, ...Slices_marketing, ...Slices_ecommerce, }
const resolver = ({ sliceName }) => __allSlices[sliceName];

const SliceSimulatorPage = () => (<SliceSimulator
	// The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
	sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
	state={state}
/>);

export default SliceSimulatorPage;