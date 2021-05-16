var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-1",
      "name": "Panorama 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.5137146647955877,
        "pitch": 0.7123925736783683,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-2",
      "name": "Panorama 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.953210183560639,
        "pitch": 0.6319049501754996,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.7616961352229765,
          "pitch": 0.3510294963956486,
          "rotation": 0,
          "target": "0-panorama-1"
        },
        {
          "yaw": -2.4815730849826156,
          "pitch": 0.8013258815558224,
          "rotation": 0,
          "target": "2-panorama-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama-3",
      "name": "Panorama 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.903455902764792,
        "pitch": 0.8453556726776128,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.149416216840569,
          "pitch": 0.5600267640855829,
          "rotation": 0,
          "target": "0-panorama-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bulabod",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
