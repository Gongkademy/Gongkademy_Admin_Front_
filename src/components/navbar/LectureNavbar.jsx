import {
  Link,
  useLocation,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  StyledNav,
  StyledDiv,
} from "./LectureNavbar.Style";
const AdminLecture = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <StyledNav>
          <Link to="/lecture/introduce">
            <StyledDiv
              active={
                location.pathname.includes(
                  "introduce"
                )
                  ? "true"
                  : undefined
              }
            >
              강의소개
            </StyledDiv>
          </Link>
          <Link to="/lecture/order">
            <StyledDiv
              active={
                location.pathname.includes(
                  "order"
                )
                  ? "true"
                  : undefined
              }
            >
              목차
            </StyledDiv>
          </Link>
          <Link to="/lecture/qna">
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
          <Link to="/lecture/course-review">
            <StyledDiv
              active={
                location.pathname.includes(
                  "course-review"
                )
                  ? "true"
                  : undefined
              }
            >
              수강평
            </StyledDiv>
          </Link>
          <Link to="/lecture/notice">
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
        </StyledNav>
      </div>
      <Outlet />
    </div>
  );
};
export default AdminLecture;
