import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"
import "./StarshipList.css"

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarshipData = async () => {
      const starships = await getStarshipList()
        setStarships(starships.results)
        console.log(starships)

    }
    fetchStarshipData()
  }, [])
  return (
    <div className="ships">
    <>
      {starships.map(starship =>
        <Link key={starship.name} to='/starship' state={{ starship }}>
          <h2 id="ship">
          {starship.name}
          </h2>
        </Link>
      )}
    </>
    </div>
  )
}

export default StarshipList