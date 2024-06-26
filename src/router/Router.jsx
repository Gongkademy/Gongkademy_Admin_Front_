import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Member from "@pages/Member/Member";
import LectureNavbar from "@components/navbar/LectureNavbar.jsx";
import RegistLecture from "@pages/Lecture/RegistLecture";
import Notice from "@pages/Community/Notice";
import Qna from "@pages/Community/Qna";
import Concern from "@pages/Community/Concern";
import Home from "@pages/Home/Home";
import CommunityNavbar from "@/components/navbar/CommunityNavbar.jsx";
import LectureIntro from "@pages/Lecture/LectureIntro";
import LectureOrder from "@pages/Lecture/LectureOrder";
import LectureQna from "@pages/Lecture/LectureQna";
import LectureCourseReview from "@pages/Lecture/LectureCourseReview";
import LectureNotice from "@pages/Lecture/LectureNotice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "community",
        element: <CommunityNavbar />,
        children: [
          {
            path: "notice",
            element: <Notice />,
          },
          {
            path: "qna",
            element: <Qna />,
          },
          {
            path: "concern",
            element: <Concern />,
          },
        ],
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "lecture",
        element: <LectureNavbar />,
        children: [
          {
            path: "introduce",
            element: <LectureIntro />,
          },
          {
            path: "order",
            element: <LectureOrder />,
          },
          {
            path: "qna",
            element: <LectureQna />,
          },
          {
            path: "course-review",
            element: <LectureCourseReview />,
          },
          {
            path: "notice",
            element: <LectureNotice />,
          },
        ],
      },
      {
        path: "lecture/regist",
        element: <RegistLecture />,
      },
    ],
  },
]);
export default router;
