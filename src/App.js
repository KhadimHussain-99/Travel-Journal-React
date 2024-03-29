import './index.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map( item =>{
         return(
             <Card
                key={item.id}
                imageUrl={item.imageUrl}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
              />
         )
    })
    return(
        <div>
            <Navbar />
            {cards}
        </div>
    )
} 