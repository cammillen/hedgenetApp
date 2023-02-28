// HOW TO USE IN ANOTHER FILE: 
// At the top of your file import globalFonts: "import { globalFonts } from './src/styles/Fonts.js';" (make sure you have the right path)
// Then style text using e.g.: "style={globalFonts.H1(globalColors.main.green.color)}" you pass the color prop through to the font from the globalColors file.
// For the nested body fonts use e.g.: "style={globalFonts.BodyXLarge.Bold(globalColors.main.yellow.color)}"

import { StyleSheet } from "react-native";

export const globalFonts = StyleSheet.create({

  H1: (color) =>({
      fontSize: 48,
      fontFamily: 'Urbanist-Bold',
      color: color,
  }),
  H2: (color) =>({
    fontSize: 40,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H3: (color) =>({
    fontSize: 32,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H4: (color) =>({
    fontSize: 24,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H5: (color) =>({
    fontSize: 20,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H6: (color) =>({
    fontSize: 18,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),

  BodyXLarge: ({
    Bold: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),
  
  BodyLarge: ({
    Bold: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodyMedium: ({
    Bold: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodySmall: ({
    Bold: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodyXSmall: ({
    Bold: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

});

















// import UrbanistBlack from '../assets/fonts/Urbanist-Black.ttf';
// import UrbanistBlackItalic from '../assets/fonts/Urbanist-BlackItalic.ttf';
// import UrbanistBold from '../assets/fonts/Urbanist-Bold.ttf';
// import UrbanistBoldItalic from '../assets/fonts/Urbanist-BoldItalic.ttf';
// import UrbanistExtraBold from '../assets/fonts/Urbanist-ExtraBold.ttf';
// import UrbanistExtraBoldItalic from '../assets/fonts/Urbanist-ExtraBoldItalic.ttf';
// import UrbanistExtraLight from '../assets/fonts/Urbanist-ExtraLight.ttf';
// import UrbanistExtraLightItalic from '../assets/fonts/Urbanist-ExtraLightItalic.ttf';
// import UrbanistItalic from '../assets/fonts/Urbanist-Italic.ttf';
// import UrbanistLight from '../assets/fonts/Urbanist-Light.ttf';
// import UrbanistLightItalic from '../assets/fonts/Urbanist-LightItalic.ttf';
// import UrbanistMedium from '../assets/fonts/Urbanist-Medium.ttf';
// import UrbanistMediumItalic from '../assets/fonts/Urbanist-MediumItalic.ttf';
// import UrbanistRegular from '../assets/fonts/Urbanist-Regular.ttf';
// import UrbanistSemiBold from '../assets/fonts/Urbanist-SemiBold.ttf';
// import UrbanistSemiBoldItalic from '../assets/fonts/Urbanist-SemiBoldItalic.ttf';
// import UrbanistThin from '../assets/fonts/Urbanist-Thin.ttf';
// import UrbanistThinItalic from '../assets/fonts/Urbanist-ThinItalic.ttf';
