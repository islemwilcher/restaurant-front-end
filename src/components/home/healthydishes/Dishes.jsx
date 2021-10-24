
import { Container } from "@material-ui/core"
import DishesComponent from "./dishescomponent/DishesComponent"

const Dishes = () => {

    let reverse = false
    
    return (
        <Container>
            <DishesComponent reverse={reverse} />
        </Container>
    )
}

export default Dishes
