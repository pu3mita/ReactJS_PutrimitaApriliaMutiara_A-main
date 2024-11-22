import {useState, useEffect} from 'react'
import getAllProducts from '../../services/getAllProducts'
import CardList from '../../components/CardList/CardList'
import Navbar from '../../components/Navbar/Navbar'
import RadioButton from '../../components/RadioButton/RadioButton'

export default function ProductPage() {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filterCategory, setFilterCategory] = useState("all")

  useEffect(() => {
    let allProducts = getAllProducts()
    allProducts = allProducts.length > 0 ? allProducts : []
    // allProducts = []
    setProducts(allProducts)
    setFilteredProducts(allProducts)
  }, [])

  const RadioButtonOpts = [
    
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Elektronik',
      value: 'elektronik'
    },
    {
      label: 'Sport',
      value: 'sport'
    },
    {
      label: 'T-shirt',
      value: 'tshirt'
    },
  ]

  useEffect(() => {
    let filtered = products;

    if (filterCategory !== "all") {
      filtered = products.filter((product) =>
        product.category.toLowerCase().includes(filterCategory.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [filterCategory, products]);

  const productSearched = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleFilter = (category) => {
    setFilterCategory(category);
  };


  return (
    <div className='min-h-screen pb-10'>
      <Navbar onInput={(e) => setKeyword(e.target.value)}/>
      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
          <h3 className='font-medium'>Filter</h3>
          <div className='flex gap-2 flex-wrap'>
             <RadioButton onSelect={(val) => handleFilter(val)} options={RadioButtonOpts} defaultValue={'all'}/>
          </div>
      </div>
     <section className='container px-24 py-4'>
      <main className='grid grid-cols-4 gap-4'>
          <CardList products={productSearched}/>
      </main>

    </section>
    </div>
   
  )
}
