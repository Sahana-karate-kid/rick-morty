import React,{useState, useEffect} from 'react'
import axios from 'axios'

function FetchEpisodes() {

        const [post, setPost] = useState({})
        const [id, setId] = useState(1)
        const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    
        useEffect(() => {
            axios
                .get(`https://rickandmortyapi.com/api/character/${id}`)
                .then(res => {
            console.log(res)
            setPost(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, [idFromButtonClick])
    
        const handleClick = () => {
            setIdFromButtonClick(id)
        }
    
        return (
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button type="button" onClick={handleClick}>Fetch Post</button>
                <div>{post.name}</div>
                <div>{post.gender}</div>
                <div>{post.species}</div>
                <div>{post.location.name}</div>
                <div>{post.status}</div>
                <img src={post.image}></img>

                {/* <ul>
                    {posts.map(post => (
              <li key={post.id}>{post.title}</li>
                    ))}
                </ul> */}
            </div>
        )
    }
 

export default FetchEpisodes
