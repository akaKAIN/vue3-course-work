const ProductPropsMixin = {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    validator: (value: number) => value > 0
  },
  count: {
    type: Number,
    default: 0
  },
  img: {
    type: String
  }
}

export default ProductPropsMixin
