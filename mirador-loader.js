function isEmpty(obj) {
  var empty = true;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      empty = false;
    }
  }
  return empty && JSON.stringify(obj) === JSON.stringify({});
}

$(function () {

  var urlParams = new URLSearchParams(window.location.search);

  var windowObjects = [];

  var mainMenuSettings = {};

  var queryData = {};

  var queryWindowObject = {};

  if (urlParams.has('manifest')) {
    var manifest = urlParams.get('manifest');
    console.log('loading', manifest);
    queryData.manifestUri = manifest;
    queryData.location = "Texas A&M University";
    queryWindowObject.loadedManifest = manifest;
  }

  if (urlParams.has('canvas')) {
    var canvas = urlParams.get('canvas').split(' ').join('%20');
    console.log('viewing', canvas);
    queryWindowObject.canvasID = canvas;
  }

  if (urlParams.has('view')) {
    var view = urlParams.get('view');
    if (view === 'ImageView') {
      mainMenuSettings.show = false;
      queryWindowObject.viewType = "ImageView";
      queryWindowObject.displayLayout = false;
      queryWindowObject.bottomPanel = false;
      queryWindowObject.bottomPanelAvailable = false;
      queryWindowObject.bottomPanelVisible = false;
      queryWindowObject.sidePanel = false;
      queryWindowObject.annotationLayer = false;
    }
  }

  if (!isEmpty(queryData)) {
    miradorConfig.data.push(queryData);
  }

  if (!isEmpty(queryWindowObject)) {
    windowObjects.push(queryWindowObject);
  }

  if(!isEmpty(windowObjects)) {
    miradorConfig.windowObjects = windowObjects;
  }

  if(!isEmpty(mainMenuSettings)) {
    miradorConfig.mainMenuSettings = mainMenuSettings;
  }

  myMiradorInstance = Mirador(miradorConfig);

});

