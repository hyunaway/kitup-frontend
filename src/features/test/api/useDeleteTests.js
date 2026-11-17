import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";
import { queryKeys } from "@/shared/api/queryKeys";

// 선택한 테스트 여러 건 삭제 (DELETE /api/tests/{test_id}/ 를 건별로 호출)
// 일부만 실패해도 성공한 건은 목록에서 빠지도록 항상 목록을 다시 불러온다.
export default function useDeleteTests() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (testIds) => {
      const results = await Promise.allSettled(
        testIds.map((testId) =>
          apiClient(`/tests/${testId}/`, { method: "DELETE" }),
        ),
      );
      const failed = results.filter((result) => result.status === "rejected");
      if (failed.length > 0) {
        throw new Error(
          `${testIds.length}건 중 ${failed.length}건을 삭제하지 못했습니다.`,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.tests.all });
    },
  });
}
