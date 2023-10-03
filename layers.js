export const Airport_Mangalore = new FeatureLayer({
    title: "Airports",
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
        title: "Airports",
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
                        format: {
                            digitSeparator: true,
                            places: 0,
                        },
                    },
                    {
                        fieldName: "no_of_term",
                        label: "No of Terminals",
                        format: {
                            digitSeparator: true,
                            places: 0,
                        },
                    },
                    {
                        fieldName: "address",
                        label: "Address",
                        format: {
                            digitSeparator: true,
                            places: 0,
                        },
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
export const ASI_protected_mangalore = new FeatureLayer({
    title: "ASI Protectected Monuments",
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
        title: "ASI Protectected Monuments",
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
                        format: {
                            digitSeparator: true,
                            places: 0,
                        },
                    },
                    {
                        fieldName: "ulbname",
                        label: "City",
                        format: {
                            digitSeparator: true,
                            places: 0,
                        },
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
export const CLUB = new FeatureLayer({
    title: "Clubs",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/26",
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
export const Crematorium_mangalore = new FeatureLayer({
    title: "Crematorium",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/25",
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
export const Daycarecentre_mangalore = new FeatureLayer({
    title: "Daycare Center",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/24",
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
export const education_mangalore = new FeatureLayer({
    title: "Educational Institution",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/23",
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
export const electionBooth_mangalore = new FeatureLayer({
    title: "Election Booth",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/22",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "web-style",
            name: "tear-pin-1",
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
export const Entertainment_mangalore = new FeatureLayer({
    title: "Entertainment Places",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/21",
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
export const Gasagency_mangalore = new FeatureLayer({
    title: "Gas Agency",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/20",
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
export const govnmentOffice_mangalore = new FeatureLayer({
    title: "Geovernment offices",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/19",
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
export const heritage_mangalore = new FeatureLayer({
    title: "Heritage",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/18",
    renderer: {
        type: "simple", // aut ocasts as new SimpleRenderer()
        symbol: {
            type: "web-style",
            name: "landmark",
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
                expression: "$feature.heri_name",
            },
        },
    ],
});
export const Hotel_mangalore = new FeatureLayer({
    title: "Hotels",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/3",
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
export const Market_mangalore = new FeatureLayer({
    title: "Markets",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/17",
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
export const medicals_mangalore = new FeatureLayer({
    title: "Medicals",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/16",
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
export const parkgarden_mangalore = new FeatureLayer({
    title: "Park/Gardens",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/15",
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
export const pathlab_mangalore = new FeatureLayer({
    title: "Pathlabs",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/14",
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
export const pertrol_mangalore = new FeatureLayer({
    title: "Petrols",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/13",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "web-style",
            name: "push-pin-1",
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
                expression: "$feature.petrol_nam",
            },
        },
    ],
});
export const post_office = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/12",
    title: "Post Offices",
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
export const pumping_station = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/11",
    title: "Pumping stations",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
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
                expression: "$feature.swr_pmp_nm",
            },
        },
    ],
});
export const Railway_mangalore = new FeatureLayer({
    title: "Railway Stations",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/2",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "web-style",
            name: "push-pin-1",
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
export const Religious_places = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/10",
    title: "Religious places",
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
export const reservoirs = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/9",
    title: "Reservoirs",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "https://img.icons8.com/color/48/null/dam.png",
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
                expression: "$feature.reservoir_",
            },
        },
    ],
});
export const sewerage_plants = new FeatureLayer({
    title: "Sewerage Plants",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/8",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "https://img.icons8.com/color/48/null/sewage.png",
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
                expression: "$feature.s_t_p_name",
            },
        },
    ],
});
export const shopping = new FeatureLayer({
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/7",
    title: "Shopping Complex",
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
export const sportsand_recreational = new FeatureLayer({
    title: "Sports and Recreationals",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/6",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "web-style",
            name: "theatre",
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
export const substations = new FeatureLayer({
    title: "Electric Substations",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/5",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "https://img.icons8.com/external-outline-juicy-fish/60/null/external-electricity-vehicle-mechanics-outline-outline-juicy-fish.png",
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
                expression: "$feature.sub_name",
            },
        },
    ],
});
export const waterTreament = new FeatureLayer({
    title: "Water Treatment Plants",
    url: "https://services3.arcgis.com/BwZSbW2kx9yDHDBi/arcgis/rest/services/Mangalore_Feb6/FeatureServer/0",
    renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: "https://img.icons8.com/color/48/null/water-treatment-plant.png",
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