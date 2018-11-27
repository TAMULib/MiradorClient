var miradorConfig = {
  id: "viewer",
  layout: "1x1",
  buildPath: "mirador/",
  data: data,
  annotationEndpoint: {
    name: 'Simple Annotation Store Endpoint',
    module: 'SimpleASEndpoint',
    options: {
      url: 'https://labs.library.tamu.edu/simpleAnnotationStore/annotation'
    }
  },
  windowSettings: {
    canvasControls: {
      imageManipulation: {
        manipulationLayer: true,
        controls: {
          mirror: true
        }
      }
    }
  },
  sidePanelOptions: {
    layersTabAvailable: true,
    tocTabAvailable: true,
    searchTabAvailable: true
  },
  manifestsPanel: {
    module: "CollectionTreeManifestsPanel",
  }
}