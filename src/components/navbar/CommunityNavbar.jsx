import {
  Link,
  useLocation,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  StyledNav,
  StyledDiv,
} from "./CommunityNavbar.Style";
const AdminCommunity = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <StyledNav>
          <Link to="/community/notice">
            <StyledDiv
              active={
                location.pathname.includes(
                  "notice"
                )
                  ? "true"
                  : undefined
              }
            >
              공지사항
            </StyledDiv>
          </Link>
          <Link to="/community/qna">
            <StyledDiv
              active={
                location.pathname.includes("qna")
                  ? "true"
                  : undefined
              }
            >
              QnA
            </StyledDiv>
          </Link>
          <Link to="/community/concern">
            <StyledDiv
              active={
                location.pathname.includes(
                  "concern"
                )
                  ? "true"
                  : undefined
              }
            >
              고민
            </StyledDiv>
          </Link>
        </StyledNav>
      </div>
      <Outlet />
    </div>
  );
};
export default AdminCommunity;
