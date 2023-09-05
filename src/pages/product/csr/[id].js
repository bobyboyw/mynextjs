/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function ProductDetail(){
    const [data, setData] = useState()

    const router = useRouter()
    const fetchDataProduct = async (id) => {
        // const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`)
        const product = await response.json()

        setData(product)
    }

    useEffect(() => {
        if(router.query.id) {
            fetchDataProduct(router.query.id)
        }    
    }, [router])

    if(!data) return 'Loading Detail...'
    return(
        <section>
            <h1>{data.title}</h1>
            <h4>{data.price}</h4>
            <div><img src={data.image} alt={data.title} width={200} /></div>
            <p>{data.description}</p>
        </section>
    )
}