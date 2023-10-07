require([
  "esri/Map",
  "esri/views/MapView",
  "esri/config",
  "esri/layers/FeatureLayer",
  "esri/layers/support/LabelClass",
  "esri/widgets/Home",
  "esri/widgets/Fullscreen",
  "esri/widgets/Expand",
  "esri/widgets/Directions",
  "esri/layers/RouteLayer",
  "esri/widgets/Locate",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Compass",
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/ScaleBar",
  "esri/layers/GroupLayer",
  "esri/widgets/LayerList",
  "esri/Graphic",
  "esri/rest/route",
  "esri/rest/support/RouteParameters",
  "esri/rest/support/FeatureSet",
], (
  Map,
  MapView,
  esriConfig,
  FeatureLayer,
  LabelClass,
  Home,
  Fullscreen,
  Expand,
  Directions,
  RouteLayer,
  Locate,
  BasemapGallery,
  Compass,
  Search,
  Legend,
  ScaleBar,
  GroupLayer,
  LayerList,
  Graphic,
  route,
  RouteParameters,
  FeatureSet
) => {
  const title = document.getElementById("title");
  var AtmBtn = document.getElementById("Atm");
  var BankBtn = document.getElementById("Banks");
  var RestaurantBtn = document.getElementById("Restaurants");
  var BusBtn = document.getElementById("Bustops");
  var clear = document.getElementById("clear");
  const sideBarBtn = document.getElementById("sideBar--btn");

  const routeLayer = new RouteLayer();
  // btnToggle Start
  const AtmCenters = new FeatureLayer({
    id: 1,
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/28",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "atm",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      new LabelClass({
        // autocasts as new LabelClass()
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },

        labelExpressionInfo: {
          expression: "$feature.atm_name",
        },
        labelPlacement: "above-center",
        repeatLabel: true,
        // repeatDistanceLabel: 100,
      }),
    ],
    refreshInterval: 0.1,
    popupTemplate: {
      title: "ATM Centers in Mangaluru",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "atm_name",
              label: "NAME",
            },
            {
              fieldName: "address",
              label: "ADDRESS",
              format: {
                digitSeparator: false,
                places: 0,
              },
            },
          ],
        },
      ],
    },
    title: "ATM CENTERS",
  });
  const banks = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/27",
    screenSizePerspectiveEnabled: true,
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "city-hall",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      new LabelClass({
        // autocasts as new LabelClass()
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelExpressionInfo: {
          expression: "$feature.bank_name",
        },
        labelPlacement: "above-center",
        repeatLabel: true,
        // repeatDistanceLabel: 100,
      }),
    ],
    title: "BANKS",
    refreshInterval: 0.1,
    popupTemplate: {
      title: "Banks in Mangaluru",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "bank_name",
              label: "NAME",
            },
            {
              fieldName: "address",
              label: "ADDRESS",
              format: {
                digitSeparator: false,
                places: 0,
              },
            },
          ],
        },
      ],
    },
  });
  const Restaurants = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/ArcGIS/rest/services/Mangalore_Feb6/FeatureServer/1",
    screenSizePerspectiveEnabled: true,
    title: "RESTAURANTS",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "restaurant",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      new LabelClass({
        // autocasts as new LabelClass()
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelExpressionInfo: {
          expression: "$feature.rest_name ",
        },
        labelPlacement: "above-center",
        repeatLabel: true,
        // repeatDistanceLabel: 100,
      }),
    ],
    refreshInterval: 0.1,
    popupTemplate: {
      title: "Restaurants in Mangaluru",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "rest_name ",
              label: "NAME",
            },
            {
              fieldName: "address",
              label: "ADDRESS",
              format: {
                digitSeparator: false,
                places: 0,
              },
            },
          ],
        },
      ],
    },
  });
  const Busstops = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/ArcGIS/rest/services/Mangalore_Feb6/FeatureServer/4",
    screenSizePerspectiveEnabled: true,
    featureEffect: {},
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "bus-station",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    listMode: "show",
    labelingInfo: [
      new LabelClass({
        // autocasts as new LabelClass()
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelExpressionInfo: {
          expression: "$feature.busstop_na ",
        },
        labelPlacement: "above-center",
        repeatLabel: true,
        // repeatDistanceLabel: 100,
      }),
    ],
    refreshInterval: 0.1,
    title: "BUS STOPS",
    popupTemplate: {
      title: "BusStops in Mangaluru",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "busstop_na ",
              label: "NAME",
            },
            {
              fieldName: "busstop_id",
              label: "BUSSTOP ID",
              format: {
                digitSeparator: false,
                places: 0,
              },
            },
          ],
        },
      ],
    },
  });
  // btnToggle end
  const Airport_Mangalore = new FeatureLayer({
    title: "AIRPORTS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/30",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "airport",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    popupTemplate: {
      title: "AIRPORTS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "airport_na",
              label: "Name",
            },
            {
              fieldName: "airport_ty",
              label: "Type",
            },
            {
              fieldName: "no_of_term",
              label: "No of Terminals",
            },
            {
              fieldName: "address",
              label: "Address",
            },
          ],
        },
      ],
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.airport_na",
        },
      },
    ],
  });
  const ASI_protected_mangalore = new FeatureLayer({
    title: "ASI PROTECTED MONUMENTS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/29",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "museum",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    popupTemplate: {
      title: "ASI PROTECTED MONUMENTS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "asi_name",
              label: "Name",
            },
            {
              fieldName: "asi_addres",
              label: "Address",
            },
            {
              fieldName: "ulbname",
              label: "City",
            },
          ],
        },
      ],
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.asi_name",
        },
      },
    ],
  });
  const social_club = new FeatureLayer({
    title: "SOCIAL CLUBS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/26",
    popupTemplate: {
      title: "SOCIAL CLUBS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "club_name",
              label: "Name",
            },
            {
              fieldName: "ward_no",
              label: "Ward No",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "bar",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.club_name",
        },
      },
    ],
  });
  const Crematorium_mangalore = new FeatureLayer({
    title: "CREMATORIUM",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/25",
    popupTemplate: {
      title: "CREMATORIUM",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "cre_name",
              label: "Name",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "locality",
              label: "City",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "cemetery",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.cre_name",
        },
      },
    ],
  });
  const Daycarecentre_mangalore = new FeatureLayer({
    title: "DAYCARE CENTER",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/24",
    popupTemplate: {
      title: "DAYCARE CENTER",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "day_name",
              label: "Name",
            },
            {
              fieldName: "land_mark",
              label: "Land Mark",
            },
            {
              fieldName: "locality",
              label: "City",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
              format: {
                digitSeparator: false,
                places: 0,
              },
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "embassy",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.day_name",
        },
      },
    ],
  });
  const education_mangalore = new FeatureLayer({
    title: "EDUCATIONAL INSTITUTIONS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/23",
    popupTemplate: {
      title: "EDUCATIONAL INSTITUTIONS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "sch_name",
              label: "Name",
            },
            {
              fieldName: "sch_type",
              label: "Type",
            },
            {
              fieldName: "clasifi",
              label: "Classification",
            },
            {
              fieldName: "sch_addres",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "school",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.sch_name",
        },
      },
    ],
  });
  const electionBooth_mangalore = new FeatureLayer({
    title: "ELECTORAL BOOTH LOCATION",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/22",
    popupTemplate: {
      title: "ELECTORAL BOOTH LOCATION",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "electoral_",
              label: "Name",
            },
            {
              fieldName: "electora_1",
              label: "Booth Number",
            },
            {
              fieldName: "ulbname",
              label: "City",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "extent-square",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.ulbname",
        },
      },
    ],
  });
  const Entertainment_mangalore = new FeatureLayer({
    title: "ENTERTAINMENT PLACES",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/21",
    popupTemplate: {
      title: "ENTERTAINMENT PLACES",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "enter_name",
              label: "Name",
            },
            {
              fieldName: "enter_type",
              label: "Type",
            },
            {
              fieldName: "enter_timi",
              label: "Land mark",
            },
            {
              fieldName: "enter_addr",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "amusement-park",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.enter_name",
        },
      },
    ],
  });
  const Gasagency_mangalore = new FeatureLayer({
    title: "GAS AGENCY",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/20",
    popupTemplate: {
      title: "GAS AGENCY",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "gas_name",
              label: "Name",
            },
            {
              fieldName: "fule_cmp",
              label: "Fuel Company",
            },
            {
              fieldName: "land_mark",
              label: "Land Mark",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "address",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "gas-station",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.gas_name",
        },
      },
    ],
  });
  const govnmentOffice_mangalore = new FeatureLayer({
    title: "GOVERNMENT OFFICES",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/19",
    popupTemplate: {
      title: "GOVERNMENT OFFICES",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "govt_name",
              label: "Name",
            },
            {
              fieldName: "govt_depar",
              label: "Type",
            },
            {
              fieldName: "land_mark",
              label: "Land Marks",
            },
            {
              fieldName: "govt_addre",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "house",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.govt_name",
        },
      },
    ],
  });
  const heritage_mangalore = new FeatureLayer({
    title: "HERITAGES",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/18",
    popupTemplate: {
      title: "HERITAGES",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "heri_name",
              label: "Name",
            },
            {
              fieldName: "land_mark",
              label: "Land Marks",
            },
            {
              fieldName: "open_day",
              label: "Open Day",
            },
            {
              fieldName: "ulbname",
              label: "City",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // aut ocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/heritage.svg",
        width: "32px",
        height: "32px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.heri_name",
        },
      },
    ],
  });
  const Hotel_mangalore = new FeatureLayer({
    title: "HOTELS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/3",
    popupTemplate: {
      title: "HOTELS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "hotel_name",
              label: "Name",
            },
            {
              fieldName: "star",
              label: "Ratings",
            },
            {
              fieldName: "address",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "hotel",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.hotel_name",
        },
      },
    ],
  });
  const Market_mangalore = new FeatureLayer({
    title: "MARKETS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/17",
    popupTemplate: {
      title: "MARKETS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "market_nam",
              label: "Name",
            },
            {
              fieldName: "ulbname",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "grocery-store",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.market_nam",
        },
      },
    ],
  });
  const medicals_mangalore = new FeatureLayer({
    title: "MEDICALS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/16",
    popupTemplate: {
      title: "MEDICALS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "medi_name",
              label: "Name",
            },
            {
              fieldName: "medi_categ",
              label: "Category",
            },
            {
              fieldName: "Ward_No",
              label: "Ward number",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "medi_addre",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "cross-3",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.medi_name",
        },
      },
    ],
  });
  const parkgarden_mangalore = new FeatureLayer({
    title: "PARK GARDENS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/15",
    popupTemplate: {
      title: "PARK GARDENS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "park_name",
              label: "Name",
            },
            {
              fieldName: "park_type",
              label: "Type",
            },

            {
              fieldName: "ulbname",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "playground",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.park_name",
        },
      },
    ],
  });
  const pathlab_mangalore = new FeatureLayer({
    title: "PATH LABS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/14",
    popupTemplate: {
      title: "PATH LABS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "path_name",
              label: "Name",
            },
            {
              fieldName: "path_locat",
              label: "Location",
            },
            {
              fieldName: "tele_phone",
              label: "Telephone number",
            },
            {
              fieldName: "facility ",
              label: "Facility",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "hospital",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.path_name",
        },
      },
    ],
  });
  const pertrol_mangalore = new FeatureLayer({
    title: "PETROL BUNKS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/13",
    popupTemplate: {
      title: "PETROL BUNKS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "petrol_nam",
              label: "Name",
            },
            {
              fieldName: "fule_cmp",
              label: "Company",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/gas.svg",
        width: "32px",
        height: "32px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.petrol_nam",
        },
      },
    ],
  });
  const post_office = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/12",
    popupTemplate: {
      title: "POST OFFICES",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "post_name",
              label: "Name",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "pincode",
              label: "Address",
            },
            {
              fieldName: "landmark",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    title: "POST OFFICES",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "post-office",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.post_name",
        },
      },
    ],
  });
  // const pumping_station = new FeatureLayer({
  //     url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/11",
  //     popupTemplate: {
  //         title: "AIRPORTS",
  //         content: [
  //             {
  //                 type: "fields",
  //                 fieldInfos: [
  //                     {
  //                         fieldName: "airport_na",
  //                         label: "Name",
  //                     },
  //                     {
  //                         fieldName: "airport_ty",
  //                         label: "Type",
  //                     },
  //                     {
  //                         fieldName: "no_of_term",
  //                         label: "No of Terminals",
  //                     },
  //                     {
  //                         fieldName: "address",
  //                         label: "Address",
  //                     },
  //                 ],
  //             },
  //         ],
  //     },
  //     title: "Pumping stations",
  //     renderer: {
  //         type: "simple", // autocasts as new SimpleRenderer()
  //         symbol: {
  //             type: "picture-marker", // autocasts as new PictureMarkerSymbol()
  //             url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
  //             width: "32px",
  //             height: "32px",
  //         },
  //     },
  //     labelingInfo: [
  //         {
  //             symbol: {
  //                 type: "text",
  //                 color: "white",
  //                 haloColor: "black",
  //                 haloSize: "2px",
  //                 font: {
  //                     // autocast as new Font()
  //                     family: "Arial",
  //                     size: 10,
  //                     weight: "bold",
  //                 },
  //             },
  //             labelPlacement: "above-center",
  //             labelExpressionInfo: {
  //                 expression: "$feature.swr_pmp_nm",
  //             },
  //         },
  //     ],
  // });
  const Railway_mangalore = new FeatureLayer({
    title: "RAILWAY STATIONS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/2",
    popupTemplate: {
      title: "RAILWAY STATIONS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "rail_name",
              label: "Name",
            },
            {
              fieldName: "rail_type",
              label: "Type",
            },
            {
              fieldName: "no_plt",
              label: "No of Platform",
            },
            {
              fieldName: "ulbname",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "train-station",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.rail_name",
        },
      },
    ],
  });
  const Religious_places = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/10",
    popupTemplate: {
      title: "RELIGIOUS PLACES",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "religious_",
              label: "Name",
            },
            {
              fieldName: "category",
              label: "Type",
            },

            {
              fieldName: "ulbname",
              label: "Address",
            },
          ],
        },
      ],
    },
    title: "RELIGIOUS PLACES",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "place-of-worship",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.religious_",
        },
      },
    ],
  });
  const reservoirs = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/9",
    popupTemplate: {
      title: "RESERVOIRS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "reservoir_",
              label: "Name",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "ulbname",
              label: "Address",
            },
          ],
        },
      ],
    },
    title: "RESERVOIRS",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/reservoirs.svg",
        width: "48px",
        height: "48px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.reservoir_",
        },
      },
    ],
  });
  const sewerage_plants = new FeatureLayer({
    title: "SEWERAGE TREATMENT PLANTS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/8",
    popupTemplate: {
      title: "SEWERAGE TREATMENT PLANTS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "s_t_p_name",
              label: "Name",
            },
            {
              fieldName: "capacity",
              label: "Capacity",
            },
            {
              fieldName: "location",
              label: "Locality",
            },
            {
              fieldName: "address",
              label: "Address",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/wast.svg",
        width: "64px",
        height: "64px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.s_t_p_name",
        },
      },
    ],
  });
  const shopping = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/7",
    popupTemplate: {
      title: "SHOPPING COMPLEX",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "shoping_na",
              label: "Name",
            },
            {
              fieldName: "category",
              label: "Type",
            },
            {
              fieldName: "Ward_No",
              label: "Ward Number",
            },
            {
              fieldName: "locality",
              label: "Locality",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    title: "SHOPPING COMPLEX",
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "shopping-center",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.shoping_na",
        },
      },
    ],
  });
  const TELEPHONE_EXCHANGE = new FeatureLayer({
    title: "TELEPHONE EXCHANGE",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/6",
    popupTemplate: {
      title: "TELEPHONE EXCHANGE",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "tele_name",
              label: "Name",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "ulbname",
              label: "City",
            },
          ],
        },
      ],
    },

    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "web-style",
        name: "radio-tower",
        styleName: "Esri2DPointSymbolsStyle",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.tele_name",
        },
      },
    ],
  });
  const electric_substations = new FeatureLayer({
    title: "ELECTRIC SUBSTATIONS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/5",
    popupTemplate: {
      title: "ELECTRIC SUBSTATIONS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "sub_name",
              label: "Name",
            },
            {
              fieldName: "sub_catego",
              label: "Type",
            },
            {
              fieldName: "no_of_term",
              label: "No of Terminals",
            },
            {
              fieldName: "sub_voltag	",
              label: "No of Voltage",
            },
            {
              fieldName: "sub_sectio	",
              label: "Section",
            },
            {
              fieldName: "sub_addres",
              label: "Address",
            },
            {
              fieldName: "pincode",
              label: "Pincode",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/electric.svg",
        width: "48px",
        height: "48px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.sub_name",
        },
      },
    ],
  });
  const waterTreament = new FeatureLayer({
    title: "WATER TREATMENT PLANTS",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/0",
    popupTemplate: {
      title: "WATER TREATMENT PLANTS",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "w_t_p_name",
              label: "Name",
            },
            {
              fieldName: "location",
              label: "Locality",
            },
            {
              fieldName: "address",
              label: "Address",
            },
            {
              fieldName: "ulbname",
              label: "City",
            },
          ],
        },
      ],
    },
    renderer: {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "./img/water.svg",
        width: "32px",
        height: "32px",
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          font: {
            // autocast as new Font()
            family: "Arial",
            size: 10,
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.w_t_p_name",
        },
      },
    ],
  });
  const demographicGroupLayer = new GroupLayer({
    title: "Layer Lists ",
    visible: true,
    visibilityMode: "exclusive",
    // listMode: "hide-children",
    layers: [
      waterTreament,
      TELEPHONE_EXCHANGE,
      social_club,
      shopping,
      sewerage_plants,
      reservoirs,
      Religious_places,
      Railway_mangalore,
      post_office,
      pertrol_mangalore,
      pathlab_mangalore,
      parkgarden_mangalore,
      medicals_mangalore,
      Market_mangalore,
      Hotel_mangalore,
      heritage_mangalore,
      govnmentOffice_mangalore,
      Gasagency_mangalore,
      Entertainment_mangalore,
      electric_substations,
      electionBooth_mangalore,
      education_mangalore,
      Daycarecentre_mangalore,
      Crematorium_mangalore,
      ASI_protected_mangalore,
      Airport_Mangalore,
    ],
  });
  esriConfig.apiKey =
    "AAPK177f329c12de4ae498979677870e0f33o8JOIdohoYtL8QcdoJpH-DjxV06mmNplIZg9i1OGXb2yPc9bbWfZBq4Fvtqg4Y6N";
  const map = new Map({
    basemap: "arcgis-navigation",
    layers: [routeLayer, demographicGroupLayer],
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [74.8720914092376, 12.951287049267767],
    zoom: 14,
  });
  view.ui.remove("attribution");
  AtmBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    console.log(e);
    map.add(AtmCenters);
    AtmCenters.visible = true;
  });
  BankBtn?.addEventListener("click", () => {
    console.log("clicked BankBtn");
    console.log("clicked");
    map.add(banks);
    banks.visible = true;
  });
  RestaurantBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    map.add(Restaurants);
    Restaurants.visible = true;
  });
  BusBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    map.add(Busstops);
    Busstops.visible = true;
  });
  clear?.addEventListener("click", () => {
    AtmCenters.visible = false;
    banks.visible = false;
    Restaurants.visible = false;
    Busstops.visible = false;
  });
  const routeUrl =
    "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
  view.on("double-click", function (event) {
    if (view.graphics.length === 0) {
      addGraphic("origin", event.mapPoint);
    } else if (view.graphics.length === 1) {
      addGraphic("destination", event.mapPoint);

      getRoute(); // Call the route service
    } else {
      view.graphics.removeAll();
      addGraphic("origin", event.mapPoint);
    }
  });

  function addGraphic(type, point) {
    const graphic = new Graphic({
      symbol: {
        type: "simple-marker",
        color: type === "origin" ? "white" : "black",
        size: "8px",
      },
      geometry: point,
    });
    view.graphics.add(graphic);
  }

  function getRoute() {
    const routeParams = new RouteParameters({
      stops: new FeatureSet({
        features: view.graphics.toArray(),
      }),
      returnDirections: true,
    });
    let popupData;
    route
      .solve(routeUrl, routeParams)
      .then(function (data) {
        data.routeResults.forEach(function (result) {
          result.route.symbol = {
            type: "simple-line",
            color: [5, 150, 255],
            width: 3,
          };
          view.graphics.add(result.route);

          console.log(result.route);
          popupData = result.route;
          setTimeout(function () {
            view.graphics.removeAll(result.route);
          }, 10 * 1000);
        });
        console.log(popupData.attributes.Total_Kilometers);

        view.popup.open({
          title: `${popupData.attributes.Name}`,
          content: `<div>
                        <p><b>Distance in Kilometers :</b> ${popupData.attributes.Total_Kilometers.toFixed(
                          3
                        )} Kms</p>
                        <p><b>Distance in Miles :</b> ${popupData.attributes.Total_Miles.toFixed(
                          3
                        )} miles</p>
                      </div>`,
        });

        if (data.routeResults.length > 0) {
          const directions = document.createElement("ol");
          directions.classList =
            "esri-widget esri-widget--panel esri-directions__scroller";
          directions.style.marginTop = "0";
          directions.style.padding = "15px 15px 15px 30px";
          const features = data.routeResults[0].directions.features;

          // Show each direction
          const btn = document.createElement("button");
          features.forEach(function (result, i) {
            const direction = document.createElement("li");

            direction.innerHTML =
              result.attributes.text +
              " (" +
              result.attributes.length.toFixed(2) +
              " miles)";
            directions.appendChild(direction);
          });
          const title = document.createElement("div");
          directions.prepend(title);
          title.innerHTML = `<p style="font-size: 14px; color: black"><b>Route Details</b></p>
                    `;
          directions.appendChild(btn);
          btn.id = "btn";
          btn.innerText = "Close";
          view.ui.empty("bottom-right");
          view.ui.add(directions, "bottom-right");
          setTimeout(() => {
            view.ui.remove(directions, "bottom-right");
          }, 10 * 1000);
          btn.addEventListener("click", () => {
            // window.print();
            view.ui.remove(directions);
          });
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  async function defineActions(event) {
    const item = event.item;
    await item.layer.when();
    // console.log(item);
    if (item.layer.type != "group") {
      item.panel = {
        content: "legend",
        open: true,
      };
    }
    if (item.layer.type == "group") {
      item.actionsSections = [
        [
          {
            title: "Go to full extent",
            className: "esri-icon-zoom-out-fixed",
            id: "full-extent",
          },
          // {
          //   title: "Layer information",
          //   className: "esri-icon-description",
          //   id: "information",
          // },
        ],
        //   [
        //     {
        //       title: "Increase opacity",
        //       className: "esri-icon-up",
        //       id: "increase-opacity",
        //     },
        //     {
        //       title: "Decrease opacity",
        //       className: "esri-icon-down",
        //       id: "decrease-opacity",
        //     },
        //   ],
      ];
    }
  }
  view.when(() => {
    const layerList = new LayerList({
      view: view,
      selectionEnabled: true,
      multipleSelectionEnabled: true,
      listItemCreatedFunction: defineActions,
    });

    layerList.on("trigger-action", (event) => {
      // The layer visible in the view at the time of the trigger.
      //   waterTreament,
      //   TELEPHONE_EXCHANGE,
      //   social_club,
      //   shopping,
      //   sewerage_plants,
      //   reservoirs,
      //   Religious_places,
      //   Railway_mangalore,
      //   post_office,
      //   pertrol_mangalore,
      //   pathlab_mangalore,
      //   parkgarden_mangalore,
      //   medicals_mangalore,
      //   Market_mangalore,
      //   Hotel_mangalore,
      //   heritage_mangalore,
      //   govnmentOffice_mangalore,
      //   Gasagency_mangalore,
      //   Entertainment_mangalore,
      //   electric_substations,
      //   electionBooth_mangalore,
      //   education_mangalore,
      //   Daycarecentre_mangalore,
      //   Crematorium_mangalore,
      //   ASI_protected_mangalore,
      //   Airport_Mangalore,
      let visibleLayer = AtmCenters;
      //   if (AtmCenters.visible) {
      //     console.log("hi");

      //     visibleLayer = AtmCenters;
      //   } else if (banks.visible) {
      //     console.log("hi");

      //     visibleLayer = banks;
      //   } else if (ASI_protected_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer = ASI_protected_mangalore;
      //   } else if (Crematorium_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer = Crematorium_mangalore;
      //   } else if (Daycarecentre_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer = Daycarecentre_mangalore;
      //   } else if (education_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer = education_mangalore;
      //   } else if (electric_substations.visible) {
      //     console.log("hi");

      //     visibleLayer = electric_substations;
      //   } else if (electionBooth_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer = electionBooth_mangalore;
      //   } else if (Entertainment_mangalore.visible) {
      //     console.log("hi");

      //     visibleLayer.Entertainment_mangalore;
      //   } else if (Gasagency_mangalore.visible) {
      //     visibleLayer = Gasagency_mangalore;
      //   } else if (Hotel_mangalore.visible) {
      //     visibleLayer = Hotel_mangalore;
      //   } else if (Market_mangalore.visible) {
      //     visibleLayer = Market_mangalore;
      //   } else if (Railway_mangalore.visible) {
      //     visibleLayer = Railway_mangalore;
      //   } else if (Religious_places.visible) {
      //     visibleLayer = Religious_places;
      //   } else if (Restaurants.visible) {
      //     visibleLayer = Restaurants;
      //   } else if (RouteLayer.visible) {
      //     visibleLayer = RouteLayer;
      //   } else if (TELEPHONE_EXCHANGE.visible) {
      //     visibleLayer = TELEPHONE_EXCHANGE;
      //   } else if (waterTreament.visible) {
      //     visibleLayer = waterTreament;
      //   }
      //   else {
      //     visibleLayer = AtmCenters;
      //   }

      // Capture the action id.

      const id = event.action.id;
      //   console.log(id);

      if (id === "full-extent") {
        // if the full-extent action is triggered then navigate
        // to the full extent of the visible layer

        // if ((id = 1)) {
        view.goTo(visibleLayer.fullExtent).catch((error) => {
          if (error.name != "AbortError") {
            console.error(error);
          }
        });
        // }
      } else if (id === "information") {
        // if the information action is triggered, then
        // open the item details page of the service layer
        window.open(visibleLayer.url);
      }
    });
    const layerExpand = new Expand({
      view: view,
      content: layerList,
      expandTooltip: "LayerList",
      expandIcon: "layer",

      mode: "auto",
      label: "LayerList",
    });

    layerList.watch("activeBasemap", () => {
      const mobileSize =
        view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";
      if (mobileSize) {
        dirExpand.collapse();
      }
    });
    view.ui.add(layerExpand, "top-right");
    view.ui.move({ component: layerExpand, position: "top-left", index: 3 });
  });
  //   view.on("double-click", function (event) {
  //     console.log([event.mapPoint.latitude, event.mapPoint.longitude]);
  //   });
  let homeWidget = new Home({
    view: view,
  });
  const fullscreen = new Fullscreen({
    view: view,
  });
  let directionsWidget = new Directions({
    layer: routeLayer,
    apiKey:
      "AAPK177f329c12de4ae498979677870e0f33o8JOIdohoYtL8QcdoJpH-DjxV06mmNplIZg9i1OGXb2yPc9bbWfZBq4Fvtqg4Y6N",
    view,
    headingLevel: 3,
    visibleElements: {
      saveAsButton: false,
      saveButton: false,
    },
  });
  const dirExpand = new Expand({
    view: view,
    content: directionsWidget,
    expandTooltip: "Direction",
    expandIcon: "tour",
    mode: "auto",
    label: "Direction",
  });
  directionsWidget.watch("activeBasemap", () => {
    const mobileSize =
      view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";
    if (mobileSize) {
      dirExpand.collapse();
    }
  });
  let locateWidget = new Locate({
    view: view, // Attaches the Locate button to the view
  });
  const compass = new Compass({
    view: view,
  });
  const basemapGallery = new BasemapGallery({
    view: view,
    container: document.createElement("div"),
  });
  const bgExpand = new Expand({
    view: view,
    content: basemapGallery,
    expandTooltip: "Basemap Gallery",
  });
  basemapGallery.watch("activeBasemap", () => {
    const mobileSize =
      view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";
    if (mobileSize) {
      bgExpand.collapse();
    }
  });
  const symbol = {
    type: "picture-marker", // autocasts as new PictureMarkerSymbol()
    url: "./img/pin.svg",
    width: "36px",
    height: "36px",
  };
  const theExtend = {
    XMin: 83.2409889743756,
    YMin: 13.9804678032704,
    XMax: 84.2381248397689,
    YMax: 14.8116690563947,
  };
  const searchWidget = new Search({
    view: view,
    geometry: theExtend,
    searchAllEnabled: true,
    sources: [
      {
        layer: Airport_Mangalore,
        searchFields: ["airport_na"],
        displayField: "airport_na",
        exactMatch: false,
        outFields: ["airport_na"],
        name: "AIRPORTS",
        placeholder: "airport",
      },
      {
        layer: AtmCenters,
        searchFields: ["atm_name "],
        displayField: "atm_name",
        exactMatch: false,
        outFields: ["atm_name"],
        name: "ATM CENTERS",
        placeholder: "atm",
      },
      {
        layer: ASI_protected_mangalore,
        searchFields: ["asi_name"],
        displayField: "asi_name",
        exactMatch: false,
        outFields: ["asi_name"],
        name: "ASI PROTECTED MONUMENTS",
        placeholder: "ASI",
      },
      {
        layer: social_club,
        searchFields: ["club_name"],
        displayField: "club_name",
        exactMatch: false,
        outFields: ["club_name"],
        name: "SOCIAL SOCIAL CLUBS",
        placeholder: "clubs",
      },
      {
        layer: Crematorium_mangalore,
        searchFields: ["cre_name"],
        displayField: "cre_name",
        exactMatch: false,
        outFields: ["cre_name"],
        name: "CREMATORIUM",
        placeholder: "Crematorium",
      },
      {
        layer: Daycarecentre_mangalore,
        searchFields: ["day_name"],
        displayField: "day_name",
        exactMatch: false,
        outFields: ["day_name"],
        name: "DAYCARE CENTER",
        placeholder: "daycare",
      },
      {
        layer: Entertainment_mangalore,
        searchFields: ["enter_name"],
        displayField: "enter_name",
        exactMatch: false,
        outFields: ["enter_name"],
        name: "ENTERTAINMENT PLACES",
        placeholder: "entertainment places",
      },
      {
        layer: Gasagency_mangalore,
        searchFields: ["gas_name"],
        displayField: "gas_name",
        exactMatch: false,
        outFields: ["gas_name"],
        name: "GAS AGENCY",
        placeholder: "GAS AGENCY",
      },
      {
        layer: Hotel_mangalore,
        searchFields: ["hotel_name"],
        displayField: "hotel_name",
        exactMatch: false,
        outFields: ["hotel_name"],
        name: "HOTELS",
        placeholder: "hotels",
      },
      {
        layer: Market_mangalore,
        searchFields: ["market_nam"],
        displayField: "market_nam",
        exactMatch: false,
        outFields: ["market_nam"],
        name: "MARKET",
        placeholder: "market",
      },
      {
        layer: Railway_mangalore,
        searchFields: ["rail_name"],
        displayField: "rail_name",
        exactMatch: false,
        outFields: ["rail_name"],
        name: "RAILWAY STATIONS",
        placeholder: "railway",
      },
      {
        layer: Religious_places,
        searchFields: ["religious_"],
        displayField: "religious_",
        exactMatch: false,
        outFields: ["religious_"],
        name: "RELIGIOUS PLACES",
        placeholder: "religious places",
      },
      {
        layer: education_mangalore,
        searchFields: ["sch_name"],
        displayField: "sch_name",
        exactMatch: false,
        outFields: ["sch_name"],
        name: "EDUCATIONAL INSTITUTIONS",
        placeholder: "education",
      },
      {
        layer: electionBooth_mangalore,
        searchFields: ["electora_1"],
        displayField: "electora_1",
        exactMatch: false,
        outFields: ["electora_1,electoral_ "],
        name: "ELECTION BOOTH LOCATION",
        placeholder: "ELECTION",
      },
      {
        layer: govnmentOffice_mangalore,
        searchFields: ["govt_name"],
        displayField: "govt_name",
        exactMatch: false,
        outFields: ["govt_name"],
        name: "GOVERNMENT OFFICES",
        placeholder: "govn",
      },
      {
        layer: heritage_mangalore,
        searchFields: ["heri_name"],
        displayField: "heri_name",
        exactMatch: false,
        outFields: ["heri_name"],
        name: "HERITAGE",
        placeholder: "heritage",
      },
      {
        layer: medicals_mangalore,
        searchFields: ["medi_name"],
        displayField: "medi_name",
        exactMatch: false,
        outFields: ["medi_name"],
        name: "MEDICAL STORE",
        placeholder: "ASI",
      },
      {
        layer: parkgarden_mangalore,
        searchFields: ["park_name"],
        displayField: "park_name",
        exactMatch: false,
        outFields: ["park_name"],
        name: "PARK GARDEN",
        placeholder: "parks",
      },
      {
        layer: pathlab_mangalore,
        searchFields: ["path_name"],
        displayField: "path_name",
        exactMatch: false,
        outFields: ["path_name"],
        name: "PATH LABS",
        placeholder: "ASI",
      },
      {
        layer: pertrol_mangalore,
        searchFields: ["petrol_nam"],
        displayField: "petrol_nam",
        exactMatch: false,
        outFields: ["petrol_nam"],
        name: "PETROL BUNKS",
        placeholder: "petrol",
      },
      {
        layer: post_office,
        searchFields: ["post_name"],
        displayField: "post_name",
        exactMatch: false,
        outFields: ["post_name"],
        name: "POST OFFICES",
        placeholder: "post",
      },

      {
        layer: reservoirs,
        searchFields: ["reservoir_"],
        displayField: "reservoir_",
        exactMatch: false,
        outFields: ["reservoir_"],
        name: "RESERVOIRS OHTS",
        placeholder: "reservoirs",
      },
      {
        layer: sewerage_plants,
        searchFields: ["s_t_p_name"],
        displayField: "s_t_p_name",
        exactMatch: false,
        outFields: ["s_t_p_name"],
        name: "SEWERAGE TREATMENT PLANTS",
        placeholder: "sewerage",
      },
      {
        layer: shopping,
        searchFields: ["shoping_na"],
        displayField: "shoping_na",
        exactMatch: false,
        outFields: ["shoping_na"],
        name: "SHOPPING COMPLEX",
        placeholder: "shopping",
      },
      {
        layer: TELEPHONE_EXCHANGE,
        searchFields: ["tele_name"],
        displayField: "tele_name",
        exactMatch: false,
        outFields: ["tele_name", "address"],
        name: "TELEPHONE_EXCHANGE",
        placeholder: "telephone exchange",
      },
      {
        layer: electric_substations,
        searchFields: ["sub_name"],
        displayField: "sub_name",
        exactMatch: false,
        outFields: ["sub_name"],
        name: "ELECTRIC SUBSTATIONS",
        placeholder: "SUBSTATIONS",
      },
      {
        layer: waterTreament,
        searchFields: ["w_t_p_name"],
        displayField: "w_t_p_name",
        exactMatch: false,
        outFields: ["w_t_p_name"],
        name: "WATER TREATMENT PLANTS",
        placeholder: "WATER",
      },
    ],
  });
  const SearchExpand = new Expand({
    view: view,
    content: searchWidget,
    expandTooltip: "Search",
  });
  searchWidget.watch("activeBasemap", () => {
    const mobileSize =
      view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";
    if (mobileSize) {
      dirExpand.collapse();
    }
  });

  let legend = new Legend({
    view: view,
  });
  const LgExpand = new Expand({
    view: view,
    content: legend,
  });
  legend.watch("activeBasemap", () => {
    const mobileSize =
      view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";

    if (mobileSize) {
      bgExpand.collapse();
    }
  });
  let scaleBar = new ScaleBar({
    view: view,
  });
  // view.ui.add({ component: sideBarBtn, position: 'top-left', index: 0 });
  view.ui.add(
    [SearchExpand, locateWidget, bgExpand, dirExpand, homeWidget, compass],
    "top-left"
  );
  view.ui.add([title, fullscreen, sideBarBtn], "top-right");
  view.ui.add(scaleBar, "bottom-right", { index: 2 });
  view.ui.add(
    ["Atm", "Banks", "Restaurants", "Bustops", "clear"],
    "bottom-left"
  );
});
