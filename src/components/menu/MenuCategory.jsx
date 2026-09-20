import React, { useEffect, useState } from 'react'
import Card from './Card'
import CardSkeleton from '../skeleton/CardSkeleton'

const MenuCategory = ({ id, title, getData }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData().then(res => setProducts(res))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section id={id} className="scroll-mt-60">
            <h2 style={{ fontFamily: "Titan" }} className="text-[26px] md:text-4xl uppercase">{title}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-10 my-6">
                {
                    loading ? (
                        [1,2,3].map(item => <CardSkeleton key={item} />)
                    ) : (
                        products.map(item => (<Card key={item.id} item={item} />))
                    )
                }
            </div>
        </section>
    )
}

export default MenuCategory