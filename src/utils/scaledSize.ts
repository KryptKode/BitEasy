import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
} from "react-native-responsive-screen";

// base dimensions from design
const baseWidth = 375;
const baseHeight = 812;

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 375, 812 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {number}
 */
export const wp = (dimension: number) => {
    return wp2dp(`${(dimension / baseWidth) * 100}%`);
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 375, 812 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {number}
 */
export const hp = (dimension: number) => {
    return hp2dp(`${(dimension / baseHeight) * 100}%`);
};

export const scaledSize = (dimension: number) => {
    const heightScale = hp(dimension);
    const widthScale = wp(dimension);
    const averageScale = (heightScale + widthScale) / 2;
    return Math.round(averageScale);
};
