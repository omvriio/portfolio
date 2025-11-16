# 3D Models

This directory contains 3D models (GLTF/GLB format) used in the portfolio.

## Model Guidelines

### Format
- **Preferred**: GLB (binary GLTF) for better compression
- Alternative: GLTF with separate bin/texture files

### Optimization
- **Target size**: < 500KB for main scene models
- **Target size**: < 100KB for UI elements
- Use Draco compression when possible
- Optimize polygon count (aim for < 50k polygons for main objects)

### Tools
- [gltf.report](https://gltf.report/) - Analyze and optimize GLTF files
- [Blender](https://www.blender.org/) - 3D modeling and optimization
- [glTF-Transform](https://gltf-transform.donmccurdy.com/) - Command-line GLTF processing

## Recommended Models

1. **Central Eye** (`eye.glb`)
   - Main perception sensor visualization
   - Target: < 300KB

2. **Neural Network** (`neural-net.glb`)
   - Background neural network visualization
   - Target: < 200KB

3. **UI Elements** (various)
   - Small decorative 3D elements
   - Target: < 50KB each

## Usage in Code

```jsx
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/eye.glb', '/draco-gltf/')
  return <primitive object={scene} />
}
```

## Resources

Free 3D models:
- [Poly Haven](https://polyhaven.com/)
- [Sketchfab](https://sketchfab.com/feed)
- [Three.js Examples](https://threejs.org/examples/)
