// app.js

// Create the <model-viewer> element
const modelViewer = document.createElement('model-viewer');

modelViewer.setAttribute('src', 'models/asus_tuf_dash_f15_laptop.glb');
modelViewer.setAttribute('alt', 'ASUS TUF Dash F15 Laptop');
modelViewer.setAttribute('auto-rotate', '');
modelViewer.setAttribute('camera-controls', '');
modelViewer.setAttribute('shadow-intensity', '1');
modelViewer.setAttribute('ar', '');
modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
modelViewer.setAttribute('exposure', '1');

// Apply styles
modelViewer.style.width = '80%';
modelViewer.style.height = '600px';
modelViewer.style.margin = '0 auto';
modelViewer.style.display = 'block';

// Append to the #app div
document.getElementById('app').appendChild(modelViewer);