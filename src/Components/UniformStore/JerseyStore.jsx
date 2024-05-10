import React from "react";

const JerseyStore = ({ jerseryId }) => {
  const jerseyArr = [
    {
      id: 1,
      uniform_layers: 2,
      shoulder_layers: 1,
      neck_style: 1,
      clc: "#00611e",
      cc: "#00611e",
      sc: "#ffffff",
      stc: "#00611e",
      mc: "#ffffff",
      sl2: "#ffffff",
      sl3: "#ffffff",
      sl4: "",
      sl5: "",
      sl6: "",
      sl7: "",
      cl2: "",
      cl3: "",
      cl4: "",
      cl5: "",
      slc: "",
      slc2: "",
      slc3: "",
      slc4: "",
    },
    {
      id: 2,
      uniform_layers: 2,
      shoulder_layers: 1,
      neck_style: 1,
      clc: "#eb0000",
      cc: "#eb0000",
      sc: "#ffffff",
      stc: "#eb0000",
      mc: "#ffffff",
      sl2: "#ffffff",
      sl3: "#ffffff",
      sl4: "#ffffff",
      sl5: "#ffffff",
      sl6: "#ffffff",
      sl7: "#ffffff",
      cl2: "#ffffff",
      cl3: "#ffffff",
      cl4: "#ffffff",
      cl5: "#ffffff",
      slc: "#ffffff",
      slc2: "#ffffff",
      slc3: "#ffffff",
      slc4: "#ffffff",
    },
    {
      id: 3,
      uniform_layers: 2,
      shoulder_layers: 1,
      neck_style: 1,
      clc: "#eb0000",
      cc: "#eb0000",
      sc: "#ffffff",
      stc: "#eb0000",
      mc: "#ffffff",
      sl2: "#ffffff",
      sl3: "#ffffff",
      sl4: "#ffffff",
      sl5: "#ffffff",
      sl6: "#ffffff",
      sl7: "#ffffff",
      cl2: "#ffffff",
      cl3: "#ffffff",
      cl4: "#ffffff",
      cl5: "#ffffff",
      slc: "#ffffff",
      slc2: "#ffffff",
      slc3: "#ffffff",
      slc4: "#ffffff",
    },
    {
      id: 4,
      uniform_layers: 2,
      shoulder_layers: 1,
      neck_style: 1,
      clc: "#eb0000",
      cc: "#eb0000",
      sc: "#ffffff",
      stc: "#eb0000",
      mc: "#ffffff",
      sl2: "#ffffff",
      sl3: "#ffffff",
      sl4: "#ffffff",
      sl5: "#ffffff",
      sl6: "#ffffff",
      sl7: "#ffffff",
      cl2: "#ffffff",
      cl3: "#ffffff",
      cl4: "#ffffff",
      cl5: "#ffffff",
      slc: "#ffffff",
      slc2: "#ffffff",
      slc3: "#ffffff",
      slc4: "#ffffff",
    },
    {
      id: 5,
      uniform_layers: 2,
      shoulder_layers: 1,
      neck_style: 1,
      clc: "#eb0000",
      cc: "#eb0000",
      sc: "#ffffff",
      stc: "#eb0000",
      mc: "#ffffff",
      sl2: "#ffffff",
      sl3: "#ffffff",
      sl4: "#ffffff",
      sl5: "#ffffff",
      sl6: "#ffffff",
      sl7: "#ffffff",
      cl2: "#ffffff",
      cl3: "#ffffff",
      cl4: "#ffffff",
      cl5: "#ffffff",
      slc: "#ffffff",
      slc2: "#ffffff",
      slc3: "#ffffff",
      slc4: "#ffffff",
    },
  ];

  const JerseyObj = jerseyArr[jerseryId - 1];
  return <div>{JSON.stringify(JerseyObj)}</div>;
};

export default JerseyStore;