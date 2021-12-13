# Painters' Algorithm

El algoritmo del pintor, también algoritmo de ordenación de la profundidad o relleno prioritario, es un algoritmo para la determinación de la superficie visible en gráficos 3D,que funciona polígono a polígono para la eliminación de superficies ocultas al punto de vista del observador. 

El algoritmo del pintor crea imágenes clasificando los polígonos dentro de la imagen por su profundidad y colocando cada polígono en orden desde el objeto más lejano al más cercano.

### Pseudocódigo

```
sort polygons by depth 
    for each polygon p:
        for each pixel that p covers:
            paint p.color on pixel
```

Primero se ordenan los polígonos por profundidad. Luego para cada pixel cubierto por el polígono, se pinta el color del polígono en el pixel.