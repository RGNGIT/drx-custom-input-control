module.exports = {
  vendorName: 'Directum',
  componentName: 'ReactExample',
  componentVersion: '1.0',
  // Описание контролов, которые есть в компоненте. Реализация контролов находится в папке ./src/controls.
  controls: [
    {
      name: 'BaseInputControl',
      loaders: [
        {
          name: 'base-input-loader',
          scope: 'Card'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'Custom input' },
        { locale: 'ru', name: 'Кастомный контрол ввода' },
      ]
    }
  ]
};
