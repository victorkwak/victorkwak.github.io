let popSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "height": 300,
  "width": 500,
  "description": "Population data",
  "data": {
    "url":
      "../data/pop_data.json"
  },
  "mark": "area",
  "encoding": {
    "x": {
      "field": "year",
      "type": "nominal",
      "axis": {
        "title": "Year"
      }
    },
    "y": {
      "aggregate": "sum",
      "field": "population",
      "type": "quantitative",
      "axis": {
        "title": "Population (Millions)"
      },
    },
    "color": {
      "field": "Population Type",
      "type": "nominal",
    }
  }
};

let suicideSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "height": 300,
  "width": 500,
  "description": "Population data",
  "data": {
    "url":
      "../data/suicides_data.json"
  },
  "mark": "area",
  "encoding": {
    "x": {
      "field": "year",
      "type": "nominal",
      "axis": {
        "title": "Year"
      }
    },
    "y": {
      "aggregate": "sum",
      "field": "suicides",
      "type": "quantitative",
      "axis": {
        "title": "# of Suicides (Thousands)"
      }
    },
    "color": {
      "field": "Suicide Type",
      "type": "nominal"
    }
  }
};

// from https://bl.ocks.org/peterschretlen/536aacadea83be46c4660fe909b3cacf
let statesSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "description": "A simple bar chart with embedded data.",
  "width": 600,
  "height": -420,
  "data": {
    "url": "../data/rates_by_state.json"
  },
  "layer": [
    {
      "mark": "rect",
      "encoding": {
        "x": {
          "field": "col",
          "type": "ordinal",
          "axis": false
        },
        "y": {
          "field": "row",
          "type": "ordinal",
          "axis": false
        },
        "color": {
          "aggregate": "sum",
          "field": "vet_rate",
          "type": "quantitative",
          "scale": {
            "nice": true,
            "zero": true,
            "range": [
              "#eee",
              "#870b00"
            ]
          },
          "legend": false
        }
      }
    },
    {
      "transform": [
        {
          "calculate": "round(1-datum.vet_rate)",
          "as": "textcolor"
        }
      ],
      "mark": "text",
      "encoding": {
        "x": {
          "field": "col",
          "type": "ordinal",
          "axis": false
        },
        "y": {
          "field": "row",
          "type": "ordinal",
          "axis": false
        },
        "color": {
          "field": "textcolor",
          "type": "quantitative",
          "legend": false
        },
        "text": {
          "field": "state",
          "type": "nominal"
        }
      }
    }
  ],
  "config": {
    "overlay": {
      "rect": true
    },
    "text": {
      "baseline": "middle"
    }
  }
};

let popOptions= {
  mode: "vega-lite",
  actions: false,
  padding: {
    "top": 300,
    "bottom": 300,
    "left": 0,
    "right": 50
  },
  showAllFields : false,
  fields : [

    {
      field: 'population',
      title: 'Population (in Millions)',
    },
    {
      field: 'Population Type'
    }
  ]
};

let rateOptions= {
  mode: "vega-lite",
  actions: false,
  padding: {
    "top": 300,
    "bottom": 300,
    "left": 0,
    "right": 50
  },
  showAllFields : false,
  fields : [
    {
      field: 'suicides',
      title: '# of Suicides (in Thousands)'
    },
    {
      field: 'Suicide Type',
    }
  ]
};

let opt2 = {
  actions: false,
  padding: {
    "top": 300,
    "bottom": 300,
    "left": 0,
    "right": 50
  },
  showAllFields : false,
  fields : [
    {
      field: 'vet_rate',
      title: 'Veteran Rate'
    },
    {
      field: 'civ_rate',
      title: 'Civilian Rate'
    }
  ]
};
