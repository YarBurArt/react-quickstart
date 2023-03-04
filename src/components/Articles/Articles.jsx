import React, { useState, useEffect } from "react"
import styles from './Articles.module.scss'

const Articles = () => {
    const [city, setCity] = useState('Moscow') 
    // console.log(city)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        console.log('City changed')
        if (city === 'Perm') console.log("Our person")
    }, [city])
    
    useEffect(()=> {
        setLoading(true)
        const fetchData = async() => {
            try{
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                    )
                const data = await response.json()
                setPosts(data)
                // console.log(data)
            } catch(err){
                console.log(err)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1 style={{margin:'20px'}}>Articles</h1>

            {loading && 'Loading...'}

            {/* <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city'
            /> */}
            <div className={styles.wrapper}>
                {posts.map(post => (
                <div className={styles.card}>
                    <img src="" alt="" />
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <a style={{textDecoration:'none'}} href="/">Read now</a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Articles
