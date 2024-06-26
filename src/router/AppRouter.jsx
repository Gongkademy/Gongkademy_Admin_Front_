import {
  Link,
  useLocation,
} from "react-router-dom";
import {
  StyledNav,
  StyledDiv,
} from "@router/AppRouter.style";

export default function AppRouter() {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <StyledNav>
        <Link to="/member">
          <StyledDiv
            active={
              location.pathname.includes("member")
                ? "true"
                : undefined
            }
          >
            <p>회원관리</p>
            <p>&gt;</p>
          </StyledDiv>
        </Link>
        <Link to="/community/notice">
          <StyledDiv
            active={
              location.pathname.includes(
                "community"
              )
                ? "true"
                : undefined
            }
          >
            <div>커뮤니티</div>
            <div>&gt;</div>
          </StyledDiv>
        </Link>
        <Link to="/lecture/introduce">
          <StyledDiv
            active={
              location.pathname.includes(
                "lecture"
              )
                ? "true"
                : undefined
            }
          >
            <div>강의</div>
            <div>&gt;</div>
          </StyledDiv>
        </Link>
      </StyledNav>
    </div>
  );
}
