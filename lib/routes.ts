export function getHomePath() {
  return "/" as any;
}

export function getTopicsPath() {
  return "/topics" as any;
}

export function getTopicPath(topicId: string) {
  return `/topic/${topicId}` as any;
}

export function getSubtopicPath(topicId: string, subtopicId: string) {
  return `/topic/${topicId}/subtopic/${subtopicId}` as any;
}

export function getLevelPath(
  topicId: string,
  subtopicId: string,
  levelId: string
) {
  return `/topic/${topicId}/subtopic/${subtopicId}/${levelId}` as any;
}

export function getPartPath(
  topicId: string,
  subtopicId: string,
  levelId: string,
  partId: string
) {
  return `/topic/${topicId}/subtopic/${subtopicId}/level/${levelId}/${partId}` as any;
}