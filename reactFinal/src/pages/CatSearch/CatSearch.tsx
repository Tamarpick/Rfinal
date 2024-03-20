import { useEffect, useState } from 'react';
import './catSearch.css'
import { Options, getCatBreeds, getCatData } from '../../api/apiCalls';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Interface to represent the filter optins for the page
interface FilterOptions {
    hairType: number,
    allergy_safe: boolean,
    childFriendly: number
}


// Initial state for the filter
const intialFilterOptions: FilterOptions = {
    hairType: 2,
    allergy_safe: false,
    childFriendly: 0
}

// Fuctional component for the cat search page
export default function CatSearch() {
    // useNavigate hook navigate to cat profile
    const navigate = useNavigate();
    // store cat data
    const [cats, setCats] = useState<object[]>([]);
    // store filter options for api calls
    const [searchOptions, setSearchOptions] = useState<Options>({
        limit: 100,
        breed_ids: [],
        page: 0
    });
    // store breed data
    const [catBreeds, setCatBreeds] = useState<Map<string, any>>(new Map());
    // store filter options for filtering cat data
    const [filter, setFilter] = useState<FilterOptions>(intialFilterOptions);

    // async funciton to fetch the cat API data
    const fetchCats = async () => {
        const res = await getCatData(searchOptions)
        if (res.success) setCats(res.data)
        else console.log("ERROR", res.error)

    }

    // async function to fetch the breed API data
    const fetchBreeds = async () => {
        const res = await getCatBreeds()
        if (res.success) setCatBreeds(res.data)
        else console.log("ERROR", res.error)
    }

    // on load fetch the data
    useEffect(() => {
        fetchBreeds()
        fetchCats()
    }, [searchOptions])


    useEffect(() => {
        fetchCats()
    }, [searchOptions])


    const mainContainerClasses = `
        h-100
        mainContainer
    `

    // function to remove a tag from the filter
    const removeTag = (tag) => {
        setSearchOptions({ ...searchOptions, breed_ids: searchOptions.breed_ids.filter(breed => breed !== tag) })
    }

    // function to reset the filter
    const resetFilter = () => {
        setSearchOptions({ ...searchOptions, breed_ids: [] })
        setFilter(intialFilterOptions)
    }

    // function to render the action panel
    const actionPanel = () => {
        return (
            <div className="actionPanel">
                <div className='w-100 filterPanel'>
                    <h2>Filter cats:</h2>
                    <div className='breedSelect'>
                        <h3>Choose breeds:</h3>
                        <select className='form-select' onChange={addBreedToFilter}>
                            {
                                Array.from(catBreeds.entries()).map(([id, breed], index) => (
                                    <option key={index} value={breed.id}>{breed.name}</option>
                                ))
                            }
                        </select>
                        <h3>Hypoallergenic ?</h3>
                        <input className="form-check-input" type="checkbox" onChange={(event) => setFilter({ ...filter, allergy_safe: event.target.checked })} />
                        <h3>Hairless ?</h3>
                        <input className="form-check-input" type="checkbox" onChange={() => setFilter({ ...filter, hairType: filter.hairType === 2 ? 1 : 2 })} />
                        <h3>Child Friendly ?</h3>
                        <input type='range' defaultValue={0} min={0} max={4} onChange={(event) => setFilter({ ...filter, childFriendly: parseInt(event.target.value) })} />
                        <button onClick={resetFilter} className='btn btn-primary'>Reset filter</button>
                    </div>

                </div>
                <div className=' d-flex px-3 breedChoice'>
                    {showBreedTags()}
                </div>
            </div>
        )
    }

    // function to render the breed tags
    const showBreedTags = () => {
        if (!searchOptions.breed_ids || searchOptions.breed_ids.length === 0) return <></>
        return (
            <>
                {
                    searchOptions.breed_ids.map((breed: string, index: number) => {
                        return <div className='breedTag' key={index}>
                            {catBreeds.get(breed).name}
                            <button onClick={() => removeTag(breed)} className='breedTagBtn'>X</button>
                        </div>
                    })
                }
            </>
        )

    }

    // function to add a breed to the filter
    const addBreedToFilter = (e) => {
        if (searchOptions.breed_ids.includes(e.target.value)) return
        setSearchOptions((searchOptions: Options) => ({
            breed_ids: [...searchOptions.breed_ids, e.target.value]
        }))
    }

    // function to render the cat cards
    const showCats = () => {

        const carGridClasses = `
            carGrid
        `

        const loadingClasses = `
            d-flex 
            flex-column
            w-100 
            h-100 
            justify-content-center 
            align-items-center 
            text-dark
            sky
        `

        if (cats.length === 0) return (
            <div className={loadingClasses}>
                <h1 className='loadingSign'>Loading cats</h1>
                <div className='loading'></div>
            </div>
        )


        return (
            <div className={carGridClasses}>
                {cats.map((cat: any, index: number) => {

                    if (!cat.breeds[0]) return <div key={index}></div>
                    // console.log('cat', cat.breeds[0])

                    if (filter.allergy_safe) {
                        if (!cat.breeds[0].hypoallergenic) return
                    }

                    if (filter.hairType == 0 || filter.hairType == 1) {
                        if (cat.breeds[0].hairless !== filter.hairType) return
                    }

                    if (filter.childFriendly > 0) {
                        if (cat.breeds[0].child_friendly < filter.childFriendly) return
                    }

                    return (
                        <Card className='catCard' key={index} onClick={() => { showCatProfile(cat) }}>
                            <Card.Img variant="top" src={cat.url} />
                            <Card.Title className='text-center fw-bold'><p>{cat.breeds[0].name}</p></Card.Title>
                        </Card>
                    )
                })}
            </div>
        )
    }

    // function to navigate to the cat profile
    const showCatProfile = (cat) => {
        navigate('/cat-profile', { state: { cat: cat } })
    }

    // function to render the main container consisting of an action panel on the left
    // and the cat cards on the right
    return (
        <div className={mainContainerClasses}>
            <div className='searchContainer'>
                {actionPanel()}
                {showCats()}
            </div>
        </div>
    )
}
