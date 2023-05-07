import { NotFoundStyled, NotFoundText } from "./NotFound.styled";

const NotFound = () => {
    return (
        <div>
            <NotFoundStyled> 404 Page not found!</NotFoundStyled>
            <NotFoundText>We're sorry, we couldn't find the page you requested.</NotFoundText>
        </div>
        
    )
}

export default NotFound;