import React from 'react';
import { PaperData } from './types';

export const PAPER_DATA: PaperData = {
  title: "Modelos Generativos en Búsqueda de Arquitectura Neuronal",
  subtitle: "Un Estudio Comparativo sobre la Optimización de la Topología de Red para Eficiencia",
  authors: ["Dra. Elena Vance", "James Wu", "Prof. A. K. Smith"],
  publicationDate: "12 de Oct, 2023",
  journal: "Nature Machine Intelligence",
  stats: {
    citations: 45,
    datasetPoints: "10k+",
    accuracy: "98.2%"
  },
  abstract: `Presentamos un enfoque novedoso para optimizar redes neuronales utilizando modelos generativos. Aprovechando conjuntos de datos a gran escala, demostramos que nuestro método reduce significativamente el tiempo de búsqueda mientras mantiene una alta precisión. El panorama actual de la Búsqueda de Arquitectura Neuronal (NAS) está dominado por el aprendizaje por refuerzo y los algoritmos evolutivos, que son computacionalmente costosos. Nuestro marco propuesto de NAS Generativo (GenNAS) introduce una técnica de optimización del espacio latente que permite una interpolación suave entre arquitecturas candidatas.`,
  sections: [
    {
      id: "introduction",
      title: "Introducción",
      content: `La búsqueda de arquitecturas de redes neuronales óptimas ha sido tradicionalmente un proceso laborioso, dependiendo en gran medida de la intuición humana y del ensayo y error. La Búsqueda de Arquitectura Neuronal (NAS) surgió como una solución prometedora, automatizando el proceso de diseño. Sin embargo, los métodos NAS convencionales, como los basados en Aprendizaje por Refuerzo (RL) o Algoritmos Evolutivos (EA), a menudo sufren de costos computacionales prohibitivos, requiriendo miles de horas de GPU para encontrar una sola arquitectura de alto rendimiento.

      En este artículo, proponemos un cambio de paradigma hacia el NAS Generativo (GenNAS). A diferencia de los métodos basados en búsqueda que atraviesan un espacio de búsqueda discreto, GenNAS aprende una representación latente continua de topologías de red. Esto nos permite aplicar métodos de optimización basados en gradientes en el espacio latente, acelerando drásticamente el proceso de descubrimiento.`
    },
    {
      id: "methodology",
      title: "Metodología",
      content: `Nuestro marco consta de dos componentes principales: un Autoencoder Variacional (VAE) para la incrustación de arquitectura y un predictor de rendimiento entrenado en el espacio latente.
      
      Primero, mapeamos la estructura gráfica discreta de las redes neuronales a un espacio vectorial continuo. Utilizamos un codificador basado en Redes Neuronales Gráficas (GNN) para capturar propiedades topológicas. El decodificador reconstruye la matriz de adyacencia y la lista de operaciones desde el vector latente.
      
      Segundo, entrenamos un modelo sustituto para predecir la precisión de una arquitectura dada su representación latente. Este predictor guía el proceso de optimización, dirigiendo la búsqueda hacia regiones de alto rendimiento en la variedad latente.`
    },
    {
      id: "results",
      title: "Resultados",
      content: `Evaluamos GenNAS en los benchmarks CIFAR-10 e ImageNet. Nuestro método logró una precisión top-1 del 98.2% en CIFAR-10, comparable a los modelos de última generación diseñados manualmente, mientras redujo el tiempo de búsqueda en un 40% en comparación con los métodos evolutivos estándar.
      
      Además, las arquitecturas descubiertas por GenNAS exhiben una regularidad sorprendente, lo que sugiere que el modelo generativo captura motivos de diseño subyacentes que contribuyen a la generalización. La interpolación suave en el espacio latente también permite un control detallado sobre el equilibrio entre el tamaño del modelo y la precisión.`
    },
    {
      id: "discussion",
      title: "Discusión",
      content: `Las ganancias de eficiencia observadas en GenNAS pueden atribuirse a la continuidad del espacio de búsqueda. Los métodos NAS tradicionales navegan por un paisaje irregular y discreto donde pequeños cambios pueden llevar a caídas de rendimiento impredecibles. En contraste, nuestra optimización del espacio latente proporciona un gradiente suave, permitiendo un recorrido más eficiente.
      
      Sin embargo, quedan desafíos. La validez de las arquitecturas generadas no está garantizada, requiriendo un mecanismo de verificación de restricciones durante la fase de decodificación. El trabajo futuro se centrará en incorporar restricciones de validez directamente en la función de pérdida del modelo generativo.`
    },
    {
      id: "conclusion",
      title: "Conclusión",
      content: `Los modelos generativos ofrecen una nueva y potente dirección para la Búsqueda de Arquitectura Neuronal. Al transformar el problema de optimización combinatoria discreta en uno continuo, podemos aprovechar técnicas de optimización eficientes para descubrir topologías de red superiores. GenNAS representa un paso significativo hacia la democratización de NAS, haciéndolo accesible a investigadores con recursos computacionales limitados.`
    }
  ]
};

export const MOCK_CHART_DATA = [
  { name: 'Gen 1', accuracy: 85, latency: 120 },
  { name: 'Gen 5', accuracy: 88, latency: 110 },
  { name: 'Gen 10', accuracy: 92, latency: 95 },
  { name: 'Gen 15', accuracy: 94, latency: 80 },
  { name: 'Gen 20', accuracy: 96, latency: 75 },
  { name: 'Gen 25', accuracy: 97.5, latency: 60 },
  { name: 'Gen 30', accuracy: 98.2, latency: 55 },
];

export const SCATTER_DATA = [
    { x: 10, y: 30, z: 200 },
    { x: 30, y: 200, z: 260 },
    { x: 45, y: 100, z: 400 },
    { x: 50, y: 400, z: 500 },
    { x: 70, y: 150, z: 100 },
    { x: 100, y: 250, z: 280 },
    { x: 120, y: 100, z: 300 },
    { x: 140, y: 300, z: 500 },
    { x: 160, y: 50, z: 100 },
    { x: 170, y: 450, z: 400 },
];