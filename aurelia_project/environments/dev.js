export default {
  debug: true,
  testing: true,
  dataUrl: 'https://data-dev.petabencana.id',
  baseUrl: 'https://rem-dev.petabencana.id',
  AUTH0_CLIENT_ID: 'hla07C0C009nXLXhov2Vaqxx7Nj4PIpz',
  AUTH0_DOMAIN: 'petabencana-dev.au.auth0.com',
  floodStates: [
    {
      level: null,
      severity: 'Tidak banjir',
      levelDescription: 'NO FLOODING'
    },
    {
      level: 1,
      severity: 'Hati-hati!',
      levelDescription: 'AN UNKNOWN LEVEL OF FLOODING - USE CAUTION -'
    },
    {
      level: 2,
      severity: '10 cm - 70 cm',
      levelDescription: 'FLOODING OF BETWEEN 10 and 70 CENTIMETERS'
    },
    {
      level: 3,
      severity: '71 cm - 150 cm',
      levelDescription: 'FLOODING OF BETWEEN 71 and 150 CENTIMETERS'
    },
    {
      level: 4,
      severity: '> 150 cm',
      levelDescription: 'FLOODING OF OVER 150 CENTIMETERS'
    }
  ],
  mapConfig: {
    region: 'jbd',
    reports_refresh: 60000, // Reports will refresh every 60 seconds
    gauges_refresh: 900000, // Gauges will refresh every 15 minutes
    bounds: {
      sw: [-6.733, 106.480],
      ne: [-5.880, 107.175]
    },
    basemaps: [
      {
        name: 'Mapbox',
        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}',
        default: true,
        options: {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OSM</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
          detectRetina: true,
          minZoom: 0,
          maxZoom: 18,
          ext: 'png'
        }
      }
    ],
    infrastructure: [
      {
        type: 'floodgates',
        name: 'Pintu air',
        default: true
      },
      {
        type: 'pumps',
        name: 'Pompa',
        default: false
      },
      {
        type: 'waterways',
        name: 'Jaringan kanal',
        default: false
      }
    ],
  }
};
