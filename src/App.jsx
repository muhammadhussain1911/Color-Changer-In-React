// import { useState } from 'react'
// import './App.css'


// function App() {
//   const colorArray = [
//   "Black", "White", "Red", "Green", "Blue", "Yellow", "Pink", "Orange", "Purple", "Brown",
//   "Gray", "Cyan", "Magenta", "Lime", "Maroon", "Olive", "Navy", "Teal", "Aqua", "Silver",
//   "Gold", "Indigo", "Violet", "Coral", "Salmon", "Tomato", "Khaki", "Chocolate", "Crimson", "Azure",
//   "Beige", "MintCream", "HoneyDew", "Ivory", "Lavender", "LightBlue", "LightCoral", "LightCyan", "LightGray", "LightGreen",
//   "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
//   "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "Moccasin", "NavajoWhite", "OldLace", "Orchid", "PaleGoldenRod", "PaleGreen"
// ];
//   const [bgColor, setBgColor] = useState('Black');

//   return (
//     <div
//       className="w-full h-screen duration-200"
//       style={{ backgroundColor: bgColor }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           {colorArray.map((color) => (
//             <button
//               key={color}
//               onClick={() => setBgColor(color)}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
//               style={{ backgroundColor: color }}
//             >
//               {color}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// <============ Use above code for view only colors and below code for copying colors also. ============>

import { useState } from 'react';
import './App.css';

function App() {
  const colorMap = {
  Black: "#000000",
  White: "#FFFFFF",
  Red: "#FF0000",
  Green: "#008000",
  Blue: "#0000FF",
  Yellow: "#FFFF00",
  Pink: "#FFC0CB",
  Orange: "#FFA500",
  Purple: "#800080",
  Brown: "#A52A2A",
  Gray: "#808080",
  Cyan: "#00FFFF",
  Magenta: "#FF00FF",
  Lime: "#00FF00",
  Maroon: "#800000",
  Olive: "#808000",
  Navy: "#000080",
  Teal: "#008080",
  Aqua: "#00FFFF",
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  Indigo: "#4B0082",
  Violet: "#EE82EE",
  Coral: "#FF7F50",
  Salmon: "#FA8072",
  Tomato: "#FF6347",
  Khaki: "#F0E68C",
  Chocolate: "#D2691E",
  Crimson: "#DC143C",
  Azure: "#F0FFFF",
  Beige: "#F5F5DC",
  MintCream: "#F5FFFA",
  HoneyDew: "#F0FFF0",
  Ivory: "#FFFFF0",
  Lavender: "#E6E6FA",
  LightBlue: "#ADD8E6",
  LightCoral: "#F08080",
  LightCyan: "#E0FFFF",
  LightGray: "#D3D3D3",
  LightGreen: "#90EE90",
  LightPink: "#FFB6C1",
  LightSalmon: "#FFA07A",
  LightSeaGreen: "#20B2AA",
  LightSkyBlue: "#87CEFA",
  LightSlateGray: "#778899",
  LightSteelBlue: "#B0C4DE",
  MediumBlue: "#0000CD",
  MediumOrchid: "#BA55D3",
  MediumPurple: "#9370DB",
  MediumSeaGreen: "#3CB371",
  MediumSlateBlue: "#7B68EE",
  MediumSpringGreen: "#00FA9A",
  MediumTurquoise: "#48D1CC",
  MediumVioletRed: "#C71585",
  Moccasin: "#FFE4B5",
  NavajoWhite: "#FFDEAD",
  OldLace: "#FDF5E6",
  Orchid: "#DA70D6",
  PaleGoldenRod: "#EEE8AA",
  PaleGreen: "#98FB98"
};

  const colors = Object.keys(colorMap);
  const [selectedColor, setSelectedColor] = useState('White');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorMap[selectedColor]);
    alert(`Copied: ${colorMap[selectedColor]}`);
  };

  return (
    <div
      className="w-full h-screen duration-300 relative"
      style={{ backgroundColor: selectedColor }}
    >
      {/* Center Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-lg p-6 rounded-xl text-center w-64">
        <h2 className="text-xl font-semibold mb-2">Selected Color</h2>
        <div className="text-lg">{selectedColor}</div>
        <div className="text-sm text-gray-500 mb-3">{colorMap[selectedColor]}</div>
        <button
          onClick={copyToClipboard}
          className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
        >
          Copy Hex
        </button>
      </div>

      {/* Buttons Bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
              style={{ backgroundColor: color }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
