/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Home() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // console.log('ENV : ', process.env.NEXT_PUBLIC_HOST_NAME);

  const fetchProduct = async () => {
    // setIsLoading(true)

    // const response = await fetch(process.env.NEXT_PUBLIC_HOST_API + '/products')
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products`)
    const data = await response.json()

    // console.log('data : ',data);
    setProduct(data)
    // setIsLoading(false)
  }

  const router = useRouter()
  const { locale } = router
  const onRedirect = () => {
    router.push('/about')
  }

  useEffect(() => {
    fetchProduct()
    }, [])

  // if(isLoading) return 'Loading Data...'

  return (
    <>
      {/* <h1>{ locale === 'id-ID' ? 'NextJS Ku' : 'My NextJS'}</h1> */}

      {/* <button onClick={onRedirect}>Menuju About</button> */}

      {/* <ul>
        <li>
          <Link href="/menu/detail/12">Pizza</Link>
        </li>
        <li>
          <Link href="/menu/detail/pizza-tuna/10">Pizza Tuna</Link>
        </li>
      </ul> */}

      <section>
      {product.length > 0 ? (
        product.map((value) => (
          <Link key={value.id} href={`/product/${value.id}`}  className="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={value.image} alt={value.title} />
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
              </div>
          </Link>
          ))
      ) : (
        [0,1,2,3,4].map((index) => (
          <div key={index} role="status" className="mb-5 p-3 bg-white border border-gray-200 rounded-lg shadow space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-64 bg-gray-300 rounded md:w-64 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))  
      )}

      


      
      


      </section>
    </>
  )
}
