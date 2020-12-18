import { create } from "@storybook/theming/create";
import seax from "./../lib/images/seax.png";

// https://storybook.js.org/docs/react/configure/theming

export default create({
    base: "dark",

    appBg: "#682558",
    appContentBg: "#4b1b40",

    barBg: "#682558",
    barTextColor: "#f5f5f5",

    textColor: "#fff",

    inputBg: "white",
    inputBorder: "silver",
    inputTextColor: "black",

    brandTitle: "ECC Storybook",
    brandImage: seax,
});
