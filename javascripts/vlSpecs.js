let popSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "height": 300,
  "width": 500,
  "description": "Population data",
  "data": {
    "url":
      "../data/pop_data.json"
  },
  "mark": "bar",
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
        "title": "Population (in millions)"
      }
    },
    "color": {
      "field": "Population Type",
      "type": "nominal",
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
      field: "year",
      title: "Year"
    },
    {
      field: "population",
      title: "Population"
    },
    {
      field: 'Population Type'
    }
  ]
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
  "mark": "bar",
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
        "title": "# of Suicides"
      }
    },
    "color": {
      "field": "Suicide Type",
      "type": "nominal"
    }
  }
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
      field: "year",
      title: "Year"
    },
    {
      field: 'suicides',
      title: '# of Suicides'
    },
    {
      field: 'Suicide Type',
    }
  ]
};

// from https://bl.ocks.org/peterschretlen/536aacadea83be46c4660fe909b3cacf
let statesSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "description": "A map of the US with suicide data",
  "width": 600,
  "height": -420,
  "data": {
    "url": "../data/rates_by_state.json"
  },
  "transform": [
    {
      "calculate": "1/datum.vet_rate",
      "as": "textColor"
    },
    {
      "calculate": "datum.vet_rate/datum.civ_rate",
      "as": "Relative Severity"
    }
  ],
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
          "field": "Relative Severity",
          "type": "quantitative",
          "scale": {
            "nice": true,
            "zero": false,
            "range": [
              "#ffffff",
              "#870b00"
            ]
          },
          "legend": true
        }
      }
    },
    {
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
          "field": "textColor",
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


let stateOptions = {
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
      field: 'state_full',
      title: 'State'
    },
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

