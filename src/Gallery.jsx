import { useGlobalContext } from "./Context"
import { QueryClient, useQuery, } from '@tanstack/react-query'
import axios from 'axios'

const Gallery = () => {

    const { searchData } = useGlobalContext()
    console.log(searchData);

    const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
    

    const response = useQuery({
        queryKey: ['image', searchData],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchData}`)
            return result
        }
    })

    if (response.isError) {
        return <section className='image-container'>
            <h4>There was an error...</h4>
        </section>
    }
    if (response.isLoading) {
        return <section className='image-container'>
            <h4>Loading...</h4>
        </section>
    }
    if (response.data.data.results.length === 0) {
        return <section>
            <h4>No results found...</h4>
        </section>
    }

    const results = response.data.data.results


    return (
        <section className='image-container'>
            {results.map((item) => {
                const url = item?.urls?.regular;

                return < img src={url} alt={item.alt_description}
                    key={item.id} className="img" />
            })}
        </section>
    )
}
export default Gallery