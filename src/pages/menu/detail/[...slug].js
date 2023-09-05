import { useRouter } from "next/router"
import { useEffect } from "react";


export default function DetailMenuSlug(){
    const router = useRouter()

    // const {id} = router.query
    // console.log('Isi Router ', router);
    

    useEffect(() => {
        // if(!id) return
        // console.log('id === ', id);
        
        if(!router.query.slug) return

        const [slugName, idMenu] = router.query.slug
        console.log('slugName, idMenu', slugName, idMenu);
        },[router.query]
    )


    return(
        <section>
            Ini Detail Menu
        </section>
    )
}