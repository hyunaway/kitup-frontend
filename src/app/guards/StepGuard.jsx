import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router";
import { getTestDetail } from "@/features/cost/api/menuTests";
import { TEST_STATUS, STATUS_META } from "@/domain/testStatus";

// TODO: test.status 기준 접근 허용·리다이렉트 (domain/testStatus.js)
function StepGuard() {
  const { testId } = useParams();
  const { pathname } = useLocation();
  const [testState, setTestState] = useState(null);

  useEffect(() => {
    let active = true;

    getTestDetail(testId)
      .then((result) => {
        if (active) {
          setTestState({
            path: pathname,
            status: result.data.status,
          });
        }
      })
      .catch(() => {
        if (active) {
          setTestState({ path: pathname, status: null });
        }
      });

    return () => {
      active = false;
    };
  }, [testId, pathname]);

  if (!testState || testState.path !== pathname) {
    return <p>테스트 정보를 불러오는 중입니다.</p>;
  }

  const status = testState.status;

  const isOnboarding = pathname.includes("/onboarding/");
  const isDashboard = pathname.includes("/dashboard");
  const isPrecheck = pathname.endsWith("/precheck");
  const isReport = pathname.endsWith("/report");
  const isSimulator = pathname.endsWith("/simulator");

  const canAccess =
    (status === TEST_STATUS.DRAFT && isOnboarding) ||
    (status === TEST_STATUS.RUNNING && (isDashboard || isPrecheck)) ||
    (status === TEST_STATUS.COMPLETED && (isReport || isSimulator));

  if (!canAccess) {
    const redirectPath = STATUS_META[status]?.getPath(testId);

    if (!redirectPath) {
      return <p role="alert">테스트 상태를 확인할 수 없습니다.</p>;
    }

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default StepGuard;
