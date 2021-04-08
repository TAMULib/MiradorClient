import { miradorImageToolsPlugin } from 'mirador-image-tools';
import Mirador from 'mirador/dist/es/src/index';
import miradorAnnotationPlugins from 'tamu-mirador-annotations';
import LocalStorageAdapter from 'tamu-mirador-annotations/lib/LocalStorageAdapter';
import miradorDownloadPlugins from 'tamu-mirador-dl-plugin';

const config = {
  id: 'viewer',
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`)
  },
  windows: [{
    defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
    imageToolsEnabled: true,
    imageToolsOpen: true,
    manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      }
    }
  }
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  ...miradorAnnotationPlugins,
  ...miradorDownloadPlugins
]);
