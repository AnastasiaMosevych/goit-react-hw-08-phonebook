import { Outlet } from "react-router-dom";
import { NavContainer,Header, NavList, NavListItem, StyledLink } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Hearts } from "react-loader-spinner";
import { UseAuth } from "Hooks/useAuth";
import UserMenu from "components/UserMenu/UserMenu";

export const SharedLayout = () => {
    const { isLoggedIn } = UseAuth();
    return (
        <div>
            <Header>
                <NavContainer>
                    <nav>
                        <NavList>
                            <NavListItem>
                                <StyledLink to="/">Home</StyledLink>
                            </NavListItem>
                            <NavListItem>
                                {isLoggedIn ? <UserMenu /> : <StyledLink to="/register">Sign Up</StyledLink>}
                            </NavListItem>
                        </NavList>
                    </nav>
                </NavContainer>         
            </Header>
            <main>
                <Suspense fallback={<Hearts 
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />}>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </div>
    )
}