import * as React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";
import tw from "twrnc";

export const User = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
  </Svg>
);

export const EditPhoto = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
    <Path
      fillRule='evenodd'
      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
      clipRule='evenodd'
    />
  </Svg>
);

export const HomeSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
  </Svg>
);

export const TugasSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
  </Svg>
);

export const ActivitySVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </Svg>
);

export const ProfileSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
      clipRule='evenodd'
    />
  </Svg>
);

export const LogoutSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
      clipRule='evenodd'
    />
  </Svg>
);

export const FlipCameraSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z' />
  </Svg>
);

export const TakePhotoSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
      clipRule='evenodd'
    />
  </Svg>
);

export const Minus = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
      clipRule='evenodd'
    />
  </Svg>
);

export const Plus = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
      clipRule='evenodd'
    />
  </Svg>
);

export const Notification = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
  </Svg>
);

export const Chart = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5'
    viewBox='0 0 20 20'
    fill='currentColor'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
  >
    <Path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
    <Path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
  </Svg>
);

export const Schedule = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
  </Svg>
);

export const Class = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
    <Path
      fillRule='evenodd'
      d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
      clipRule='evenodd'
    />
  </Svg>
);

export const HistoryInfo = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
      clipRule='evenodd'
    />
  </Svg>
);

export const DownloadSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </Svg>
);

export const LinkSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
      clipRule='evenodd'
    />
  </Svg>
);

export const PuzzleSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
  </Svg>
);

export const AbsenSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
    <Path
      fillRule='evenodd'
      d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </Svg>
);

export const MenuSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z'
      clipRule='evenodd'
    />
  </Svg>
);

export const MenusSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
      clipRule='evenodd'
    />
  </Svg>
);

export const StudySVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
  </Svg>
);

export const RightArrowSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
      clipRule='evenodd'
    />
  </Svg>
);

export const DownArrowSVG = ({ col }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    style={tw`${col && col.length > 0 ? col : "h-5 w-5 text-black"}`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <Path
      fillRule='evenodd'
      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </Svg>
);
