/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export default function ProductDetail({data}){
    // console.log(data);
    return(
        <section>

            <div className="flex gap-10">
                <div><img src={data.image} alt={data.title} width={200} /></div>
                <div className="pt-10 ml-5">
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <h4 className="font-bold">{data.category}</h4>
                    <h4 className="text-green-600 font-bold">{data.price}</h4>
                    <p className="py-5">{data.description}</p>

                    <button className="font-bold bg-amber-300 p-3 mt-5 hover:bg-blue-200">Add to Cart</button>
                </div>
            </div>


            
        </section>
    )
}

export async function getServerSideProps(context){
    // const {locale, query:{id}} = context
    const id = context.query.id
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`)
    const data = await response.json()

    return{
        // props: {data: data}
        props: {data}
    }
}